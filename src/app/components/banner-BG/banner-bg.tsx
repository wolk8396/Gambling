import React from 'react';
import './banner-bg.scss';

interface BannerBGModule {
  images: (string | string[])[];
  classNameItems: string
}

const BannerBG = (props:BannerBGModule) => {
  const {images, classNameItems} = props
  
  return(
    <div className="wrapperBanner">
       <div className={classNameItems}>
        {images.map((item, i) => (
          
          <div key={i} className='item'>
            <img src={item as string} alt="" />
          </div>
        ))}
       </div>
       <div className={classNameItems}>
        {images.map((item, i) => (
          
          <div key={i} className='item'>
            <img src={item as string} alt="" />
          </div>
        ))}
       </div>
    </div>
  )
}

export default React.memo(BannerBG);