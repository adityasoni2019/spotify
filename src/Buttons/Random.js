import React from 'react';
import { useEffect, useState } from 'react';

function Random() {

    const [data, setData] = useState();

    useEffect(() => {
        console.log("this is the val coming from useEffect" + data);
    }, [data]);

    function handleClick(val){
        console.log('handle click funciton called');
        if(val>10)
        {
            setData(val);
            return;
        }
        handleClick(val+1);
    }

    return (
        <div >
            <div onClick={() => handleClick(0)}> click </div>
        </div>
    );
}

export default Random;

/*

    // function handleClick() {
    //     let val =10; 
    //     while(val<10)
    //     {
    //         setData(val);
    //         return; 
    //     }
    // }

*/