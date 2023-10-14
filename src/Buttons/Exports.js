import React, { useEffect, useState } from "react";
import SpotifyContext from "../Context/SpotifyContext";
import { useContext } from "react";

function ExportButton({ id, name, totalTracks }) {

    const { accessToken } = useContext(SpotifyContext);
    const [data, setData] = useState(null);

    let data_new = [];
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

        // const limit = 100;
        // const numRequests = Math.ceil(totalTracks / limit);
        // let allTracks = [];
        if (data) {

            // const headerRow = ['SpotifyId', 'Name', 'Artists', 'Release Date']; // we're not able to use this right now, cause, in the case of multiple artists, the name are messing up the cell position. 
            const headerRow = ['SpotifyId', 'Name', 'Release Date'];
            console.log('this is the log form inside the useEffect in the data condition ')
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

    function handleExport_new(offset) {

        console.log("this is the handleExport_new");
        if (offset >= totalTracks) {
            // this is where we'll set the data 
            setData(data_new);
            return;
        }

        fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}`, {
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
                // set the data here, and call the next function.
                // note, the data is coming here in the form of - array of object.

                // data = [{}, {}, {}, {}, ...]; 
                // and we want to push this array of objects in form of only objects.
                data_new.push(...data.items);
                handleExport_new(offset + 100);
            })
            .catch(error => {
                console.error("there's an error", error);
            });
    }

    return (
        <>
            <div class="border border-black m-2 text-center" onClick={() => handleExport_new(0)}>
                Export Button
            </div>
        </>
    )
}

export default ExportButton;


/*



        for (let offset = 0; offset < totalTracks; offset++) {

            fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}`, {
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
                    allTracks = allTracks.push(...data);
                })
                .catch(error => {
                    console.error("there's an error");
                });

            offset = offset + limit;
        }



    function handleExport() {

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

    }

*/