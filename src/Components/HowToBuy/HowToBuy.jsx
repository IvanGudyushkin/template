import React from 'react';
import cl from './HowToBuy.module.css'
import {useConfig} from "../../Config";
const HowToBuy = () => {
    const config = useConfig()
    return (
        <div id={'howtobuy'} className={cl.block}>
            <h2 className={'title'}>How to buy</h2>
            <div className={cl.item}>
                <h4 className={cl.point}>DOWNLOAD PHANTOM WALLET</h4>
                <p className={cl.p}>Go to the <a href={'https://phantom.app/'}  rel="noopener noreferrer" target="_blank" >Phantom website</a>  and install the wallet extension or app. Follow the steps to set up your wallet and save your recovery phrase.
                </p>
            </div>
            <div className={cl.item}>
                <h4 className={cl.point}>Get SOL and send it to your wallet</h4>
                <p className={cl.p}>Buy SOL on an exchange like Binance or Coinbase. Send the SOL to your Phantom Wallet using your wallet address.</p>
            </div>
            <div className={cl.item}>
                <h4 className={cl.point}>Connect your wallet to Raydium</h4>
                <p className={cl.p}>Visit <a href={'https://raydium.io/'}  rel="noopener noreferrer" target="_blank">Raydium</a> click "Connect Wallet," and choose Phantom. Confirm the connection in your wallet.</p>
            </div>
            <div className={cl.item}>
                <h4 className={cl.point}>Swap your SOL to $Nǐhǎoma and hold</h4>
                <p className={cl.p}>Go to the "Swap" tab on Raydium. Choose SOL to {config.tokenName}, enter the amount, and confirm the swap. Hold the {config.tokenName} in your wallet.</p>
            </div>
        </div>
    );
};

export default HowToBuy;