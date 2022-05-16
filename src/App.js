
import './App.css';
import './TopBar.css';
import './Footer.css';
import './Slider.css';
import React from 'react';
import Login from "./containers/Login";
import Venues from './containers/Venues';
import Offers from './containers/Offers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


/* function TopBar(props){
  return (
  <div className= "TopBar">
    
    <nav className="TopBar-elements">
      <a href="#" className="TopBar-element">Descrubre {props.myTopBar}</a>
      <a href="#" className="TopBar-element">Quienes somos</a>
      <a href="#" className="TopBar-element">Planes {props.myTopBar}</a>
    </nav>

    <nav className="topbar-search-section">
      Buscador
    </nav>

  </div>  
  )
  
} */


/** 
class TopBar extends React.Component {

  state = {
    show: true
  }

  toogleShow(show) {
    this.setState({ show: show })
  }

  render() {
    if (this.state.show) {
      return (
        <div className="TopBar">
          <nav className="TopBar-elements">
            <a href="#" className="TopBar-element">Descrubre {this.props.myTopBar}</a>
            <a href="#" className="TopBar-element">Quienes somos</a>
            <a href="#" className="TopBar-element">Planes {this.props.myTopBar}</a>
          </nav>

          <nav className="topbar-search-section">
            Buscador
          </nav>

          <button className="TopBar-button" onClick={() => this.toogleShow(false)}></button>

        </div>
      )
    } else {
      return null
    }
  }

}

*/

function Footer(){
    <div className="footer">

      <div className="footer-elements">
        <a href="#" className="footer-element">Contacto</a>
        <a href="#" className="footer-element">Aviso de privacidad</a>
        <a href="#" className="footer-element">Terminos y condiciones</a>
      </div>
        
    </div>
}


function App() {
  return (

    <div className="App">
      
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/venues" element={<Venues /> } />
          <Route path="/offers" element={<Offers /> } />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
        
      </Router>
      
    </div>

  );
}

export default App;
