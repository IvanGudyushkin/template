import React from 'react';
import cl from "./Tokenomics.module.css";
import CA from "../Ui/CA";

const Tokenomics = () => {

    return (
        <div id={'tokenomics'} className={cl.tokenomics}>
            <div className={cl.block}>
                <h2 className={'title'}>
                    Tokenomics
                </h2>
                <CA/>
                <div className={cl.container}>
                    <div className={cl.mini}>
                        <span>
                            0% BUY
                        </span>
                        <span>
                            0% SELL
                        </span>
                    </div>
                    <span>
                        LIQUDITY
                        IS LOCKED
                        FOREVER
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;