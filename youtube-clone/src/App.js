import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import Header from './components/header/Header'
import Siderbar from './components/siderbar/Siderbar'
import WatchScreen from './screens/ watchScreen/WatchScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LikeScreen from './screens/likeScreen/LikeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import SearchScreen from './screens/SearchScreen'
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen'
import './_app.scss'

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);
   
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}></Header>
            <div className="app__container">
                <Siderbar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}></Siderbar>
                <Container fliid className="app__main">
                    { children }
                </Container>
            </div>
        </>
    )
}

const App = () => {
    const { accessToken, loading } = useSelector(state => state.auth);
    const history = useHistory();
    useEffect(() => {
        if(!loading && !accessToken){
            history.push('/auth');
        }
    }, [accessToken, loading, history]);

    return (
        
            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <HomeScreen></HomeScreen>
                    </Layout>
                </Route>
                <Route path='/auth'>
                    <LoginScreen></LoginScreen>
                </Route>

                <Route path='/search/:query'>
                    <Layout>
                        <SearchScreen />
                    </Layout>
                </Route>

                <Route path='/watch/:id'>
                    <Layout>
                        <WatchScreen />
                    </Layout>
                </Route>

                <Route path='/feed/subscriptions'>
                    <Layout>
                        <SubscriptionsScreen />
                    </Layout>
                </Route>

                <Route path='/channel/:channelId'>
                    <Layout>
                        <ChannelScreen />
                    </Layout>
                </Route>

                <Route path='/like'>
                    <Layout>
                        <LikeScreen />
                    </Layout>
                </Route>

                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
        
    )
}

export default App
