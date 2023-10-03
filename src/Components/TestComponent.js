// SomeComponent.js
import React, { useContext, useId } from 'react';
import SpotifyContext from '../Context/SpotifyContext';

const SomeComponent = () => {
  
  const { accessToken, userId } = useContext(SpotifyContext);

  function handleClick(){
    console.log("this is the log from somecomponent of the accessToken: " + accessToken);
    console.log("this is the log from somecomponent of the userId: " + userId);
  }

  return (
    <div>
     <button onClick = {handleClick} >Random button</button>
    </div>
  );
};

export default SomeComponent;
