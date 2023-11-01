import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import axios from "axios";
import FirstLook from "../pages/FirstLook/FirstLook";



export const AuthContext = createContext()

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
      const unSubCribe =  onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            console.log(userEmail);
            setUser(currentUser)
            setLoading(false)
            console.log('Current User in auth state', currentUser);
            if(currentUser) {
                const loginEmail = {email: userEmail}
                axios.post('http://localhost:5000/jwt', loginEmail, {withCredentials: true} )
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubCribe()
        }

    },[])



    const authInfo = {
        user, 
        loading, 
        createUser, 
        signIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;