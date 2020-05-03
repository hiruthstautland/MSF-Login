import styled from "styled-components";

import msfColors from "../_msf-colors";

export const Heading = styled.h1`
  font-size: 2rem;
`;

export const Container = styled.div`
  font-size: 1 rem;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 1em;
  padding: 0.25em 1em;
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
