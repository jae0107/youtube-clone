import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return (
        <div className='py-2 videoMetaData'>
            <div className='videoMetaData__top'>
                <h5>Video Title</h5>
                <div className='py-1 d-flex justify-content-between align-items-center'>
                    <span>
                        {numeral(10000).format('0.a')} Views •{' '}
                        {moment('2020-06-6').fromNow()}
                    </span>
                
                    <div>
                        <span className='mr-3'>
                            <MdThumbUp size={26} /> 
                            {numeral(10000).format('0.a')}
                        </span>
                        <span className='mr-3'>
                            <MdThumbDown size={26} />{' '}
                            {numeral(10000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avartar-in-specific-size-without-breaking.png" className='mr-3 rounded-circle' alt='avatar' />
                    <div className='d-flex flex-column'>
                        <span>Backbench Coder</span>
                        <span>{numeral(10000).format('0.a')} Subscriber</span>
                    </div>                      
                </div>
                <button className='btn border-0 p-2 m-2'>Subscribe</button>
            </div>
            <div className='videoMetaData__description'>
                <ShowMoreText lines={3} more='SHOW MORE' less='SHOW LESS' anchorClass='showMoreText' expanded={false}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
