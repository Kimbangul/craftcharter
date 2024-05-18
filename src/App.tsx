import 'style/style.scss';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import SideCtaPop, { CtaPopContext } from 'components/side/SideCtaPop';
import ContactPop from 'components/contact/ContactPop';
import Main from 'page/Main';

function App() {
  const [isOpenCtaPop, setIsOpenCtaPop] = useState(false);

  return (
    <CtaPopContext.Provider value={{ isOpenCtaPop, setIsOpenCtaPop }}>
      <div className='Wrapper'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/contact' element={<ContactPop />} />
          </Routes>
          <Footer />
          <SideCtaPop />
        </BrowserRouter>
      </div>
    </CtaPopContext.Provider>
  );
}

export default App;
