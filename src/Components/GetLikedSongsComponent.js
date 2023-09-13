import React from "react";
import { useState, useEffect } from "react";
import { accessToken } from "../utils";

function GetLikedSongsComponent() {
    // 
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("these are the saved tracks", data.items);
    }, [data]);

    function fetchData() {
        fetch("https://api.spotify.com/v1/me/tracks?limit=50", {
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
                setData(data.items);
                console.log('Liked Songs:', data);
            })
            .catch(error => {
                console.error('Error fetching liked songs:', error);
            });

    }

    return (
        <>
            <button onClick={fetchData}>Click me to get Saved Albums</button>
        </>
    )
}

export default GetLikedSongsComponent;

