import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase.js";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, []);

    const [ currentUser, setCurrentUser ] = useState();

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const value = {
        currentUser,
        signUp
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;