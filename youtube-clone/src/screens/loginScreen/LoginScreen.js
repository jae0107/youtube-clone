import React from 'react'
import './loginScreen.scss'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth.action'

const LoginScreen = () => {
    
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login());
    }

    return (
        <div className='login'>
            <div className='login__container'>
            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
            <button onClick={handleLogin}>Login With google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
