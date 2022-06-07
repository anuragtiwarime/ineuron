import React from "react";
import Mentor from "../person-image.jpeg";

function mentor() {
  return (
    <div className="container">
      <h1 className="text-center">Mentors</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={Mentor} className="img-fluid" />
        </div>
        <div className="col-md-6 ">
          <div className="row text-center">
            <div className="col-6 ">
              <img
                src={Mentor}
                className="img-fluid img-thumbnail text-center"
                alt=""
              />
              <p>Mentor 1</p>
            </div>
            <div className="col-6">
              <img src={Mentor} className="img-fluid img-thumbnail" alt="" />
              <p>Mentor 2</p>
            </div>
            <div className="col-6">
              <img src={Mentor} className="img-fluid img-thumbnail" alt="" />
              <p>Mentor 3</p>
            </div>
            <div className="col-6">
              <img src={Mentor} className="img-fluid img-thumbnail" alt="" />
              <p>Mentor 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default mentor;
