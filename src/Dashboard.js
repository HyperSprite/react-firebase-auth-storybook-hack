/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./providers/UserProvider";
import { Redirect } from "react-router-dom";
import { logOut } from "./services/firebase";

const dashboardStyles = css`
  .dashboard-text {
    text-align: center;
  }
  .logout-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20em;
    height: 3em;
    border: 1px solid #995b5b;
    border-radius: 5px;
    margin-bottom: 1em;
    background-color: #ffffff;
    color: #995b5b;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
  }
  .logout-button:hover{
    transform: scale(1.05);
  }
  .logout-button img{
    width: 1.6em;
    height: 1.6em;
    margin-right: 0.5em;
  }
`;

export default function Dashboard() {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (!user) {
      setredirect("/");
    }
  }, [user]);
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div css={dashboardStyles}>
      <button className="logout-button" onClick={() => window.location.href='storybook'}>
        <span>View Storybook</span>
      </button>
      <button className="logout-button" onClick={logOut}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> logout {user ? user.displayName : null}</span>
      </button>
    </div>
  );
}
