import { useState, useEffect } from "react";
import { accessToken } from "../utils";
import AddSongs from "./AddSongs";

// this is for getting content of a playlist.
// it'll return the last first 50 songs in it.
// The ID is of the - Spotify Liked Songs API.

function GetPlaylist() {
    
    const [data, setData] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {

        if (data && data.items) {
            console.log("playlist fetched");
        }

    }, [data]);


    
    function fetchData() {
        fetch('https://api.spotify.com/v1/playlists/5Ue3105VKSmeQN6MH9EYqU/tracks?limit=50', {
            // this is the "Liked Songs Spotify API - 2Cv9zXsf4S21y3D3Yv52IH"
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    console.log("response status", response.status)
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setItems(data.items);
            })
            .catch(error => {
                console.error('Error fetching playlist content', error);
            });
    }

    return (
        <>
            <button onClick={fetchData}>Click me to get Playlist Content</button>
            <AddSongs data = {items}/>
        </>
    )
}

export default GetPlaylist;
