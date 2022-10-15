import React, {useState, useEffect} from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { auth, db } from '../firebase'



const AdminOrNot = () => {
    const history = useHistory();
    const { uid, email } = auth.currentUser
    const [studentExist, setStudentExist] = useState(false)
    const [proctorExist, setProctorExist] = useState(false)


    useEffect(() => {
        
        let adminList = []
        let studentList = []
        db.collection("admins").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                adminList.push(doc.data())
                console.log(doc.data())
            })
        })
        
        db.collection("students").onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                studentList.push(doc.data())
            })
        })
        console.log(studentList)

        console.log(adminList)

        adminList.forEach((admin) => {
            console.log('hello')
        })

        // for (let index = 0; index < adminList.length; index++) {
        //     console.log("hello")
        //     let admin = adminList[index];
            
        //     console.log(admin)
        // }


        // console.log(proctorExist)
        // if (proctorExist){
        //     history.push("/proctor-chat")
        // }


        // for (let student in studentList){
        //     if (student.uid === uid){
        //         setStudentExist(true)
        //     }
        // }
        // if (studentExist){
        //     history.push("/student-chat")
        // }
    },[])

    function ProctorHandler(){
        
        if (!proctorExist){
            db.collection("admins").add({
                uid,
                email
            })
        }
        
        history.push("/proctor-chat");

    }

    const StudentHandler = () => {

        if (!studentExist){
            db.collection("students").add({
                uid,
                email
            })
        }

        history.push("/student-chat");
    }

    return (
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>

            <h3>Who are you?</h3>
            
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={ProctorHandler}>Proctor</Button>

            <Link style={{ textDecoration:"None" }} to="/student-chat">
                <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={StudentHandler}>Student</Button>
            </Link>
        </div>
    )
}

export default AdminOrNot
