import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner}) => {

  const handleUpScroll = async() =>{
    window.scrollTo( 0 , 660);
  }

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p style={{marginTop:'18px'}} >{footerBanner.saleTime}</p>
        </div>
    
        <div className='right'>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <button type='button' id='up' onClick={handleUpScroll} >Shop Now</button>
        </div>  

        <img src={urlFor(footerBanner.image)} className='footer-banner-image' />

      </div>
    </div>
  )
}

export default FooterBanner