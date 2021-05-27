import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Siderbar from './components/siderbar/Siderbar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import './_app.scss'

const App = () => {
    const [sidebar, toggleSidebar] = useState(false);
   
    const handleToggleSidebar = () => toggleSidebar(value => !value);

    return (
        // <>
        //     <Header handleToggleSidebar={handleToggleSidebar}></Header>
        //     <div className="app__container border border-info">
        //         <Siderbar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}></Siderbar>
        //         <Container fliid className="app__main border border-warning">
        //             <HomeScreen></HomeScreen>
        //         </Container>
        //     </div>
        // </>
        <LoginScreen></LoginScreen>
    )
}

export default App
