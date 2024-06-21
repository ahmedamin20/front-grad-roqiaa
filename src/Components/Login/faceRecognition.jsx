import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import Capture from './Capture';

// const FaceRecognition = () => {
//   const [similarities, setSimilarities] = useState(null);

//   const sendPhoto = async (photo) => {
//     try {
//       const formData = new FormData();
//       formData.append('photo', photo);

//       const response = await fetch('http://localhost:8000/compare_faces?photo', {
//         method: 'POST',
//         body: formData
//       });

//       const data = await response.json();
//       setSimilarities(data.similarities);
//     } catch (error) {
//       console.error('Error sending photo:', error);
//     }
//   };

const FaceRecognition = () => {
  const [similarities, setSimilarities] = useState(null);
  let navigate = useNavigate();

  const sendPhoto = async (photo) => {
    try {
      const formData = new FormData();
      formData.append('photo', photo);

      const response = await fetch('https://315f-41-238-57-119.ngrok-free.app/compare_faces', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setSimilarities(data.similarities);

      if (data.similarities === "None") {
        navigate('/signup')
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error sending photo:', error);
    }
  };

  return (
    <div>
      <h1>Face Recognition App</h1>
      <Capture onCapture={sendPhoto} />
      {similarities && <p>Similarities: {similarities}</p>}
    </div>
  );
};

export default FaceRecognition;
