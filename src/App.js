
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  exact Component={Home}/>
          <Route path='/About'  exact Component={About}/>
          <Route path='/contact'  exact Component={Contact}/>
        </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
