
import './App.css';
import './TopBar.css';
import './Footer.css';
import './Slider.css';
import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "hexagon.jpg" },
  { url: "autumn.jpg" },
  
];


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

class TopBar extends React.Component {

  state = {
    show: true
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

          <button className="TopBar-button" onClick={() => this.setState({ show: true })}></button>

        </div>
      )
    } else {
      return null
    }
  }

}


function Footer(){
  return (
    <div className="footer">

      <div className="footer-elements">
        <a href="#" className="footer-element">Contacto</a>
        <a href="#" className="footer-element">Aviso de privacidad</a>
        <a href="#" className="footer-element">Terminos y condiciones</a>
      </div>
        
    </div>
  )
}

function App() {
  return (
    
    <div className="App">
      <div> <TopBar/></div>
      <div className="">
        <SimpleImageSlider
          width= '100%'
          height= '30%'
          images={images}
          showBullets={true}
          showNavs={true} 
        />
      </div>
      
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div> <Footer/> </div>
    </div>

  );
}

export default App;
