
// const express = require('express');
// const querystring = require('querystring');
// const fetch = require('node-fetch');

// const app = express();

// // Spotify API credentials
// const clientId = '0c664075c9aa4d9a923efa983fa2516d';
// const clientSecret = '971973d2c1ff462a897b56ba421a3730';
// const redirectUri = 'http://localhost:3000'; // This should be a URL that Spotify will redirect to after the user authorizes your app

// // Step 1: Redirect the user to Spotify's authorization page
// app.get('/login', (req, res) => {
//     const scopes = 'user-library-read user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-read-private user-top-read user-follow-read user-follow-modify user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing'; // Specify the scopes your app needs
//     const state = 'some-state-value'; // You can generate a random state value for added security

//     const queryParams = querystring.stringify({
//         response_type: 'code',
//         client_id: clientId,
//         scope: scopes,
//         redirect_uri: redirectUri,
//         state: state
//     });

//     const authorizationUrl = `https://accounts.spotify.com/authorize?${queryParams}`;

//     res.redirect(authorizationUrl);
// });

// // Step 2: Handle the callback from Spotify
// app.get('/callback', async (req, res) => {
//     const code = req.query.code || null;
//     const state = req.query.state || null;

//     // Verify the state to prevent CSRF attacks (optional but recommended)
//     if (state === 'some-state-value') {
//         // Step 3: Exchange the authorization code for an access token
//         const tokenUrl = 'https://accounts.spotify.com/api/token';

//         const data = {
//             grant_type: 'authorization_code',
//             code: code,
//             redirect_uri: redirectUri
//         };

//         const headers = {
//             'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         };

//         try {
//             const response = await fetch(tokenUrl, {
//                 method: 'POST',
//                 body: querystring.stringify(data),
//                 headers: headers
//             });

//             const tokenData = await response.json();
//             if (tokenData.access_token) {
//                 const accessToken = tokenData.access_token;
//                 const refreshToken = tokenData.refresh_token;
//                 // You now have an access token and refresh token
//                 console.log(`Access Token: ${accessToken}`);
//                 console.log(`Refresh Token: ${refreshToken}`);
//                 res.send('Access token obtained successfully.');
//             } else {
//                 res.send('Error: Unable to obtain access token.');
//             }
//         } catch (error) {
//             console.error(error);
//             res.send('Error: Something went wrong during token exchange.');
//         }
//     } else {
//         res.send('Error: Invalid state parameter.');
//     }
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



// /*

// export const clientID = "0c664075c9aa4d9a923efa983fa2516d";
// export const clientSecret = "971973d2c1ff462a897b56ba421a3730"
// export const redirectURI = "http://localhost:3000/";
// export const scopes = 'user-library-read user-read-email playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-read-private user-top-read user-follow-read user-follow-modify user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing';
// export const apparentlybean = "31ebxohlfumzgajivauc4plsmcyq";
// export const crack_account_id = "cqt10sb9deefos6gq1kn6hkkn";
// export const generateRandomString = (length) => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomString = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
//   }

//   return randomString;
// }
// */