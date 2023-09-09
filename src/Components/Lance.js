// so, we know that this is working.
import React from "react";
import { useState, useEffect } from "react";
import { accessToken } from "../utils";
function Lance() {
    // 
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log("");
        console.log("this is the data coming from the lance button", data);

    }, [data]);

    function fetchData() {
        fetch('https://api.spotify.com/v1/me/albums/', {
        // fetch('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${accessToken}`,
            },
            // body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}&scope=user-library-read`,
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <button onClick={fetchData}>Lance button</button>
        </>
    )
}

export default Lance;


/*


const clientId = 'YOUR_CLIENT_ID'; // Replace with your Spotify Developer App's Client ID
const redirectUri = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI

// Define the scopes yoƒu want to request (space-separated)
const scopes = 'user-library-read user-read-email user-read-private';

// Spotify authorization URL with multiple scopes
const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=token`;

// Redirect the user to the Spotify authorization URL
window.location.href = authorizationUrl;

*/