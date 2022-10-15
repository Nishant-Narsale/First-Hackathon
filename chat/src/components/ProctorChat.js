import React from 'react'
import SideBar from './SideBar'
import './ProctorChat.css'
import MainChat from './MainChat'

const ProctorChat = () => {
    return (
        <div className="container">
            <div className="main-container">
                <SideBar />
                <MainChat />
            </div>
        </div>
        
    )
}

export default ProctorChat
