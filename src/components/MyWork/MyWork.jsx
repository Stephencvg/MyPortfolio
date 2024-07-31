import React from "react";
import "./MyWork.css";
import work_data from "../../assets/mywork_data";
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="work-title">
        <h1>My Latest Project</h1>
      </div>
      <div className="mywork--container">
        {work_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" height={200} />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
