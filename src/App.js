import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Service from "./components/pages/Service";
import Footer from './components/pages/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Upper from './components/pages/Upper';


function App() {
  return (
    <>
    <Upper/>
    <Router>
    <Navbar/>

    <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/service">
                <Service />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            </Switch>
        
    <Footer/>
    </Router>
    </>
  );
}
export default App;
      

