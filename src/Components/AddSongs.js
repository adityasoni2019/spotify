
function AddSongs() {

    function handleAddSongs() {

        // now, what this function does is, it'll add a song to a playlist.

        const data = { ids: ['7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B'] };

        fetch("https://api.spotify.com/v1/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B", {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${'BQDkVsUeGoNJUVxY_exNJEi5718CSlbw_IaynrtACK2qPXP_h1_ZesVzrtPpLOkJoJPbZzbqCjvc-fdBrdjdOcATG_6dtMfb4WLtYc9G6YzujdDZrBjo9Ti_VV1nfvoW16DgN6FLCy2IMgs-_eqTzNGkYPPUEjKhPf5PHqt5XLCk7h6gUiUx0etTxMLwbk6tHinVDX_YitwOHPPZSTm-5kwXk3aB89ws0OszRVN8'}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    console.log("response status ", response.status)
                    throw new Error('Network response was not ok');
                }
                return ;
            }).then(data => {
                console.log("Song added. Here's the repsonse: ", data);
            }).catch(error => {
                console.error('Error fetching liked songs: ', error);
            });
    }

    return (
        <>
            <button onClick={handleAddSongs}>Add Songs to the playlist</button>
        </>
    )


}

export default AddSongs;



/*

fetch(url, {
  method: 'PUT',
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data here
    console.log('Response Data:', data);
  })
  .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
  });
*/