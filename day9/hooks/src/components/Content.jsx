import React, {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";



const Content= () => {
  const {isDark}= useContext(ThemeContext);


    return (
        <div
        className="content"
        style={{
          backgroundColor: isDark ? "black" : "lightgrey",
          color: isDark ? "white" : "black",
        }}
      >
        <p> Good day!2024-07-10</p>
      </div>
    );
  };
export default Content;