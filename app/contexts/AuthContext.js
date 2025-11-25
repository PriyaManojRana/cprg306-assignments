"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result.user;
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      throw error;
    }
  };

  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); 
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(AuthContext);
