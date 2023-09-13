import { useEffect, useState } from "react";
import { accessToken } from "../utils";

function AddSongs({data}) {

  const [ids, setIds] = useState(null);
  
  useEffect(()=>{
    // something.
    
      // console.log("this is the data in the add songs, outside the handle add songs", data);
      if(data){
        const Ids = data.map(item=>item.track.id);
        // console.log('this is the string.', Ids);
        // now, here, the Ids, is an array of string. we need to convert to a string.
        setIds(Ids.join(','));
        console.log('this is the actual final id', ids);
      }
    

  });

  function handleAddSongs() {
    // console.log("this is the data from Add songs", typeof (data));
    // THIS WILL GIVE NULL.

    // aight, so here's the deal. This "data" coming from the props, in an array of objects. 
    // now, we need to convert this to get the IDs of all the songs, in the comma separated method. And, we need a string to store that.

    // const Ids = items.map(item => item.track.id);
  
    if(ids)
    {
      fetch(`https://api.spotify.com/v1/me/tracks?ids=${ids}`, {
      // fetch("https://api.spotify.com/v1/me/tracks?ids=5QdBAG8cpZhM3kIAQLDRN2,4wMR4fRKMTyUJG6VAsmccv,3AkdSFo7quCZ781KCqNK0T,0FqBNLXlTNimxmVRdDMj6b,1MONUudxAjEk76FJvzGhuD,4EWCNWgDS8707fNSZ1oaA5,5tuiGXDSTuAM47RQ0Z16MY,1LzNfuep1bnAUR9skqdHCK,0j35X8cTq543QDYLOyqB8W", {
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
  }

  return (
    <>
      <button onClick={handleAddSongs}>Add Songs to the playlist</button>
    </>
  )

}

export default AddSongs;

