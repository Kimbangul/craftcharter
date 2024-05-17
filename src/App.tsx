import 'style/style.scss';

import Header from 'components/header/Header';
import Home from 'components/home/Home';
import SideCta from 'components/side/SideCta';
import Fleet from 'components/fleet/Fleet';
import Service from 'components/service/Service';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { CtaPopContext } from 'components/side/SideCtaPop';

function App() {
  const [isOpenCtaPop, setIsOpenCtaPop] = useState(false);

  return (
    <CtaPopContext.Provider value={isOpenCtaPop}>
      <div className='Wrapper'>
        <Header />
        <Home />
        {/* <Main />
      <Introduce /> */}
        <SideCta />
        <Fleet />
        <Service />
        <About />
        <Contact />
        <Footer />
      </div>
    </CtaPopContext.Provider>
  );
}

export default App;
