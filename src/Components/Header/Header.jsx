import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Contacts from "../Contacts/Contacts";
import {useWindowSize} from "../../hooks/useWindowSize";

const StyledNavbar = styled(Navbar)`
  padding: 20px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  position: fixed;
  background: var(--background-color-70);
    backdrop-filter: blur(10px); /* Размытие всего, что попадает под этот элемент */
    -webkit-backdrop-filter: blur(10px); /* Для поддержки Safari */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transform: translateY(${({ show }) => (show ? '0' : '-100%')});
    

  @media (max-width: 850px) {
    padding: 15px;
  }

  @media (max-width: 540px) {
    padding: 10px;
  }
`;
const StyledNavLink = styled(Nav.Link)`
  color: var(--text-color);
  font-weight: 600;
  margin-left: 80px;
  transition: color 0.3s ease;
    font-size: 40px ;

    @media (max-width: 1300px) {
        margin-left: 20px;
        font-size: 32px;
    }

  @media (max-width: 850px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
const Header = () => {

    const [width] = useWindowSize()
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowHeader(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <StyledNavbar expand="lg" show={showHeader}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className={'justify-content-between'}>
                <Nav className="ml-auto">
                    <StyledNavLink href="#tokenomics">Tokenomics</StyledNavLink>
                    <StyledNavLink href="#howtobuy">How to Buy</StyledNavLink>
                    {width < 992 && <StyledNavLink href="#contacts">Contacts</StyledNavLink>}
                </Nav>
                {width >= 992 && <Contacts/>}
            </Navbar.Collapse>
        </StyledNavbar>
    );
};

export default Header;