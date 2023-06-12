import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: null,
    email: null,
  });
  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
    }
  }, [auth]);

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          Log out
        </button>
      </header>
    </div>
  );
};
