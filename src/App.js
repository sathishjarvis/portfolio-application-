import './App.css';
import Routelinks from './Components/Routelinks';
import { Home } from './Components/Home';
import { About } from './Components/About';
import {Jsproject} from './Components/Jsproject';
import { Contact } from './Components/Contact';
// import {Darkmode} from '../src/Components/Darkmode';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routelinks/>
    <Routes>
    <Route path='/home' Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/Jsproject' Component={Jsproject}/>
    <Route path='/Contact' Component={Contact}/>
    </Routes>
    {/* <Darkmode/> */}
    </BrowserRouter>
  );
}

export default App;
