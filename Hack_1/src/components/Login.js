import React, { useState, useEffect } from 'react'
import { login, logout } from '../Firebase/config'
import './Login.css'
import { useSelector, useDispatch } from 'react-redux'
import { _login, _logout, _student, _teacher } from '../Redux/actions/index'
import Mainpage, { MainPage } from './MainPage'
import IMG from '../Images/Exams-bro.png'
import { useHistory } from "react-router-dom";
export const Login = () => {

    const log = useSelector(state => state.Log)
    const _admin = useSelector(state => state.admin)
    const dispatch = useDispatch()

    let history = useHistory();

    useEffect(() => {
        localStorage.getItem('admin') ? dispatch(_teacher()) : dispatch(_student())
    }, [])

    const handleStudentLogin = () => {
        login().then(() => {
            dispatch(_login())
            dispatch(_student())
            localStorage.setItem('admin', _admin);
            history.push("/");
        })
    }

    const handleTeacherLogin = () => {
        login().then(() => {
            dispatch(_login())
            dispatch(_teacher())
            localStorage.setItem('admin', _admin);
            history.push("/");
        })
    }



    return (
        <div>
            {
                log == null ? <></> :
                    log ?
                        <>
                            <MainPage />
                        </>
                        :
                        <>
                            <div className="_login">
                                <div className="_center">
                                    <div className="_left">
                                        <section className="_heading">
                                            AUTO PROMPTER PROJECT
                                        </section>
                                        <section>
                                            <p style={{ fontSize: "25px" }}>
                                                ONLINE EXAM SYSTEM
                                            </p>
                                            <p style={{ fontSize: "20px", padding: "1vw 0" }}>
                                                LOGIN
                                            </p>
                                            <div className="_button-container">
                                                <button onClick={handleStudentLogin}> Student </button>
                                                <button onClick={handleTeacherLogin}> Teacher </button>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="_right">
                                        <img src={IMG} alt="" />
                                    </div>
                                </div>
                            </div>
                        </>
            }
        </div>
    )
}
