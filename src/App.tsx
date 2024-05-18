import 'style/style.scss';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import SideCtaPop, { CtaPopContext } from 'components/side/SideCtaPop';
import ContactPage from 'page/ContactPage';
import Main from 'page/Main';
import SideCta from 'components/side/SideCta';

function App() {
  const [isOpenCtaPop, setIsOpenCtaPop] = useState(false);

  return (
    <CtaPopContext.Provider value={{ isOpenCtaPop, setIsOpenCtaPop }}>
      <div className='Wrapper'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
          <SideCta />
          <SideCtaPop />
        </BrowserRouter>
      </div>
    </CtaPopContext.Provider>
  );
}

export default App;
