import React,{useState} from "react";
import "./styles.css";
import logo from "../Nav/logo.svg";
import useIsMobile from "../../Hooks/useIsMobile";



function Nav() {

    const[isMenuOpen,setIsMenuOpen] = useState(false);

    const isMobile = useIsMobile();

    const handleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen);
    }


  

    return <nav>
        <div className="logo"><img src={logo} alt="logo"/></div>
        {!isMobile ? <div className="links-container">
            <div className="links-cover"></div>
            <ul className="link-lists">
                <li><a href="home">Home</a></li>
                <li><a href="New">New</a></li>
                <li><a href="popular">Popular</a></li>
                <li><a href="trending">Trending</a></li>
                <li><a href="categories">Categories</a></li>
            </ul>
        </div>: isMenuOpen && <div className="links-container">
            <div className="links-cover"></div>
            <ul className="link-lists">
                <li><a href="home">Home</a></li>
                <li><a href="New">New</a></li>
                <li><a href="popular">Popular</a></li>
                <li><a href="trending">Trending</a></li>
                <li><a href="categories">Categories</a></li>
            </ul>
        </div> }
        <div className="harmburger-menu" onClick={handleMenu}><img src={!isMenuOpen ? "assets/images/icon-menu.svg" : "assets/images/icon-menu-close.svg"} alt="harmburgerMenu"/></div>
    </nav>
}

export default Nav;