// AnotherComponent.js
import React from 'react';
import MyContext from '../Context/MyContext';

const AnotherComponent = () => (
  <MyContext.Consumer>
    {({ myData, setMyData }) => (
      <div>
        <p>My Data: {myData}</p>
        <button onClick={() => setMyData('New Value')}>Update Data</button>
      </div>
    )}
  </MyContext.Consumer>
);

export default AnotherComponent;
