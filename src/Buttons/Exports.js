import React, { useEffect, useState } from "react";
import SpotifyContext from "../Context/SpotifyContext";
import { useContext } from "react";

function ExportButton({ id, name }) {

    const { accessToken } = useContext(SpotifyContext);
    const [data, setData] = useState();

    function extractValues(data) {
        return data.map(item => ({
            SpotifyId: item.track.id,
            Name: item.track.name,
            // Artists: item.track.artists.map(artist => artist.name).join(','),
            ReleaseDate: item.track.album.release_date,
        }));
    }

    useEffect(() => {
        console.log("This is the content of the playlist");
        console.log(data);
        console.log("enfd");
        if (data) {

            // const headerRow = ['SpotifyId', 'Name', 'Artists', 'Release Date']; // we're not able to use this right now, cause, in the case of multiple artists, the name are messing up the cell position. 
            const headerRow = ['SpotifyId', 'Name', 'Release Date'];

            // Combine header row and data rows
            const extractedData = extractValues(data);
            const allRows = [headerRow, ...extractedData.map(item => Object.values(item))];

            const csvData = allRows.map(item => Object.values(item).join(',')).join('\n');

            const blob = new Blob([csvData], { type: 'text/csv' });
            const blobUrl = window.URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.href = blobUrl;
            downloadLink.download = `${name}.csv`; // this is the name
            downloadLink.click();
            window.URL.revokeObjectURL(blobUrl);


        }
    }, [data]);

    function handleExport() {
        console.log("This is the playlist id: " + id);

        fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
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
            })
            .catch(error => {
                console.error('Error fetching the content of the playist :', error);
            });
    }

    return (
        <>
            <div class="border border-black m-2 text-center" onClick={handleExport}>
                Export Button
            </div>
        </>
    )
}

export default ExportButton;
