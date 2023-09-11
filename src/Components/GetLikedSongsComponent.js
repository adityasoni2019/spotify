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
                'Authorization': `Bearer ${'BQBJX9_vnBMhbe1fqXdgO6Q3605E-W2x3mrYWgq_HSSeqXCBQcsYZC6U5t9rQ4VlMkeLiKwWWiW9fk2QJVINctsmNHfab53WFWvm5UzRagj84C0FqlC7PBy7eOnNyWoo4VOYtm9u5NMOeRDMpnU3q6M8efb20UkJU983sBQh3QBYZ_LNf-xFxwRwgzSaDh-MRFMo3x4PUkDXV9AKdBS8nxgYyQPeOObGjriKTetd8SyRCIPLGAL-aabL5D06UbieYDMGiAVjvCNyQXnRVoOiWZWbqzLKZ4-QVdNayuhH_UkabM2PJENkkuB9PGhstiNV1o24Pw1sD_sa'}`,
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

