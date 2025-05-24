import { createContext,useContext,useState,useEffect } from "react";
import  {initializeApp} from 'firebase/app'

 import {getAuth ,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged,

} from "firebase/auth"

import {getFirestore}from "firebase/firestore";



const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyBmydXovcTSRXNykM6CBCoKyIbC4BLGAgk",
    authDomain: "buy-app-bc700.firebaseapp.com",
    projectId: "buy-app-bc700",
    storageBucket: "buy-app-bc700.firebasestorage.app",
    messagingSenderId: "341694836923",
    appId: "1:341694836923:web:11a78393587e63c610399e"
};



export const useFirebase = () => useContext(FirebaseContext);
 
const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const  firestore =getFirestore(firebaseApp);

const googleProvider=new GoogleAuthProvider();


 export const FirebaseProvider = (props) => {
    const [user,setUser]=useState(null)
useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
        if (user) setUser(user);
        else setUser(null);
    });
}, []);


const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

const signinUserWithEmailAndPassword = (email, password) =>
     signInWithEmailAndPassword(firebaseAuth, email, password);


const  signinWithGoogle=()=>signInWithPopup(firebaseAuth,googleProvider)

 const handleCreateNewListing =(name,isInaccessible,price,cover)=>{

 }



 const isLoggedIn=user?true: false;

    return (
        <FirebaseContext.Provider
         value={{
            signinWithGoogle,
             signupUserWithEmailAndPassword  , 
             signinUserWithEmailAndPassword,
             handleCreateNewListing,
              isLoggedIn,
             }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
export default FirebaseProvider;