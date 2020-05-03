import styled from "styled-components";

import msfColors from "../_msf-colors";

export const Heading = styled.h1`
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  text-align: center;
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.25em 0.5em;
  border: 1px solid ${(props) => props.theme.button.color};
  border-radius: 2px;
  background: ${(props) => props.theme.button.background};
  color: ${(props) => props.theme.button.color};

  :hover {
    -webkit-box-shadow: 0px 0px 1px 1px ${(props) => props.theme.button.color};
    -moz-box-shadow: 0px 0px 1px 1px ${(props) => props.theme.button.color};
    box-shadow: 0px 0px 1px 1px ${(props) => props.theme.button.color};
    cursor: pointer;
  }
`;

Button.defaultProps = {
  theme: {
    button: {
      background: "white",
      color: "black",
    },
  },
};

// export const Link = styled.a`
//   textdecoration: "none";
// `;
