
function DeleteTracks() {

    function handleDeleteTracks() {
        // this will delete tracks. 

        const url = 'https://api.spotify.com/v1/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';
        const accessToken = 'BQDkVsUeGoNJUVxY_exNJEi5718CSlbw_IaynrtACK2qPXP_h1_ZesVzrtPpLOkJoJPbZzbqCjvc-fdBrdjdOcATG_6dtMfb4WLtYc9G6YzujdDZrBjo9Ti_VV1nfvoW16DgN6FLCy2IMgs-_eqTzNGkYPPUEjKhPf5PHqt5XLCk7h6gUiUx0etTxMLwbk6tHinVDX_YitwOHPPZSTm-5kwXk3aB89ws0OszRVN8';
        const data = { ids: ['7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B'] };

        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        fetch(url, {
            method: 'DELETE',
            headers: headers, 
            body: JSON.stringify(data)

        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Tracks deleted successfully.');
            })
            .catch(error => {
                // Handle any errors here
                console.error('Error:', error);
            });
    }

    return (
        <>
            <button onClick={handleDeleteTracks}>
                Delete tracks
            </button>
        </>
    )

}

export default DeleteTracks;


/*

   
*/