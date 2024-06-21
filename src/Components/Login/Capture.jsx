import React, { useState } from 'react';

const Capture = ({ onCapture }) => {
  const [mediaStream, setMediaStream] = useState(null);

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
        .then(blob => {
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
