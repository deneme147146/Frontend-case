// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , updateProfile} from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE2LHrm0IpQ_Sgza3-HoUP2sIOJU4uvbI",
  authDomain: "frontend-case.firebaseapp.com",
  projectId: "frontend-case",
  storageBucket: "frontend-case.appspot.com",
  messagingSenderId: "985927068704",
  appId: "1:985927068704:web:ab89645372d504e8e7e045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register =  async (email, password, name) =>{

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password )

    updateProfile(auth.currentUser , {displayName: name})
    toast.success("kayıt başarılı")
    return user
    
  } catch (error) {
    toast.error(error.message)
  }
}

export const login = async (email, password) => {

  try {

    const user = await signInWithEmailAndPassword(auth, email, password)
    toast.success("giriş başarılı")
    return user
    
  } catch (error) {
    toast.error(error.message)
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    toast.success("çıkış başarılı")
    return true
  } catch (error) {
    toast.error(error.message)
  }
}



export default app;