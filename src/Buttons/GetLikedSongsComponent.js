import React from "react";
import { useState, useEffect, useContext } from "react";
import SpotifyContext from "../Context/SpotifyContext";

function GetLikedSongsComponent() {
    
    const [data, setData] = useState([]);
    const {accessToken} = useContext(SpotifyContext);

    useEffect(() => {
        console.log("these are the liked songs:", data);

        data.forEach(obj=>{
            console.log(obj.track.name)
        })
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
            <div class = "border border-black m-2 text-center" onClick={fetchData}>Click me to get liked songs</div>
        </>
    )
}

export default GetLikedSongsComponent;

