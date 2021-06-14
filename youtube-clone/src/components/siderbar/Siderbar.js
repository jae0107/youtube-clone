import React from 'react'
import './_sidebar.scss'
import { MdSubscriptions, MdExitToApp, MdThumbUp, MdHome, MdSentimentDissatisfied } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'

const Siderbar = ({ sidebar, handleToggleSidebar }) => {
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(log_out());
    }

    return (
        <nav className={ sidebar ? 'sidebar open' : 'sidebar' } onClick={ ()=>handleToggleSidebar(false) }>
            <Link to='/'>
                <li>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
            </Link>

            <Link to='/feed/subscriptions'>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
            </Link>

            <Link to='/like'>
                <li>
                    <MdThumbUp size={23} />
                    <span>Liked Video</span>
                </li>
            </Link>

            <Link to='/dislike'>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>Disliked Video</span>
                </li>
            </Link>
            <hr/>

            <li onClick={logOutHandler}>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>

            <hr/>
        </nav>
    )
}

export default Siderbar
