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
        fetch("https://api.spotify.com/v1/playlists/7BevU6RdC9nVngtGMKvRrw/tracks?offset=${offset}&limit=50 ", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer BQAd4pXlUTApj0onU5BkNfGIPEkLbYSzmBeY41q_Q3NcJ34lpVusG_C3Ng5CgH97AcnvjSREza2P6-xqLHecsG_5GaGDlb6hwxWFw7zQ9B9VOq0PN0OwCCoPZLI4sEZPAThqT6WLOnl93enGBpYUIat1AdEv4XpErmAafD8CNcOq6aTHOcZ4CCaxtPN2YV-G24alJD8UDzsEYv7MZ4dAnZw7q0rQjgymkeqzDksntj9YELZ_4S5tdYDyHp5b1M4hn9xdzSoOy8uAXUSmSULwZO8xSOb4rr5Uj4VVjKvZ4XW0Beo7-TQirPxzgrzkJkXd_rd7cehAuopc3Zw`,
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

