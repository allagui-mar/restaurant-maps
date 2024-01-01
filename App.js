import './App.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router ,Route,Routes }from 'react-router-dom'
import Navbar from './components/home/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/menu" exact  Component={Menu}/>
        <Route path="/about" exact Component={About}/>
        <Route path="/contact" exact Component={Contact}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
