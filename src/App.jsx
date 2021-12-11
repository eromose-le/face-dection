import { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ])
        .then(console.log("it's loaded"))
        .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();
  }, []);
  return (
    <div className="app">
      <img
        ref={imgRef}
        src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        width="940"
        height="650"
      />
      <canvas ref={canvasRef} width="940" height="650" />
    </div>
  );
}

export default App;
