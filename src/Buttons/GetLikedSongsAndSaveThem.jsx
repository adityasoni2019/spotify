import { useContext, useState, useEffect } from "react";
import SpotifyContext from "../Context/SpotifyContext";

function GetLikedSongsAndSaveThem() {

    const [data, setData] = useState([]);
    const { setLikedSongs, getLikedSongs, accessToken } = useContext(SpotifyContext);


    useEffect(() => {

        console.log("these are the liked songs:", data);

        var tempLikedSongs = '';

        data.forEach(obj => {

            tempLikedSongs += (obj.track.id + ',');
            console.log(typeof obj.track.id)
        })

        console.log('this si the string - automatic liked songs custom')
        tempLikedSongs = tempLikedSongs.slice(0, -1);
        console.log(tempLikedSongs);
        setLikedSongs(tempLikedSongs); // this is saving the liked songs in the getLikedSongs useContext variable.     
        // console.log(getLikedSongs);

    }, [data]);

    function fetchData() {
        fetch("https://api.spotify.com/v1/me/tracks?limit=50&offset=50", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer BQAgr31e6YSlQxObNRWUTvF4hDwcvjwvpOkdbIRuqnmFrDmkE1wBqX10uh0eRzTRqRSiq2iDO9At7POZn6cGqkhmplM8FJd9lvOOVDbndq-jxD18oZ6IFE6mChOt1QNigsyyDED2PtWAcMV-hCI0lanfjET1sJB3SzbAKmhuqk__zR_IfoX9TqRu3j4iQjloOvtIDZE1vq855kLRdeA`,
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
            <div class="border border-black m-2 text-center" onClick={fetchData}>Get liked songs and save them</div>
        </>
    )

}

export default GetLikedSongsAndSaveThem;


// '1GmqbthsQEpnLiU1hnlFVn', '17SLKNcZHfggqIkVHD08e5', '4eRlWsV99y8NSGMwGoiLv9', '3W2nknW1nTuuxUSyFCUCS8', '0Gx7phIMvHVT7pXk03h0rH', '12ILYlOEfWL8ei0BEgFJn0', '3ekAN7Ijl9vIemCaDbh29K', '5dlfvkyZOuBCFP1KbzRHUx', '22NLm3IIR9NLG0cUYtmHMW', '0xiuSFBOEHWaJ6rSuUbJWc', '6LocC1KoA7Qymnna0wrLyc', '5sSYvDVyP0CP9TUiqy3fuF', '6kjf54SjPLNsxbHVpIYq56', '6pnwfWyaWjQiHCKTiZLItr', '2N9938r4qmE9yvxLRS7mIq', '3CmHvyZQQAGkKkTjTBFWN6', '0PPfw6UvMX5Ox4mm01qvUF', '11M1XTibovf5x2ntedeOwr', '1oVaXqagAZm932jKdXzMhJ', '07rZchoGQYZLT4ejEThjEY', '5Ea66YQ4u2nePfHsM5UezQ', '6EtKlIQmGPB9SX8UjDJG5s', '2PpruBYCo4H7WOBJ7Q2EwM', '6TWcSqCntZhH5vyc35kkob', '4PMdq7Q7xOFrY424ZelZEb', '7jeOETwLUP84mPQzxlD5nh', '2No5Woh38pO3NHI1GhnOqf', '4VlJbvK8wQFuIvAdMNw1Qu', '4VhqKzBeAlhTjLYZr0oJx8', '7lvDsmTRXFE3dK4OjvRiWB', '1ErmTqgRgevjLBBm5GJuiO', '021Uxj35X52xeXHjCZEFNx', '1GfBLbAhZUWdseuDqhocmn', '1jyhxbRmj3AlOdVyq1m4m0', '3wbloelephqlPvbbI6rVhZ', '7bYZBVrnRfqeaPbhRyEvK3', '561jH07mF1jHuk7KlaeF0s', '44n97yHySt0Z9rqPaXgjCK']













