import classNames from 'classnames';
import { Block } from '../../shared/UI/block/block';
import Button from '../../shared/UI/button/button';
import { Blog } from '../../shared/consts/blog';
import './main.scss';

export const MainComponent = () => {


  return(
    <main className="house-gambling">
      <div className='house-gambling__banner'>
        <h1 className='title'>HOUSE OF GAMBLING</h1>
        <h3 className='overview'>Raise your ROI with direct advertiser</h3>
        <Button  className={'blue btn-overview'}  
          onButtonClick={() => {}} 
          type='button'
          text='Become a Partner'
        />
      </div>
      <div className='house-gambling__blog-container'>
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
          <input type="range" className='slider'  min="1" max="100" value="0" />
        </div>
      </div>
    </main>
  )
}