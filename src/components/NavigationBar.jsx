import logo from "../assets/logo.png";
import './NavigationBar.css';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";





function NavigationBar () { 

    return(
  <div className="container">
    <div className="descuentos">
      <p>Black Friday Promo 🔐💻 Descuentos De Hasta 30% 💰🛒🙈</p>
    </div>
    <div className="orden">
      <div className="izq">
        <div className="mundo">
                <img className="mundo" src="https://i.pinimg.com/originals/60/0a/cc/600acc714e06c25c46fa55e8d799eb25.png" alt=""/>
                <p>
                CORDOBA, ARGENTINA
                </p> 
        </div>
      </div>
      <div  className="med">
        <Link to="/" className="logo">
          <img src={logo} id="logo" alt=""/>
        </Link>
        <ul className="linked">
              <li><Link to="/category/hombre">Hombre</Link></li>
              <li><Link to="/category/mujer">Mujer</Link></li>
              <li><Link to="/category/niño">Niño</Link></li>
              <li><Link to="/category/surf">Surf</Link></li>
              <li><Link to="/category/contacto">Contacto</Link></li>
            </ul>
         
      </div>
      <div  className="der">

        <CartWidget />

     
      </div>
    </div>

   
  </div>
    )
}

window.onscroll = function() {myFunction()};

function myFunction() {

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("logo").className = "test";
  } else {
    document.getElementById("logo").className = "";
  }
}

export default NavigationBar;