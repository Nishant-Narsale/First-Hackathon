import React from 'react'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
const blazeface = require('@tensorflow-models/blazeface');
export const Video = () => {
    let model, video;
    const returnTensors = false;

    const [progress, setProgress] = useState(0)
    const [cam, setcam] = useState(null)
    const [inter, setinter] = useState(null)
    const [person, setperson] = useState("")

    const getPredictions = async () => {

        const predictions = await model.estimateFaces(document.querySelector("video"), returnTensors);
        // console.log(predictions)
        if (predictions.length === 0 || predictions[0].probability < 0.98) setperson("False")
        else setperson("True")

    }
    const getModels = async () => {
        model = await blazeface.load();
    }

    const getCam = async () => {
        console.log("Getting Camera")
        navigator.getUserMedia(
            {
                video: true
            }, (stream) => {
                video = document.getElementById('video')
                if (video) video.srcObject = stream
                setcam(video.srcObject)
            }, (err) => { console.log(err) }
        )
    }

    const onCam = () => {
        setProgress(progress + 30)
        getCam().then(() => {
            setProgress(progress + 30)
            getModels().then(() => {
                setProgress(1000)
                setinter(setInterval(getPredictions, 100))
            })
        })
    }

    const offCam = async () => {
        await cam.getTracks()[0].stop()
        clearInterval(inter)

    }


    return (
        <div className="App">
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={5}
                onLoaderFinished={() => setProgress(0)}
            />
            <video id='video' autoPlay height={400} width={400}></video>
            <button onClick={onCam}>ON</button>
            <button onClick={offCam}>OFF</button>
            <h3>{person}</h3>
            <br />Check data in console.log<br />
            It is just true or false if you want to see the specs uncomment line 17 in Video.js
        </div>
    )
}
