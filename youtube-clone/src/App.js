import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Siderbar from './components/siderbar/Siderbar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'

const App = () => {

    

    return (
        <>
            <Header></Header>
            <div className="app__container border border-info">
                <Siderbar></Siderbar>
                <Container fliid className="app__main border border-warning">
                    <HomeScreen></HomeScreen>
                </Container>
            </div>
        </>
    )
}

export default App
