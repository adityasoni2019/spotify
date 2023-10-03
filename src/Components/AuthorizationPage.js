// this is the authorization page. With the scope and everything. 
// This will be required if we want the info of an actual user, and not just generic data.
import { useState, useEffect, useContext } from "react"
import { scopes, clientID, redirectURI } from "../utils"
import { generateRandomString } from "../utils";
import SpotifyContext from "../Context/SpotifyContext";

function AuthorizationPage() {

    const { accessToken, userId } = useContext(SpotifyContext);
    const state = generateRandomString(16);
    // const [accessTokenScope, setAccessTokenScope] = useState("");
    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${encodeURIComponent(scopes)}&response_type=token&state=${state}`;
    const { setAccessToken, setUserId } = useContext(SpotifyContext);

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
        // now, this is where everythign is going to happen.
        // we'll get the access
        if (window.location.hash && window.location.hash.includes('access_token')) {
            const accessToken = getAccessTokenFromURL();
            setAccessToken(accessToken);
            console.log("this is the access token with the scope", accessToken);

        }
    }, [])

    return (
        <>
            {/* something. */}
            <button onClick={handleScopeAuthorization}>Get the access token with scope</button>
            {/* now, what'll happen is, once this button has been clicked, the user will get redirected to the main page.    */}
            {/* now, what we need to do is, once the access token is set, we need to get the  */}
        </>
    )
}

export default AuthorizationPage;