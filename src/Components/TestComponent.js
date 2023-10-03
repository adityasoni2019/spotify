// SomeComponent.js
import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

const SomeComponent = () => {
  const { myData, setMyData } = useContext(MyContext);

  return (
    <div>
      <p>My Data: {myData}</p>
      <button onClick={() => setMyData('New Value')}>Update Data</button>
    </div>
  );
};

export default SomeComponent;
