import 'style/style.scss';

import Header from 'components/header/Header';
import Main from 'components/main/Main';
import SideCta from 'components/side/SideCta';

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <Main />
      <SideCta />
    </div>
  );
}

export default App;
