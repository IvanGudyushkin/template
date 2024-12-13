import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import HowToBuy from "./Components/HowToBuy/HowToBuy";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Footer from "./Components/Footer/Footer";
import {useWindowSize} from "./hooks/useWindowSize";
import React from "react";
import Contacts from "./Components/Contacts/Contacts";
import {ConfigProvider} from "./Config";

function App() {
    const [width] = useWindowSize()
  return (
    <div className="App">
      <ConfigProvider>
          <Header/>
          <Banner/>
          <About/>
          <HowToBuy/>
          <Tokenomics/>
          {width < 992 && <Contacts pump={false}/>}
          <Footer/>
      </ConfigProvider>
    </div>
  );
}

export default App;
