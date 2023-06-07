import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();




    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('current user', currentUser)
            setUser(currentUser);
            // get and set jwt token

            if (currentUser) {

                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            } else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            return unSubscribe();
        }

    }, [])



    const authInfo = {
        user,
        loading,
        updateUserProfile,
        googleLogin,
        createUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;