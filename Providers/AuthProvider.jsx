import { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signOut, 
    signInWithPopup,
    GithubAuthProvider 
} from "firebase/auth";
import app from '../Firebase/firebase.config';



// Creating the context
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // Tracking authentication state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
