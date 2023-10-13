import { Block } from '../../shared/UI/block/block';
import Button from '../../shared/UI/button/button';
import { Blog } from '../../shared/consts/blog';
import './main.scss';
import BannerBG from '../banner-BG/banner-bg';
import { bunner_1, bunner_2, bunner_3 } from '../../shared/consts/image';
import { useState } from 'react';

const MainComponent = () => {
  const [value, setValue] = useState("0");
  const line = bunner_1;
  const line_2 = bunner_2;


  return(
    <main className="house-gambling">
      <div className='Banner-BG'>
        <BannerBG classNameItems='items' images={line} />
        <BannerBG classNameItems='items reverse' images={line_2} />
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
        <div className='wrapper-house-gambling__blog-container'>
          <div className='wrapper-scroll'>
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
            <input type="range" className='slider' onChange={e => setValue(e.target.value)}  min="1" max="100" value={value} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainComponent