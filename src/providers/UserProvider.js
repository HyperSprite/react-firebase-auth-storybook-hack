import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });
const emailDomain = process.env.REACT_APP_COMPANY_EMAIL_DOMAIN;

const checkDomain = (authUser) => {
  return emailDomain === authUser.email.split('@')[1];
}

export default (props) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser && checkDomain(authUser)) {
        const { displayName, email } = authUser;
        setuser({
          displayName,
          email,
        });
      } else {
        setuser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
