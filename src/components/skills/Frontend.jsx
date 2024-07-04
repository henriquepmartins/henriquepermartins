import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">ReactJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>


          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Basic</span>
            </div>

          </div>
    

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">TailwindCSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Backend;
