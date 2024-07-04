import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-bug about__icon"></i>

        <h3 className="about__title">Problem Solving</h3>
        <span className="about__subtitle">
          Analyzing and Solving Complex Programming Challenges
        </span>
      </div>

      <div className="about__box">
        <i class="bx bxs-data about__icon"></i>

        <h3 className="about__title">Database Management</h3>
        <span className="about__subtitle">
          Understanding and Implementing Database Solutions
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-block about__icon"></i>

        <h3 className="about__title">RESTful API Development</h3>
        <span className="about__subtitle">
          Creating APIs for Communication between Frontend and Backend
        </span>
      </div>
    </div>
  );
};

export default Info;
