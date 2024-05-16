import 'style/style.scss';

import Header from 'components/header/Header';
import Home from 'components/home/Home';
import SideCta from 'components/side/SideCta';
import Fleet from 'components/fleet/Fleet';
import Service from 'components/service/Service';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import { useEffect } from 'react';

function App() {
  return (
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
  );
}

export default App;
