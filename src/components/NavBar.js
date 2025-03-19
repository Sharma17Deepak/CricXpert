import {Link} from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import DarkMode from "./DarkMode/DarkMode";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <>
        <center>
            <div className="navbar">
                <div className="logo">
                    <a href="/">CricXpert </a>
                </div>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}</div>
                <div className={`navlinks ${isOpen ? "open" : ""}`}>
                <Link className="link" to="/" onClick={closeMenu}> Home</Link>
                <Link className="link" to="/series" onClick={closeMenu}> Series</Link>
                <Link className="link" to="/players" onClick={closeMenu}> Players</Link>
                <Link className="link" to="/news"  onClick={closeMenu}> Sports News</Link>
                </div>
                <DarkMode/>
            </div>
        </center>
        </>
    )
}

export default NavBar