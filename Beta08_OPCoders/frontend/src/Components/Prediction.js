import React, {useEffect} from 'react'
import './Prediction.css'
import axios from 'axios'

    
export const Prediction = () => {

    

    const State = new Set()
    let prediction = []
    let rainfall = []

    // const getData = async () => {
    //     await axios.get('http://127.0.0.1:8000/api/getData/Potato/')
    //     .then(resp => {
    //         // console.log(resp);
    //         resp.data.map((e) => {
    //             prediction.push(e[5])
    //             rainfall.push(e[6])
    //             State.add({"state": e[0], "dist": e[1]})
    //         })
    //     })
    // }

    useEffect(() => {
        // getData().then(() => {
            // console.log(prediction)
            // console.log(predict(tf.tensor(prediction[1], rainfall[1]).dataSync()))
        // })
        }
    , [])







    return (
        <div>
            Hi I am Predict
        </div>
    )
}
