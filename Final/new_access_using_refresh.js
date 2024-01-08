const fetch = require('node-fetch'); // If using Node.js, otherwise use global fetch

const clientId = '0c664075c9aa4d9a923efa983fa2516d';
const clientSecret = '971973d2c1ff462a897b56ba421a3730';
const refreshToken = 'AQCxyTjUArmy_NyPiMJKXQho9z3I_p5YfAnO7R9pYsG8ZSzvVtRqB5kty1xCOPGz22lCDyp1F5ciDiZSYrCJITbTbsPpM4eCqCii4yOdb3GqKt7InxOz2yj8e0-xl8LiWDA';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64'))
};

const body = new URLSearchParams();
body.append('grant_type', 'refresh_token');
body.append('refresh_token', refreshToken);

fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: headers,
    body: body
})
    .then(response => response.json())
    .then(data => {
        const newAccessToken = data.access_token;
        // Use the new access token as needed
        console.log(newAccessToken);
        var accessToken = newAccessToken;

        function fetchNumberOfSongs() {
            //  finding the length of the plalist.
            var idsOfTheLast49 = ''
            fetch("https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw/tracks", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },

            })
                .then(response => {
                    if (!response.ok) {
                        console.log("response status", response.status)
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('no. of songs in the playlist: ' + data.total);
                    let offset = data.total - 49;
                    function fetchData() {
                        // getting the ids of those songs
                        fetch(`https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw/tracks?offset=${offset}&limit=50`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${accessToken}`,
                            },

                        })
                            .then(response => {
                                if (!response.ok) {
                                    console.log("response status", response.status)
                                    throw new Error('Network response was not ok');
                                }
                                return response.json();
                            })
                            .then(data => {
                                data = data.items;
                                console.log('length of the fetched liked songs');
                                console.log(data.length);
                                data.forEach(obj => {

                                    idsOfTheLast49 += (obj.track.id + ',');
                                    console.log(obj.track.name)
                                })
                                idsOfTheLast49 = idsOfTheLast49.slice(0, -1);
                                console.log(idsOfTheLast49);
                                // we have saved the ids of the 49 songs. 

                                // now, we'll have a fetch function that'll move the songs to the account
                                function addSongs() {
                                    // adding the songs to the main account.
                                    fetch(`https://api.spotify.com/v1/me/tracks?ids=${idsOfTheLast49}`, {

                                        method: 'PUT',
                                        headers: {
                                            'Authorization': `Bearer ${accessToken}`,
                                            'Content-Type': 'application/json'
                                        },

                                    })
                                        .then(response => {
                                            if (!response.ok) {
                                                console.log("response status", response.status)
                                                throw new Error('Network response was not ok');
                                            }
                                            // return response.json();
                                        })
                                        .then(data => {
                                            console.log('added the liked songs');
                                        })
                                        .catch(error => {
                                            console.error('Error fetching liked songs:', error);
                                        });
                                }
                                addSongs();
                            })
                            .catch(error => {
                                console.error('Error fetching liked songs:', error);
                            });
                    }
                    fetchData();
                })
                .catch(error => {
                    console.error('Error fetching liked songs:', error);
                });
        }
        fetchNumberOfSongs();
    })
    .catch(error => {
        // Handle errors
    });