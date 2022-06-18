// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEOJsQqbc44tSizZ7f8bVvZh6bvdTcNWM",
  authDomain: "auth-1e53c.firebaseapp.com",
  projectId: "auth-1e53c",
  storageBucket: "auth-1e53c.appspot.com",
  messagingSenderId: "1010279468828",
  appId: "1:1010279468828:web:de2e94421a8d561cb9f4d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.auth();

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(app);



export const signInWithGoogle = async () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const name = result.user.displayName;
      const user = result.user.uid;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      try {
        const docRef = await addDoc(collection(firestore, "users"), {
          displayName: name,
          email: email
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      
    })
    .catch((error) => {
      console.log(error);
    });
};



