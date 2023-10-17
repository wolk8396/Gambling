/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Block } from '../../shared/UI/block/block';
import Button from '../../shared/UI/button/button';
import { Blog } from '../../shared/consts/blog';
import './main.scss';
import BannerBG from '../banner-BG/banner-bg';
import { bunner_1, bunner_2, bunner_3 } from '../../shared/consts/image';
import { createRef, useEffect, useRef, useState } from 'react';
import React, { WheelEvent } from 'react';

const MainComponent = () => {
  let isValue = 0;
  const myRef = useRef<HTMLDivElement | null>(null);
  const InputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(0);
  let touchStartX = 0;
  let touchStartY = 0;
  let touchMoveX = 0;
  let touchMoveY = 0;

  const onChaneScroll = (value: string) => { 
    const el = myRef!.current?.style as  CSSStyleDeclaration;
    el.top = -value + '%';
    setValue(Number(value));
  }

    const handleWheelEvent = (e: WheelEvent<HTMLDivElement>) => {
      let delta = e.deltaY;
      if (delta > 0) {
        value === 0 ? isValue = 0 : isValue = value - 10;
      } else if(delta < 0) {
        value === 100 ? isValue = 100 : isValue = value + 10;
      }

      onChaneScroll(String(isValue));
    };

  
    const onTouchCancel = () => {}


    const onTouchMove = (e:any) => { 
      touchMoveX - e.changedTouches[0].clientX;
      touchMoveY - e.changedTouches[0].clientY;
    }

    const onTouchStart = (e:any) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }


    const onTouchEnd = () => {
      let distX = 0;
      let distY = 0;
      distX = touchStartX - touchMoveX;
      distY = touchStartY - touchMoveY;
      
    }

  return(
    <main className="house-gambling">
      <div className='Banner-BG'>
        <BannerBG classNameItems='items' images={bunner_1} />
        <BannerBG classNameItems='items reverse' images={bunner_2} />
        <BannerBG classNameItems='items' images={bunner_3} />
      </div>
      <div className='wrapper-house-gambling'>
        <div className='wrapper-house-gambling__banner'>
          <h1 className='title'>HOUSE OF GAMBLING</h1>
          <h3 className='overview'>Raise your ROI with direct advertiser</h3>
          <Button  className={'blue btn-overview'}  
            onButtonClick={() => {}} 
            type='button'
            text='Become a Partner'
          />
        </div>
        <div className='wrapper-house-gambling__blog-container'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchCancel}
          onWheel={handleWheelEvent}
        >
          <div className='wrapper-scroll' ref={myRef}>
            <div className='container-blog'>
              {Blog.map((item, i) => (
                  <Block 
                  key={item.id}
                  date={item}  
                  className={'container-blog__about'} 
                  classNameDes={'descriptions'} 
                  ClassNameData={'data'}
                />
              ))}
            </div>
          </div>
          <div className='slidecontainer'>
            <input type="range" className='slider' 
            onChange={e => onChaneScroll(e.target.value)} 
            ref={InputRef}
            min="1" max="100" value={value} 
          />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainComponent