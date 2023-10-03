import React from 'react';

function LogoutButton() {

    const handleLogout = () => {
        // // Send a POST request to the Spotify logout endpoint
        fetch('https://open.spotify.com/logout', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Referrer-Policy': 'strict-origin-when-cross-origin'
            }
        })
            .then(() => {
                // The logout request was sent successfully
                console.log('Logged out from Spotify.');
            })
            .catch(error => {
                // Handle any errors that occurred during the logout request
                console.error('Error:', error);
            });

        // I tested the lines below, didn't work. Will checkout again. 

        
        // // <a href="https://open.spotify.com/logout">Logout from Spotify</a>
        // window.location.href = `${window.location.href.split('#')[0]}?change_user=true`
        // console.log("logged out the user.")
    };

    return (
        <>
            <button onClick={handleLogout}>Logout from Spotify</button>
            {/* <a href="https://open.spotify.com/logout">Logout from Spotify</a> */}
        </>

    );
}

export default LogoutButton;
