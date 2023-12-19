const fetch = require('node-fetch');
// const btoa = require('btoa'); // for base64 encoding

const clientId = '0c664075c9aa4d9a923efa983fa2516d';     // Replace with your client ID
const clientSecret = '971973d2c1ff462a897b56ba421a3730'; // Replace with your client secret

const getSpotifyAccessToken = async () => {
    const headers = {
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const body = 'grant_type=client_credentials';

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: headers,
            body: body
        });

        const data = await response.json();
        console.log('Access Token:', data.access_token);
        return data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
};

getSpotifyAccessToken();
