
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Feature from './pages/feature';
import Home from './pages/home';
import Footer from './components/Footer';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Pricing from './pages/pricing';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  exact Component={Home}/>
          <Route path='/About'  exact Component={About}/>
          <Route path='/feature'  exact Component={Feature}/>
          <Route path='/price'  exact Component={Pricing}/>
          <Route path='/contact'  exact Component={Contact}/>
          <Route path='/login'  exact Component={Login}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
