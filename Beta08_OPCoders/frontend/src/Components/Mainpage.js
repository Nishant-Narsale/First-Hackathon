import React from 'react'
import './Mainpage.css'
import IMG from "../Images/488907.jpg"
import { Link } from 'react-router-dom'
export const Mainpage = () => {
    return (
      <div className="mainpage">
        <div className="image">
          <img
            style={{ transform: `scaleX(-1)` }}
            src={IMG}
            alt=""
          />
        </div>
        <div className="bottom"></div>
        <div className="rectangle">
          <div
            className="heading"
            style={{
              color: "white",
              fontSize: "30px",
              margin: "3vw 3vw",
              width: "2px",
              fontFamily: "Zen Old Mincho",
            }}
          >
            <h2>CROP PREDICTION</h2>
          </div>
          <div
            className="heading2"
            style={{ margin: "0vw 3vw", fontSize: "20px" }}
          >
            <h2>Find the best suitable crop for your farm</h2>
          </div>
          <div>
            <Link to = "/predict">Predict</Link>
            <Link to = "/analytics">Analytics</Link>
          </div>
          <div className="bottomcontent">
            Crop prediction based on soil and environmental characteristics
            using feature selection techniques
          </div>
        </div>
      </div>
    );
}
