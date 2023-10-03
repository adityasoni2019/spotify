import React from "react";
import { useState, useEffect } from "react";
import { accessToken } from "../utils";

function GetRandomUserPlaylist() {
    // 
    const [data, setData] = useState([]);
    

    useEffect(() => {
        console.log("these are the playlists of the user:", data);

        data.forEach(obj=>{
            console.log(obj.name)
        })
    }, [data]);
    
    function fetchData() {
        fetch("https://api.spotify.com/v1/users/31ebxohlfumzgajivauc4plsmcyq/playlists", {

            // crack account id - cqt10sb9deefos6gq1kn6hkkn
            // apparentlybean - 31ebxohlfumzgajivauc4plsmcyq

            // note, this is a specific user (and not a "random" user).
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
                console.error('Error fetching playlist of the random user:', error);
            });

    }

    return (
        <>
            <button onClick={fetchData}>Click to get the playlists of the random in user</button>
        </>
    )
}

export default GetRandomUserPlaylist;

