import React from 'react';
import cl from './Banner.module.css'
import bg from '../../Assets/Images/main_picture.webp'
import {useConfig} from "../../Config";

const Banner = () => {
    const config = useConfig()
    return (
        <div className={cl.banner}>
            <img src={bg} className={cl.bg} alt={'bg'}/>
            <h1 className={cl.title}>{config.tokenName}</h1>
        </div>
    );
};

export default Banner;