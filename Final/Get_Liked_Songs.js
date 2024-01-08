var idsOfTheLast49 = ''
var accessToken = '';

function fetchNumberOfSongs() {
    //  finding the length of the plalist.
    fetch("https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw/tracks", {
        method: 'GET',
        headers: {
            'Authorization': `Bearer BQAd4pXlUTApj0onU5BkNfGIPEkLbYSzmBeY41q_Q3NcJ34lpVusG_C3Ng5CgH97AcnvjSREza2P6-xqLHecsG_5GaGDlb6hwxWFw7zQ9B9VOq0PN0OwCCoPZLI4sEZPAThqT6WLOnl93enGBpYUIat1AdEv4XpErmAafD8CNcOq6aTHOcZ4CCaxtPN2YV-G24alJD8UDzsEYv7MZ4dAnZw7q0rQjgymkeqzDksntj9YELZ_4S5tdYDyHp5b1M4hn9xdzSoOy8uAXUSmSULwZO8xSOb4rr5Uj4VVjKvZ4XW0Beo7-TQirPxzgrzkJkXd_rd7cehAuopc3Zw`,
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
            // setData(data.items);
            console.log('no. of songs in the playlist: ' + data.total);
            let offset = data.total - 49; //
            // so, if 100 songs, offset would be 49, 
            function fetchData() {
                // getting the ids of those songs
                fetch(`https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw/tracks?offset=${offset}&limit=50`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer BQAd4pXlUTApj0onU5BkNfGIPEkLbYSzmBeY41q_Q3NcJ34lpVusG_C3Ng5CgH97AcnvjSREza2P6-xqLHecsG_5GaGDlb6hwxWFw7zQ9B9VOq0PN0OwCCoPZLI4sEZPAThqT6WLOnl93enGBpYUIat1AdEv4XpErmAafD8CNcOq6aTHOcZ4CCaxtPN2YV-G24alJD8UDzsEYv7MZ4dAnZw7q0rQjgymkeqzDksntj9YELZ_4S5tdYDyHp5b1M4hn9xdzSoOy8uAXUSmSULwZO8xSOb4rr5Uj4VVjKvZ4XW0Beo7-TQirPxzgrzkJkXd_rd7cehAuopc3Zw`,
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
                        // setData(data.items);
                        console.log('Liked Songs:');
                        console.log(data);
                        data = data.items;
                        data.forEach(obj => {

                            idsOfTheLast49 += (obj.track.id + ',');
                            console.log(obj.track.name)
                        })
                        idsOfTheLast49 = idsOfTheLast49.slice(0, -1);
                        console.log(idsOfTheLast49);
                        // we have saved the ids of the 49 songs. 

                        // now, we'll have a fetch function that'll move the songs to the account
                        function addSongs() {

                            fetch(`https://api.spotify.com/v1/me/tracks?ids=${idsOfTheLast49}`, {

                                method: 'PUT',
                                headers: {
                                    'Authorization': `Bearer BQDhjc75NJYImWkQpVNn_Vv1Y8OzFKKFwc_i6YzvgWZlWU-x1DUeAwNoaVzjySVEMtEWCEuTydr_WGj266XadEq9tJgFbqYZt4_VboG_F6ko1X0nP25UOrKQKrgJhkMoGLCoWoGyd6AtKq5gz8d16BayuQA8oD4hfnZ9IUTNGlZYzoc2zszNZpAK_epcxSYT1wfLAFW-f5pseo4dwQkPV9j1aksl1z5YQz4PMjia`,
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
                                    console.log('Liked Songs:');
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
