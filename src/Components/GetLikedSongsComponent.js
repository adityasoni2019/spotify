import React from "react";
import { useState, useEffect } from "react";
import { accessToken } from "../utils";

function GetLikedSongsComponent() {
    // 
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("these are the saved albums:", data);
    }, [data]);

    function fetchData() {
        fetch("https://api.spotify.com/v1/me/albums", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${'BQBA6ahOOFwU7PzEBmv-K53dHL5W-RScDExAX65Iy9GA2cHgnIr-_EWIAEk0sUCTCwu27gMlIOm0OdiFb_tiQ_u8AucU04X_Iv5OZNMLQuZ_1g90i0a_BVDFwObP1MCdzP0gwVEfAWFpImBy1eX2U7ZRyMdSzZYQPDpEOIF69RDhLP_FIv-PxTKqK18FTBCBjd-3zlqbSQkG7gZLHemIKtRmHargyw'}`,
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

