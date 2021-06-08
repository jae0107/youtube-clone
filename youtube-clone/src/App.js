import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import Header from './components/header/Header'
import Siderbar from './components/siderbar/Siderbar'
import WatchScreen from './screens/ watchScreen/WatchScreen'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
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

                <Route path='/search'>
                    <Layout>
                        <h1>Search Results</h1>
                    </Layout>
                </Route>

                <Route path='/watch/:id'>
                    <Layout>
                        <WatchScreen />
                    </Layout>
                </Route>

                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
        
    )
}

export default App
