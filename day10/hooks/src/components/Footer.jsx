import React, {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const {isDark, setIsDark}= useContext(ThemeContext);
    
    const handleClick = () => {
        setIsDark(!isDark);
    };
    
    return (
        <footer className="footer"
        style={{
            backgroundColor: isDark ? "black" : "lightgrey",
        }}>
            <h1> Good! </h1>
            <button className="button" onClick={handleClick} >다크모드 ON/OFF</button>
        </footer>
    );
};
export default Footer;