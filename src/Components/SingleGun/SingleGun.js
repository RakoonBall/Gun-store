import React from 'react';
import Modal from '../Modal/Modal';
import {useState} from 'react';
import './SingleGun.css'

const SingleGun = ({gun,countIncrease}) => {
    const [modalData, setModalData]=useState({});
    const {action, bullet, img, name, price}= gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl my-4">
                <figure><img className='h-60 p-2' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p><span className='price-card'> Price: </span>${price}</p>
                    <div className="card-actions justify-start mt-2">
                    <div className="badge badge-outline">{action}</div> 
                    <div className="badge badge-outline">{bullet}</div>
                    {/* <div className="badge badge-outline">{category}</div> */}
                    <div className='flex justify-between w-full mt-2'>
                    <button onClick={()=>countIncrease()} className="btn btn-outline btn-secondary">Add to cart</button>
                    <label  onClick={()=> setModalData(gun)}
                     htmlFor="my-modal-3" className="btn btn-outline modal-button">details
                    </label>
                    </div>
                    </div>
                </div>
            </div>
            {modalData && <Modal data={modalData}></Modal>}
        </div>
    );
};

export default SingleGun;