import React from "react";
import { useState, useEffect } from "react";
import { clientID } from "../utils";
import { clientSecret } from "../utils";
import { scopes } from "../utils";
import { redirectURI } from "../utils";

function GetAccessTokenComponent() {
    // 
    const [data, setData] = useState(null);

    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&response_type=token`;

    // window.location.href = authorizationUrl;


    useEffect(() => {
        console.log("this is the acccess token:", data);
    }, [data]);

    function fetchData() {
        
        fetch('https://accounts.spotify.com/api/token/', {
            // fetch(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectURI}&scope=user-library-read/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}&scope=user-library-read`,
        })
            .then(response => response.json())
            .then(data => {
                setData(data.access_token);
                console.log('Access Token:', data.access_token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <button onClick={fetchData}>Click me to get access token (Check console)</button>
        </>
    )
}

export default GetAccessTokenComponent;



/*

// Attach a click event listener to the "Login with Spotify" button
document.querySelector('#login-button').addEventListener('click', () => {
    // Redirect the user to the Spotify authorization URL
    window.location.href = authorizationUrl;
});

// Function to extract access token from URL
function getAccessTokenFromURL() {
    const hashParams = window.location.hash.substring(1).split('&');
    for (const param of hashParams) {
        const [key, value] = param.split('=');
        if (key === 'access_token') {
            return value;
        }
    }
    return null;
}

// Check if the page is loaded after a Spotify redirect
if (window.location.hash && window.location.hash.includes('access_token')) {
    // Extract the access token from the URL
    const accessToken = getAccessTokenFromURL();

    // Store the access token securely (e.g., in localStorage or a secure server)
    console.log('Access Token:', accessToken);
}


*/