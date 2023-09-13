import { useState, useEffect } from "react";
import { accessToken } from "../utils";

// this is for getting content of a playlist.
// it'll return the last first 100 songs in it.
// The ID is of the - Spotify Liked Songs API.

function GetPlaylist() {
    
    const [data, setData] = useState([]);
    const [ids, setIds] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {

        if (data && data.tracks && data.tracks.items) {
            // console.log("Playlist content", data.tracks.items);
            // console.log("these are the items" , items);
            const Ids = items.map(item => item.track.id);
            console.log("These are the IDs", Ids);
            // at this time, items has all the things in it
            console.log("items: ", items);

        }

    }, [data]);

    function fetchData() {
        fetch('https://api.spotify.com/v1/playlists/2Cv9zXsf4S21y3D3Yv52IH?', {
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
                setItems(data.tracks.items);
                setIds(items);
                console.log('Songs in the Kanye Best playlist:', items);
            })
            .catch(error => {
                console.error('Error fetching playlist content', error);
            });
    }

    return (
        <>
            <button onClick={fetchData}>Click me to get Playlist Content</button>
        </>
    )
}

export default GetPlaylist;
