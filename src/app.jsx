import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Home from './components/home';
import Test from './components/test';
import Title from './components/title';

function App() {
  return <>
      <BrowserRouter>
        <Header />
        <nav className="test-nav">
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </nav>
        <Title />
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/test" element={<Test/>} exact/>
        </Routes>
      </BrowserRouter>
    </>
}
export default App;
