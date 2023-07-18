import 'style/style.scss';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import SideCta from 'components/side/SideCta';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <Main />
      <SideCta />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
