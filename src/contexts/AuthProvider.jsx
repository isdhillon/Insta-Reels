import React, { useState,useEffect } from 'react'
import auth from '../firebase';
export const AuthContext=React.createContext();
export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()
   const [loading,setLoading]=useState(true)
   
    function login(email,password){
       return auth.signInWithEmailAndPassword(email,password)
   }

   function signout(){
       return auth.signOut()
   }
   function signup(email,password){
       return auth.createUserWithEmailAndPassword(email,password)
   }
   useEffect(() => {
       const cleanUp=auth.onAuthStateChanged(user=>{
           setCurrentUser(user);
           setLoading(false)
       })
       return cleanUp
   }, [])
    
    let value={
        currentUser,
        signout,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
