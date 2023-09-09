import React from "react";
import { useState, useEffect } from "react";
import { accessToken } from "../utils";

function GetLikedSongsComponent() {
    // 
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("these are the liked songs:", data);
    }, [data]);
    
    function fetchData() {
        fetch("https://api.spotify.com/v1/me/albums", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${'BQCFr-2el645U2fBCX-tUXc1vb6QsshCpIbT0sZ9_vjlcD0UGEtq5ZAs6Icx32unjVIylb9I-Bw8Ns-KzdHNalGrXRlUBjCnNhV3SGAOice3KHLeR2-aEY1202kXKzL26Xep8O0n5i38J7JjMnQ2y_StThjol9NIEh19Q5YHCgtDrZA1tcFZ1_NeXXdI5EBAUdb3xccXkIFuY2fJ7gabgX6PP7pnpQ'}`,
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
            <button onClick={fetchData}>Click me to get liked songs</button>
        </>
    )
}

export default GetLikedSongsComponent;

