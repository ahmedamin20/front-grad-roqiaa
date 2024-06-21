import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Capture = ({ onCapture }) => {
  const [mediaStream, setMediaStream] = useState(null);
  const navigate = useNavigate()
  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const takeSnapshot = () => {
    if (mediaStream) {
      const videoTrack = mediaStream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(videoTrack);
      imageCapture
        .takePhoto()
        .then(async(blob) => {
          try {
            const formData = new FormData();
            formData.append('photo', blob);
      
            const response = await axios.post('https://68fa-41-238-57-119.ngrok-free.app/compare_faces', formData).then(res=>res.data);
            if (response.similarities === "None") {
              navigate('/Register',{replace: true})
            } else {
              navigate('/login',{replace: true});
            }
          } catch (error) {
            console.error('Error sending photo:', error);
          }
          onCapture(blob);
        })
        .catch(error => {
          console.error('Error taking snapshot:', error);
        });
    }
  };

  return (
    <div class="btn-group" role="group" aria-label="Basic example">
    <button onClick={startCapture}  class="btn btn-primary">Start Camera</button>
    <button onClick={takeSnapshot}  class="btn btn-primary">Take Photo</button>
  </div>
  );
};

export default Capture;
