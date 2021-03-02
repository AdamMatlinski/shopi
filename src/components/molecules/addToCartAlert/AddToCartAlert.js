import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

import { StyledAlertContainer, StyledAlert } from './AddToCartAlert.styles';

const AddToCartAlert = ({ open }) => {
  return (
    <StyledAlertContainer>
      <Collapse in={open}>
        <StyledAlert>
          <Alert>The book has been added to your cart!</Alert>
        </StyledAlert>
      </Collapse>
    </StyledAlertContainer>
  );
};

export default AddToCartAlert;
