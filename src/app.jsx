import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Body from './components/layout/body';
import Header from './components/layout/header';
import Navigation from './components/layout/navigation';
import RouteConfigure from './components/layout/routeConfigure';

function App() {
  const [ showNav, setShowNav ] = useState(true);
  const handleMenuButton = () => {
    setShowNav(!showNav);
  };

  return <>
      <BrowserRouter>
        <Header onMenuButton={handleMenuButton}/>
        <Body>
          <Navigation show={showNav}/>
          <RouteConfigure />
        </Body>
      </BrowserRouter>
    </>
}
export default App;
