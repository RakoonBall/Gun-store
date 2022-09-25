import React, { useState, useEffect } from 'react';
import SingleGun from '../SingleGun/SingleGun';


const ALLGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);

    const datas = async () =>{
        const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
        const data =await res.json();
        setGuns(data);
    }
    console.log(guns)
    useEffect((value)=>{
        // fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        // .then(res => res.json())
        // .then(data => setGuns(data))
        datas();
    }, []);

    return (
        <div className='mt-10'>
        <h1 className='text-4xl text-center font-bold'>WEllCOME to Jamuna Store</h1>
            <p className='text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis eligendi asperiores maiores odit corporis recusandae inventore nulla praesentium vitae.</p>
        <div className='mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                guns.map((gun) => (
                 <SingleGun gun={gun} countIncrease={countIncrease} />
                ))
            }
        </div>
        </div>
    );
};

export default ALLGun;