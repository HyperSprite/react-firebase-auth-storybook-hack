/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const navbarStyles = css`
  display: flex;
  justify-content: flex-start;
  margin: 1em 2em 2em 2em;
  padding: 0 1em 1em 1em;
  border-bottom: 1px solid #995b5b;
  color: #222222;

  .nav-header {
    font-size: 1.5em;
  }
`;
export default () => {
  return (
    <div css={navbarStyles}>
    <header className="nav-header">{process.env.REACT_APP_SITE_TITLE}</header>
    </div>
    )
}
