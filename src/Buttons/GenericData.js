// https://api.spotify.com/v1/episodes/512ojhOuo1ktJprKbVcKyQ

import React from "react";
import { useState, useEffect, useContext } from "react";
import SpotifyContext from "../Context/SpotifyContext";

function GetGenericData() {

    const [data, setData] = useState();
    const { accessToken } = useContext(SpotifyContext);

    useEffect(() => {
        console.log("generic data:");
        console.log(data);
    }, [data]);

    function fetchData() {
        fetch("https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw ", {
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
                // setData(data.items);
                console.log('Liked Songs:');
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching liked songs:', error);
            });
    }

    return (
        <>
            <div class="border border-black m-2 text-center" onClick={fetchData}>Click me to get generic data</div>
        </>
    )
}

export default GetGenericData;

