import React, {useState} from 'react';
import styled from 'styled-components';
import {useConfig} from "../../Config";

const StyledAddress = styled.div`
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
    font-family: 'Itim', sans-serif;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 850px) {
    font-size: 40px;
  }

  @media (max-width: 540px) {
    font-size: 24px;
  }
`;
const Ca = () => {

    const config = useConfig()

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(config.CA);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <StyledAddress onClick={handleCopy}>
            CA: - {copied && '(Copied!)'}
        </StyledAddress>
    );
};

export default Ca;