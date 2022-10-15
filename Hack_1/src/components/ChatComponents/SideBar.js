import React, {useEffect, useState} from 'react'
import {db} from '../../Firebase/config'

const SideBar = ({activeStudent, setActiveStudent}) => {

    const [studentList, setStudentList] = useState([])
    var studentTempList = []

    const getData = () => {
        db.collection("Students").get().then((snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data())
                studentTempList.push(doc.data())
            })
        })).then(() => {setStudentList(studentTempList)
    })
    }

    useEffect(() => {
        getData();
    },[])

    console.log(studentList[0]);


    return (
        <div className="sidebar-">
            <div className="sidebar-header-">
                <p>Students</p>
            </div><hr />
            <div className="contacts-">

                {studentList.map(student => {
                    return(
                        <div onClick={() => {setActiveStudent(student)}} className={ activeStudent === student ? "sidebar-row- active-" : "sidebar-row-" }>
                            <p>{student.name}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SideBar
