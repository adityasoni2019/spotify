// // src/components/Callback.js
// import React, { useEffect } from 'react';

// const Callback = () => {
//     useEffect(() => {
//         const accessToken = window.location.hash.substring(1).split('&')[0].split('=')[1];
//         if (accessToken) {
//             // Log the access token to the console (for demonstration)
//             console.log('Access Token:', accessToken);

//             // Fetch liked songs using the access token (using fetch)
//             fetchLikedSongs(accessToken);
//         }
//     }, []);

//     const fetchLikedSongs = (accessToken) => {
//         // Use the access token to make API requests to Spotify (fetch liked songs)
//         // You can implement this part using the fetch API.
//         // Refer to the Spotify Web API documentation for how to fetch liked songs.
//         // Here's an example of how to use the fetch API:
//         fetch('https://api.spotify.com/v1/me/tracks', {
//             headers: {
//                 'Authorization': `Bearer ${accessToken}`,
//             },
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log('Liked Songs:', data.items);
//         })
//         .catch((error) => {
//             console.error('Error fetching liked songs:', error);
//         });
//     };

//     return (
//         <div>
//             <p>Fetching liked songs...</p>
//         </div>
//     );
// };

// export default Callback;