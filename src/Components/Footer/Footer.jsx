import React from 'react';
import cl from './Footer.module.css'
import cat from '../../Assets/Images/cat.png'
import {useConfig} from "../../Config";
const Footer = () => {
    const config = useConfig()
    return (
        <footer className={cl.footer}>
            <img src={cat} className={cl.cat} alt={'cat'}/>
            <div>
                <span>© 2024 {config.siteName}. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;