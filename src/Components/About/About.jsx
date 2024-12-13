import React from 'react';
import cl from './About.module.css'
import {useConfig} from "../../Config";
const About = () => {
    const config = useConfig()
    return (
        <div className={cl.about}>
            <div className={cl.block}>
                <h2 className={'title'}>
                    About
                </h2>
                <p>
                    {config.description}
                </p>
            </div>
        </div>
    );
};

export default About;