import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = () => {
    return (
        <div className='p-2 comment d-flex'>
            <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avartar-in-specific-size-without-breaking.png' alt='avatar' className='mr-3 rounded-circle' />
            <div className='comment__body'>
                <p className='mb-1 comment__header'>
                    Sumit Day • {moment('2020-05-05').fromNow()}
                </p>
                <p className='mb-0'>Nice Video DUDE!!!</p>
            </div>
        </div>
    )
}

export default Comment
