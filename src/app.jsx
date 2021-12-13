import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Body from './components/layout/body';
import Header from './components/layout/header';
import Navigation from './components/layout/navigation';
import RouteConfigure from './components/layout/routeConfigure';

function App() {
  return <>
      <BrowserRouter>
        <Header />
        <Body>
          <Navigation />
          <RouteConfigure />
        </Body>
      </BrowserRouter>
    </>
}
export default App;
