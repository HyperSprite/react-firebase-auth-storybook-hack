/** @jsx jsx */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { jsx, css } from '@emotion/react';
import Helmet from 'react-helmet';
import Navbar from "./Navbar"
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProvider from "./providers/UserProvider";

const appStyles = css`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <UserProvider>
      <Helmet>
        <title>{ process.env.REACT_APP_SITE_TITLE }</title>
      </Helmet>
      <Router>
      <Navbar/>
      <div css={appStyles}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </div>
      </Router>
    </UserProvider>
  );
}

export default App;
