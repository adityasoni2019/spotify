
function DeleteTracks() {

    function handleDeleteTracks() {
        // this will delete tracks. 

        const url = 'https://api.spotify.com/v1/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B';
        const accessToken = 'BQDUXYR_SYo2X3ycNvfAY4LPdo3SicXidYWOn2CuEJ9CW-UP6mvp-uv9Qi54WyXEheb5Qj0VDeQrvqFsZLwCgYTUH4Rh0sHKWo_I09T8S0ibyV9n-HGNdUamodGc9CbX8z1JNgcE-_MHXZSQVyA_CY1xzUwXcp-6_q8d4glr0YhC5C7p3V0_SPtRtmVNKJFdDYtWh-3k77YR5UJVszno4261GYPuTNQrwXvUDeBANnEM8daESYTKc9XPcXxjVcgRHBlqCRKEVlUyjtbgPhMafDLCfTuYOPfApmT-JEaen-XtqFbn35GBnft3RbwEOFNw-Ijmyaptmunq';
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