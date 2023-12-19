import { useContext, useState } from "react";
import SpotifyContext from "../Context/SpotifyContext";


function MoveSongsToLiked() {

    const [data, setData] = useState([]);
    const { setLikedSongs, getLikedSongsIds, accessToken } = useContext(SpotifyContext);

    function addSongs() {

        console.log(accessToken);
        console.log('liked songs which were added');
        console.log(getLikedSongsIds);
        console.log('');

        fetch(`https://api.spotify.com/v1/me/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B,7bYZBVrnRfqeaPbhRyEvK3`, {
        // fetch(`https://api.spotify.com/v1/me/tracks?ids=3wbloelephqlPvbbI6rVhZ,7bYZBVrnRfqeaPbhRyEvK3,561jH07mF1jHuk7KlaeF0s,44n97yHySt0Z9rqPaXgjCK,3p4hRhMcb6ch8OLtATMaLw,1lusH0zFDRV1ThaFYsUgfi,0gWrMbx6pbdH3n3nsLjE55,6rLLKUy7oa7fHLKPk82SYd,3r8BUzdry4UNYZnjSQAgM7,2qJLxFoFXlK7VsUqUDJXEc,0k7ciF0SKIAixnj2HqvZWY,2FgEdm3A9Sj6WiQPB1nd67,1vHyZsydQf4h2yDhujnqvQ,4M4Q3JLsUbyTkd5WHty1WB,5wfllwdjglyQislkskYLBv,4aOOExMBUyxKnEYb39SrTg,3SEd8nPd8MpGwk6ZZ8tk2j,6K4t31amVTZDgR3sKmwUJJ,1xq57PikDPbkU2M1WK4unF,285hMzLhJwHVLe9QT9qilk,6w8pFOKn42O418qwcQElZ3,2ufmtcIFdFpuUYBPXK5f67,2dLLR6qlu5UJ5gk0dKz0h3,7y9iMe8SOB6z3NoHE2OfXl,6EsH66Uto1zwZlDGQ6RokU,4LCzEYKPFcd2FCOmZdVDnM,4cBxS9ozaFa9hTkrV5yQdX,78wMD0pLwum3Xmm76VMQel,3WQlJpaUUbGtUqAskvGA7c,0JAoQHaj0XY64ElsGshZc2,1lItf5ZXJc1by9SbPeljFd,5sdQOyqq2IDhvmx2lHOpwd,4FcknXDJ8yW2QYUl0cm6uJ,2wFILyz3whKS43ZmSLdNYJ,6me7F0aaZjwDo6RJ5MrfBD,6ilc4vQcwMPlvAHFfsTGng,0fLPwaOezajmU3endfmBfH,2ksyzVfU0WJoBpu8otr4pz,0l1i3nJ4aDMk0inxnvzYTz,0EB5bg115o2vtA3FkVKooW,7CMIy0uwXyeBv2MvaEUJM1,4jkXawep434f2T2Zt7Gzm5,4OOXIr4Wce7TuLUu65v653,5yjKSIOtsenie9jgdSS5wr,2BOY77LvMTUOfLcnfFAJGl,5PkfL56EWMQlFrIakXjrsV,3yLmDJjYoPTeyGi5eA08S2,1vBmaijoCBoqmwc3zs5n3s,58VEPMPowIVTIL3t3Vjel7,7MkhC2h8lDwyEfaKxf48cJ`, {
    
            method: 'PUT',
            headers: {
                'Authorization': `Bearer BQDhjc75NJYImWkQpVNn_Vv1Y8OzFKKFwc_i6YzvgWZlWU-x1DUeAwNoaVzjySVEMtEWCEuTydr_WGj266XadEq9tJgFbqYZt4_VboG_F6ko1X0nP25UOrKQKrgJhkMoGLCoWoGyd6AtKq5gz8d16BayuQA8oD4hfnZ9IUTNGlZYzoc2zszNZpAK_epcxSYT1wfLAFW-f5pseo4dwQkPV9j1aksl1z5YQz4PMjia`,
                'Content-Type': 'application/json'
            },

        })
            .then(response => {
                if (!response.ok) {
                    console.log("response status", response.status)
                    throw new Error('Network response was not ok');
                }
                // return response.json();
            })
            .then(data => {
                console.log('Liked Songs:');
            })
            .catch(error => {
                console.error('Error fetching liked songs:', error);
            });
    }

    return (
        <>
            <div class="border border-blue m-2 text-center" onClick={addSongs}>MoveSongsToLiked</div>
        </>
    )
}

export default MoveSongsToLiked;

//['2takcwOaAZWiXQijPHIx7B', '4VqPOruhp5EdPBeR92t6lQ', '7ouMYWpwJ422jRcDASZB7P', '1OArWxrw689jZXaJzSErbh', '3R6kyOmqWcAsqZqqe9CGL0', '2qTy3hGSbxoSenKmlKGHFw', '7D0RhFcb3CrfPuTJ0obrod', '3xINh6YqkLfucEtjoa4x7D', '7KA6U0WOHdGxWWLGPYN2Sb', '7GlCU1ImbOyED4BW6H1TSH', '6BkIqU10KlYpllNSP7VjST', '4hfEalyqBwS2ACHBkmJQhN', '1GmqbthsQEpnLiU1hnlFVn', '17SLKNcZHfggqIkVHD08e5', '4eRlWsV99y8NSGMwGoiLv9', '3W2nknW1nTuuxUSyFCUCS8', '0Gx7phIMvHVT7pXk03h0rH', '12ILYlOEfWL8ei0BEgFJn0', '3ekAN7Ijl9vIemCaDbh29K', '5dlfvkyZOuBCFP1KbzRHUx', '22NLm3IIR9NLG0cUYtmHMW', '0xiuSFBOEHWaJ6rSuUbJWc', '6LocC1KoA7Qymnna0wrLyc', '5sSYvDVyP0CP9TUiqy3fuF', '6kjf54SjPLNsxbHVpIYq56', '6pnwfWyaWjQiHCKTiZLItr', '2N9938r4qmE9yvxLRS7mIq', '3CmHvyZQQAGkKkTjTBFWN6', '0PPfw6UvMX5Ox4mm01qvUF', '11M1XTibovf5x2ntedeOwr', '1oVaXqagAZm932jKdXzMhJ', '07rZchoGQYZLT4ejEThjEY', '5Ea66YQ4u2nePfHsM5UezQ', '6EtKlIQmGPB9SX8UjDJG5s', '2PpruBYCo4H7WOBJ7Q2EwM', '6TWcSqCntZhH5vyc35kkob', '4PMdq7Q7xOFrY424ZelZEb', '7jeOETwLUP84mPQzxlD5nh', '2No5Woh38pO3NHI1GhnOqf', '4VlJbvK8wQFuIvAdMNw1Qu', '4VhqKzBeAlhTjLYZr0oJx8', '7lvDsmTRXFE3dK4OjvRiWB', '1ErmTqgRgevjLBBm5GJuiO', '021Uxj35X52xeXHjCZEFNx', '1GfBLbAhZUWdseuDqhocmn', '1jyhxbRmj3AlOdVyq1m4m0', '3wbloelephqlPvbbI6rVhZ', '7bYZBVrnRfqeaPbhRyEvK3', '561jH07mF1jHuk7KlaeF0s', '44n97yHySt0Z9rqPaXgjCK']

