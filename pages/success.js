import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, [])

  return (
    <div className='success-wrapper' >
        <div className='success' >
            <p className='icon' >
                <BsBagCheckFill/>
            </p>
            <h2>Thank you for you order!</h2>
            <p className='email-msg'>Check your email inbox for the recipt.</p>
            <p className='description' >
                If you have any question , please email us!
                <a className='email' href='mailto:kartikaysingh911@gmail.com'>
                    kartikaysingh911@gmail.com
                </a>
            </p>
            <Link href='/' >
                <button type='button' width='300px' className='btn' >
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default success