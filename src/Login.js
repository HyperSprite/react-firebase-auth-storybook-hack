/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, useContext, useState } from 'react';
import { signInWithGoogle } from './services/firebase';
import { UserContext } from './providers/UserProvider';
import { Redirect } from 'react-router-dom';

const loginStyles = css`
	display: flex;
	flex-direction: column;

  .login-provider-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20em;
    height: 3em;
    border: 1px solid #995b5b;
    border-radius: 5px;
    margin-bottom: 1em;
    background-color: #ffffff;
    color: #222222;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
  }
  .login-provider-button:hover{
    transform: scale(1.05);
  }
  .login-provider-button img{
    width: 1.6em;
    height: 1.6em;
    margin-right: 0.5em;
  }
`;


export default function Login() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    if (user) {
      setredirect('/dashboard')
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect}/>
  }
  return (
      <div css={loginStyles}>
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Login with Google</span>
       </button>
      </div>
  );
}
