import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Header =() => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header className="header">
           <h3> AutoAr</h3>
           <nav ref={navRef}>
              <li> <Link to="/"> Inicio </Link> </li>
              <li> <Link to="/autos"> Autos </Link> </li>
             <li> <Link to="/contacto"> contacto </Link> </li>
             <li> <Link to="/footer"> ayuda </Link> </li>

              
             
              <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes></FaTimes>
                
                

              </button>


           </nav>
           <button className="nav-btn" onClick={showNavbar}>
            <FaBars> </FaBars>
             
           </button>

        </header>
    )
    
}
export default Header;