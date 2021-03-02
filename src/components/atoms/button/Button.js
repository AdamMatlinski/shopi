import React from 'react';

import { StyledButton } from './Button.styles';

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
