import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase.js";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        })

        return unsubscribe;
    }, []);

    const [ currentUser, setCurrentUser ] = useState();
    const [ loading, setLoading ] = useState(true);

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const signIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const signOut = () => {
        return auth.signOut();
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const value = {
        currentUser,
        signUp,
        signIn,
        signOut,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;