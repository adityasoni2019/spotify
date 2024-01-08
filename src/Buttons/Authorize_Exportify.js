import { useEffect, useContext } from "react";
import SpotifyContext from "../Context/SpotifyContext";

function Authorize_Exportify() {

    const { setAccessToken } = useContext(SpotifyContext);


    const getAccessTokenFromURL = () => {
        const hashParams = window.location.hash.substring(1).split('&');

        for (const param of hashParams) {
            // this is basically getting the access token from the query params which have been passed in the localhost:3000/ link.
            const [key, value] = param.split('=');
            if (key === 'access_token') {
                setAccessToken(value);
                return value;
            }
        }
        return null;
    };


    useEffect(() => {
        if (window.location.hash && window.location.hash.includes('access_token')) {
            const accessToken = getAccessTokenFromURL();
            setAccessToken(accessToken);
            console.log("this is the access token with the scope", accessToken);

        }
    })


    function authorize() {


        function getQueryParam(name) {
            name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(window.location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
 
        let clientId = getQueryParam("app_client_id")
        let changeUser = getQueryParam("change_user") !== ""

        // Use Exportify application clientId if none given
        if (clientId === '') {
            clientId = "9950ac751e34487dbbe027c4fd7f8e99"
        }

        window.location.href = "https://accounts.spotify.com/authorize" +
            "?client_id=" + clientId +
            "&redirect_uri=" + encodeURIComponent([window.location.protocol, '//', window.location.host, window.location.pathname].join('')) +
            "&scope=playlist-read-private%20playlist-read-collaborative%20user-library-read%20user-library-modify" +
            "&response_type=token"
    }

    return (
        <>
            <div class="border border-black m-2 text-center" onClick={authorize}>Get access token for any user (crack included + private playlist included)</div>
        </>
    )

}


export default Authorize_Exportify; 