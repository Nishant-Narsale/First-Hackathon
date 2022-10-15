import React, {useEffect} from 'react'
import axios from 'axios'

const Analytics = () => {

    let prediction = []
    let rainfall = []

    const getData = async () => {
        await axios.get('http://127.0.0.1:8000/api/getData/Potato/')
        .then(resp => {
            resp.data.map((e) => {
                prediction.push(e[5])
                rainfall.push(e[6])
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            I am Analytics
        </div>
    )
}

export default Analytics
