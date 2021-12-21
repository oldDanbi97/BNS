import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Body from './components/layout/body';
import Header from './components/layout/header';
import RouteConfigure from './components/layout/routeConfigure';

function App() {

  return <>
      <BrowserRouter>
        <Header/>
        <Body>
          <RouteConfigure />
        </Body>
      </BrowserRouter>
    </>
}
export default App;
