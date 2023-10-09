import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import SpotifyContext from "../Context/SpotifyContext";
import MainContent from "../Components/MainContent";

function GetRandomUserPlaylist() {

    const { accessToken, userId } = useContext(SpotifyContext);
    // using the setAccessToken, and userId at the time of setting the user in the scope auth page.
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log("these are the playlists of the user:", data);
        data.forEach(obj => {
            // console.log(obj.name)
        })
    }, [data]);

    function fetchData() {
        fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {

            // note, this is a specific user (and not a "random" user).
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },

        })
            .then(response => {
                if (!response.ok) {
                    console.log(
                        "response status", response.status)
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.items);
                // console.log('Liked Songs:', data);
            })
            .catch(error => {
                console.error('Error fetching playlist of the random user:', error);
            });
    }

    return (
        <>
            <div class="border border-black m-2 text-center" onClick={fetchData}>Click to get the playlists of the random loggedin user</div>
            <MainContent playlists = {data}/>
        </>
    )
}

export default GetRandomUserPlaylist;

