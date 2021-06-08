import React from 'react'
import './_videoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <Row className='py-2 m-1 videoHorizontal align-items-center'>
            <Col xs={6} md ={4} className='videoHorizontal__left'>
                <LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avartar-in-specific-size-without-breaking.png' effect='blur' className='videoHorizontal__thumbnail'  wrapperClassName='videoHorizontal__thumbnail-wrapper'/>
                <span className='videoHorizontal__duration'>{_duration}</span>
            </Col>
            <Col xs={6} md ={8} className='videoHorizontal__right p-0'>
                <p className='mb-1 videoHorizontal__title'>
                    Be a full stack developer in 1 month
                </p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(1000000).format('0.a')} Views •
                    {moment('2020-06-09').fromNow()}
                </div>
                <div className='videoHorizontal__channel d-flex align-items-center my-1'>
                    <p>Backbench Coder</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
