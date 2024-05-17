import 'style/style.scss';

import Header from 'components/header/Header';
import Home from 'components/home/Home';
import SideCta from 'components/side/SideCta';
import Fleet from 'components/fleet/Fleet';
import Service from 'components/service/Service';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import { useState } from 'react';
import SideCtaPop, { CtaPopContext } from 'components/side/SideCtaPop';
import ContactPop from 'components/contact/ContactPop';

function App() {
  const [isOpenCtaPop, setIsOpenCtaPop] = useState(false);

  return (
    <CtaPopContext.Provider value={{ isOpenCtaPop, setIsOpenCtaPop }}>
      <div className='Wrapper'>
        <Header />
        <Home />
        <SideCta />
        <Fleet />
        <Service />
        <About />
        <Contact />
        <ContactPop />
        <Footer />
        <SideCtaPop />
      </div>
    </CtaPopContext.Provider>
  );
}

export default App;
