import React from 'react'
import { useRef, useEffect } from 'react'

const App = () => {

    const videoRef = useRef(null)
    const photoRef = useRef(null)

    function playVideo() {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            let video = videoRef.current
            video.srcObject = stream
            video.play()
        })
    }

    function drawImageOnSnap() {
        let canvas = photoRef.current
        canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 640, 480)
    }

    useEffect(() => {
        playVideo()
    }, [videoRef])

    return (
        <>
            <div className="image-container">
                <video data-testid="video" className="video" ref={videoRef} width="640" height="480" autoPlay></video>
                <canvas data-testid="canvas" className="canvas" ref={photoRef} width="640" height="480"></canvas>
            </div>
            <div className="btn-list">
                <button data-testid="snap" className="snap" onClick={drawImageOnSnap}>Take Photo </button>
            </div>
        </>
    )
}

export default App;