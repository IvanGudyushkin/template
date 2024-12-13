import React from 'react';
import styled from "styled-components";
import {Col} from 'react-bootstrap'
import {useConfig} from "../../Config";

const StyledButton = styled(Col)`
    background: #f90018;
    border-radius: 10px;
    height: auto;
    font-weight: 400;
    font-size: 40px;
    margin-left: 40px;
    color: #fff;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
    text-shadow:
            -2px -2px 0 #000,
            2px -2px 0 #000,
            -2px  2px 0 #000,
            2px  2px 0 #000;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1300px) {
    font-size: 32px;  
      margin-left: 20px;
  }
  @media (max-width: 992px) {
      margin-left: 0;
      text-align: center;
      font-size: 40px;
      border: 2px solid #000000
  }
`;
const BurntButton = () => {
    const config = useConfig()
    return (
        <StyledButton onClick={() =>  window.location.href = config.links.burnt}>
            LQ Burnt
        </StyledButton>
    );
};

export default BurntButton;