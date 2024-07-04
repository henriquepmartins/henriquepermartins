import React from "react";
import "./home.css";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/henriquepereiramartins/" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin"></i>
            </a>
            
            <a href="https://github.com/henriquepmartins" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
            </a>
        </div>
    )
}
export default Social