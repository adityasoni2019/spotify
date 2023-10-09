import SpotifyContext from "../Context/SpotifyContext";
import { useContext } from "react";
// this component gets and sets the userid the logged in user. 

function SetUserIdComponent() {

    const { accessToken } = useContext(SpotifyContext);
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
            <div class = "border border-black m-2 text-center" onClick={fetchUserId}>Set User Id</div>
        </>
    )
}

export default SetUserIdComponent;