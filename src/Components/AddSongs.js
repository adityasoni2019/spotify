import { accessToken } from "../utils";

function AddSongs() {

  function handleAddSongs() {

    fetch("https://api.spotify.com/v1/me/tracks?ids=5QdBAG8cpZhM3kIAQLDRN2,4wMR4fRKMTyUJG6VAsmccv,3AkdSFo7quCZ781KCqNK0T,0FqBNLXlTNimxmVRdDMj6b,1MONUudxAjEk76FJvzGhuD,4EWCNWgDS8707fNSZ1oaA5,5tuiGXDSTuAM47RQ0Z16MY,1LzNfuep1bnAUR9skqdHCK,0j35X8cTq543QDYLOyqB8W", {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          console.log("response status ", response.status);
          throw new Error('Network response was not ok');
        }
        return;
      }).then(data => {
        console.log("Song added. Here's the repsonse: ", data);
      }).catch(error => {
        console.error('Error fetching liked songs: ', error);
      });
  }

  return (
    <>
      <button onClick={handleAddSongs}>Add Songs to the playlist</button>
    </>
  )
  
}

export default AddSongs;

