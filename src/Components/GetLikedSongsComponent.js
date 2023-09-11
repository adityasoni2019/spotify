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
                'Authorization': `Bearer ${'BQDkVsUeGoNJUVxY_exNJEi5718CSlbw_IaynrtACK2qPXP_h1_ZesVzrtPpLOkJoJPbZzbqCjvc-fdBrdjdOcATG_6dtMfb4WLtYc9G6YzujdDZrBjo9Ti_VV1nfvoW16DgN6FLCy2IMgs-_eqTzNGkYPPUEjKhPf5PHqt5XLCk7h6gUiUx0etTxMLwbk6tHinVDX_YitwOHPPZSTm-5kwXk3aB89ws0OszRVN8'}`,
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

