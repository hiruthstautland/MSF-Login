import styled from "styled-components";

import msfColors from "./_msf-colors";

export const Heading = styled.h1`
  margin: 1rem 0.5rem 2rem 0;
  font-size: 22px;
  text-transform: uppercase;
`;

export const TextLabel = styled.div`
  display: block;
  text-align: left;
  opacity: 0.8;
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

export const FormInputArea = styled.div`
  margin: 1rem 0 0 0;
  padding: 1rem;
`;

// export const Link = styled.a`
//   textdecoration: "none";
// `;
