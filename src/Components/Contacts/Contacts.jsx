import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import TelegramIcon from './images/telegram.svg';
import XIcon from './images/X.svg';
import DexscreenerIcon from './images/dexscreener.svg';
import DexToolsIcon from './images/dextools.svg';
import PumpIcon from './images/pump.svg';
import {useWindowSize} from "../../hooks/useWindowSize";
import BurntButton from "../Ui/BurntButton";
import {useConfig} from "../../Config";


const StyledContacts = styled.section`
    display: flex;
    gap: 40px;
    margin-right: 80px;

    @media (max-width: 1300px) {
        gap:15px;
        margin-right: 40px;
    }

    @media (max-width: 992px) {
        gap:40px;
        margin-right: 0;
        
    }
`;

const StyledIconImg = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledIcon = styled(Col)`
  display: flex;
  width: unset;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
    
    @media (max-width: 850px) {
    font-size: 2rem;
  }

  @media (max-width: 540px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const Contacts = ({pump = false}) => {
    const [width] = useWindowSize()
    const config = useConfig()
    return (
        <StyledContacts id="contacts">
            <Container className={'adaptation'}>
                <Row className="justify-content-center">
                    <StyledIcon id="x" as="a" href={config.links.x} target="_blank" xs={12} md={2}>
                        <StyledIconImg src={XIcon} alt="X" />
                    </StyledIcon>
                    <StyledIcon id="tg" as="a" href={config.links.telegram} target="_blank" xs={12} md={2}>
                        <StyledIconImg src={TelegramIcon} alt="Telegram" />
                    </StyledIcon>
                    <StyledIcon id="dexscreener" as="a" href={config.links.dexscreener} target="_blank" xs={12} md={2}>
                        <StyledIconImg src={DexscreenerIcon} alt="Dexscreener" />
                    </StyledIcon>
                    <StyledIcon id="dextools" as="a" href={config.links.dextools} target="_blank" xs={12} md={2}>
                        <StyledIconImg src={DexToolsIcon} alt="DexTools" />
                    </StyledIcon>
                    {pump &&
                        <StyledIcon id="pump" as="a" href={config.links.pump} target="_blank" xs={12} md={2}>
                            <StyledIconImg src={PumpIcon} alt="pump" />
                        </StyledIcon>
                    }
                    {
                        (width >= 992) && <BurntButton/>
                    }
                </Row>
                {width < 992 &&
                    <BurntButton/>
                }
            </Container>
        </StyledContacts>
    );
};

export default Contacts;