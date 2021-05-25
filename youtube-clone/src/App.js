import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Siderbar from './components/siderbar/Siderbar'
import HomeScreen from './screens/homeScreen/HomeScreen'

const App = () => {
    return (
        <>
            <Header></Header>
            <div className="app_container">
                <Siderbar></Siderbar>
                <Container fliid className="app__main">
                    <HomeScreen></HomeScreen>
                </Container>
            </div>
        </>
    )
}

export default App
