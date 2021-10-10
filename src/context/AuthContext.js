import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config';

const AuthContext = createContext({
  currentUser: null,
  registerSignup: () => Promise,
  login: () => Promise,
  logout: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unscribe();
    };
  }, []);

  function registerSignup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, passowrd) {
    return signInWithEmailAndPassword(auth, email, passowrd);
  }

  function logout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    registerSignup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
