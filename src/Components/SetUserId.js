import SpotifyContext from "../Context/SpotifyContext";
import { useContext } from "react";


function SetUserIdComponent() {

    const { accessToken, userId } = useContext(SpotifyContext);
    const { setUserId } = useContext(SpotifyContext);

    function fetchUserId() {
        fetch("https://api.spotify.com/v1/me", {

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
                setUserId(data.id);
                console.log('UserId :', data.id);
            })
            .catch(error => {
                console.error('Error fetching the userId:', error);
            });
    }

    return (
        <>
            <button onClick={fetchUserId}>Set User Id</button>
        </>
    )
}

export default SetUserIdComponent;