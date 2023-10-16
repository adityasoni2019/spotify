import React from 'react';
import { redirectURI } from '../utils';
function Logout() {

    // const handleLogout = () => {
    //     // // Send a POST request to the Spotify logout endpoint
    //     fetch('https://open.spotify.com/logout', {
    //         method: 'GET',
    //         mode: 'no-cors',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Referrer-Policy': 'strict-origin-when-cross-origin'
    //         }
    //     })
    //         .then(() => {
    //             // The logout request was sent successfully
    //             console.log('Logged out from Spotify.');
    //         })
    //         .catch(error => {
    //             // Handle any errors that occurred during the logout request
    //             console.error('Error:', error);
    //         });

    //     // I tested the lines below, didn't work. Will checkout again. 


    //     // // <a href="https://open.spotify.com/logout">Logout from Spotify</a>
    //     // window.location.href = `${window.location.href.split('#')[0]}?change_user=true`
    //     // console.log("logged out the user.")
    // };

    const logoutUrl = `https://open.spotify.com/logout`

    function handleLogout() {
        window.location.href = logoutUrl;
        // I've redirected the user.
        // now, once the user has already registered, they'll get redirected back to the redirecURL.
    }
    return (
        <>
            <div class = "border border-black m-2" onClick={handleLogout}>Logout from Spotify</div>
            {/* <div class="border border-black m-2 flex flex-col text-center">
                <a href="https://open.spotify.com/logout">Logout from Spotify</a>
            </div> */}
        </>

    );
}

export default Logout;
