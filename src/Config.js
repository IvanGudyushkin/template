import React, { createContext, useContext } from 'react';
const ConfigContext = createContext();

const config = {
    tokenName: "$token",
    description: "This is a description of MyToken.",
    siteName: "MySite",
    CA: '0x1234567890123456789012345678901234567890',
    links: {
        telegram:'#',
        x:'#',
        burnt:'#',
        pump:'#',
        dextools:'#',
        dexscreener:'#',
    }
};

export const ConfigProvider = ({ children }) => (
    <ConfigContext.Provider value={config}>
        {children}
    </ConfigContext.Provider>
);

export const useConfig = () => useContext(ConfigContext);
