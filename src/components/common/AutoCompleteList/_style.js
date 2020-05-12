import styled from "styled-components";

export const SuggestionsLiEl = styled.li`
  padding: 0.2rem 0;
  background: ${(props) => (props.active ? `white` : `transparent`)};
`;

export const HighlightLetters = styled.span`
  font-weight: ${(props) => (props.highlight ? `bold` : `normal`)};
`;
