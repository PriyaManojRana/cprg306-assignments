"use client";

import React, { useState } from "react";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [justLoggedIn, setJustLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      await gitHubSignIn(); 
      setJustLoggedIn(true); 
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed. Check console.");
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      setJustLoggedIn(false); 
    } catch (err) {
      console.error(err);
    }
  };

  
  if (!user || !justLoggedIn) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Please sign in</h1>
        <button onClick={handleLogin}>Sign in with GitHub</button>
      </main>
    );
  }


  return (
    <main style={{ padding: 20 }}>
      <h1>Welcome, {user.displayName}</h1>
      <p>{user.email}</p>
      <button onClick={() => router.push("/week-10/shopping-list")}>
       Go to shopping list
      </button>

      <div>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
}
