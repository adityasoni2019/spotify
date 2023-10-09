// so, we know that this is working.
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import SpotifyContext from "../Context/SpotifyContext";

function Lance() {
    // 
    const [data, setData] = useState([]);
    const { accessToken} = useContext(SpotifyContext);

    useEffect(() => {
        // console.log("");
        console.log("this is the data coming from the lance button", data);

    }, [data]);

    function fetchData() {
        fetch('https://api.spotify.com/v1/me/albums/', {
        // fetch('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${accessToken}`,
            },
            // body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}&scope=user-library-read`,
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div class = "border border-black m-2 text-center" onClick={fetchData}>Lance button</div>
        </>
    )
}

export default Lance;