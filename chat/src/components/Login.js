import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase'
import {Button} from '@mui/material'
import { useHistory } from 'react-router'

const Login = () => {

    const history = useHistory();

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        history.push("/")
    }

    return (
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:"100vh"}}>
            <Button onClick={SignInWithGoogle} style={{padding:'10px'}}>Sign In with Google</Button>
        </div>
    )
}

export default Login
