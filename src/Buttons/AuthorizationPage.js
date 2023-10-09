import { useEffect, useContext } from "react"
import { scopes, clientID, redirectURI, generateRandomString } from "../utils"
import SpotifyContext from "../Context/SpotifyContext";

function AuthorizationPage() {

    const { setAccessToken } = useContext(SpotifyContext);
    const state = generateRandomString(16);
    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&response_type=token&state=${state}`;

    const getAccessTokenFromURL = () => {
        const hashParams = window.location.hash.substring(1).split('&');

        for (const param of hashParams) {
            // this is basically getting the access token from the query params which have been passed in the localhost:3000/ link.
            const [key, value] = param.split('=');
            if (key === 'access_token') {
                return value;
            }
        }
        return null;
    };

    function handleScopeAuthorization() {
        window.location.href = authorizationUrl;
        // I've redirected the user.
        // now, once the user has already registered, they'll get redirected back to the redirecURL.
    }

    useEffect(() => {
        if (window.location.hash && window.location.hash.includes('access_token')) {
            const accessToken = getAccessTokenFromURL();
            setAccessToken(accessToken);
            console.log("this is the access token with the scope", accessToken);
        }
    })

    return (
        <>
            <div class = "border border-black m-2 text-center" onClick={handleScopeAuthorization}>Get the access token with scope</div>
            {/* now, what'll happen is, once this button has been clicked, the user will get redirected to the main page.*/}
        </>
    )
}

export default AuthorizationPage;