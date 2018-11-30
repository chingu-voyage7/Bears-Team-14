import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: coral;
  padding: 0.25rem 1rem;
  border: solid 2px coral;
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1rem;
`;

export default () => <Button>Hello world!</Button>;
