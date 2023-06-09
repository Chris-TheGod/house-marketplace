import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";

export const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : "Not logged in";
};
