import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../db/firebase.js";
import axios from "axios";
let data;
let results;

async function downloadAndConvertToBlob(imagePath) {
  try {
    const storageRef = ref(storage, imagePath); // Get reference to the image file
    const downloadURL = await getDownloadURL(storageRef); // Get the download URL of the image file

    // Fetch the image file using the download URL
    const response = await fetch(downloadURL);
    const blob = await response.blob(); // Convert response to Blob

    // Create a File object with the Blob data
    const file = new File([blob], "image.jpg", { type: blob.type });

    return file;
  } catch (error) {
    console.error("Error downloading image:", error);
    throw error; // Propagate the error
  }
}
// export const firebaseStore = {
//   getSnapshot: () => {
//     return data;
//   },
//   subscribe: (callback) => {
//     const unsub = onSnapshot(collection(db, "Reham"), (snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         const docData = change.doc.data();
//         if (docData.done === false) {
//           downloadAndConvertToBlob(docData.url)
//             .then((file) => {
//               const formData = new FormData();
//               formData.append("image", file);

//               // Return the Axios POST request promise
//               return axios.post(
//                 "http://localhost:3000/api/checkimage?glove_id=" +
//                   docData.glove_id,
//                 formData,
//                 {
//                   headers: {
//                     "Content-Type": "multipart/form-data", // Set content type
//                   },
//                 }
//               );
//             })
//             .then((response) => {
//               // Handle response from Axios POST request
//               console.log(response.data); // For example
//               const docRef = doc(db, "Reham", change.doc.id);
//               return updateDoc(docRef, { done: true   , location: location,
//                 timestamp: timestamp, });
//               // Call the callback here after the Axios request completes
//             })
//             .then(() => {
//               console.log("done");
//               callback();
//             })
//             .catch((error) => {
//               // Handle error
//               console.error("Error:", error);
//             });
//         }
//       });
//     });

//     // Return cleanup function to unsubscribe from Firestore snapshot listener
//     return () => {
//       unsub(); // Unsubscribe from the Firestore snapshot listener
//     };
//   },
// };
export const firebaseStore = {
  getSnapshot: () => {
    return data;
  },
  subscribe: (callback) => {
    const unsub = onSnapshot(collection(db, "Reham"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const docData = change.doc.data();
        if (docData.done === false) {
          downloadAndConvertToBlob(docData.url)
            .then((file) => {
              const formData = new FormData();
              formData.append("image", file);
              formData.append("location", docData.location);
              formData.append("date", docData.date);
  
              // Axios POST request to send the file
              return axios.post(
                `http://localhost:3000/api/checkimage?glove_id=${docData.glove_id}`,
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
            })
            .then((response) => {
              // Handle response from Axios POST request
              console.log(response.data); // For example

              const docRef = doc(db, "Reham", change.doc.id);
              return updateDoc(docRef, { done: true });
              // Call the callback here after the Axios request completes
            })
            .then(() => {
              console.log("done");
              callback();
            })
            .catch((error) => {
              // Handle error
              console.error("Error:", error);
            });
        }
      });
    });

    // Return cleanup function to unsubscribe from Firestore snapshot listener
    return () => {
      unsub(); // Unsubscribe from the Firestore snapshot listener
    };
  },
};
export const resultStore = {
  getSnapshot: () => {
    return results;
  },

  subscribe: (callback) => {
    const unsub = onSnapshot(collection(db, "Results"), (snapshot) => {
      results = [];
      snapshot.docChanges().forEach((change) => {
        //console.log(change)
        const docData = change.doc.data();
        results.push(docData);
      });
      callback();
    });
    return () => {
      unsub();
    };
  },
};
