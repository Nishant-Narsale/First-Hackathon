import React, {useState} from 'react'
import SideBar from './SideBar'
import './ProctorChat.css'
import MainChat from './MainChat'

const ProctorChat = () => {
    const [activeStudent, setActiveStudent] = useState({})
    return (
        <div className="container-">
            <div className="main-container-">
                <SideBar activeStudent={activeStudent} setActiveStudent={setActiveStudent} />
                <MainChat activeStudent={activeStudent} />
            </div>
        </div>
        
    )
}

export default ProctorChat
