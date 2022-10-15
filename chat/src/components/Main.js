import React from 'react'
import AdminOrNot from './AdminOrNot'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import LogOut from './Logout';
import Login from './Login'

const Main = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <LogOut />
            {
                user ? <AdminOrNot /> : <Login />
            }
        </div>
    )
}

export default Main
