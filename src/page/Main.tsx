import Home from 'components/home/Home';
import SideCta from 'components/side/SideCta';
import Fleet from 'components/fleet/Fleet';
import Service from 'components/service/Service';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';

const Main = () => {
  return (
    <>
      <Home />
      <Fleet />
      <Service />
      <About />
      <Contact />
    </>
  );
};
export default Main;
