import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src='https://i.ytimg.com/vi/_PJvPt5At9c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAioxXVz1MBzFpqG2UpwjHmFbRHEA' alt=''></img>
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create app in 5 minutes #made by Chintu
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5m Views • 
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video__channel">
                <img src="https://yt3.ggpht.com/ytc/AAUvwnjAHJxJDn95c4FgizS9SL1i6huD2pf0k9m7KP3zhg=s68-c-k-c0x00ffffff-no-rj" alt=""></img>
                <p>Rainbow Hat Yr</p>
            </div>
        </div>
    )
}

export default Video
