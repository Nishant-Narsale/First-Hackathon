import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { logout } from '../Firebase/config'
import { _Data, _logout, _student } from '../Redux/actions'
import Avatar from '@mui/material/Avatar';
import './Mainpage.css'
export const MainPage = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        logout().then(() => {
            dispatch(_logout())
            dispatch(_student())
            dispatch(_Data([]))
            localStorage.removeItem('admin');
        })
    }

    const info = useSelector(state => state.info)
    return (
        <>
            Hello {info.displayName}<button className = "logout-button" onClick={handleLogout}> logout </button>
            <Avatar className="avatar" src={info.photoURL} alt={info.displayName}/>
        </>
    )
}
