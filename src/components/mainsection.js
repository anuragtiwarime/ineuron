import React from "react";
import SidePicOne from "../mainpic.jpg"

function mainSection(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={SidePicOne} className="rounded img-responsive img-fluid" height={500} width={500} alt="" />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h3>Building Learning Communities</h3>
                <p>With our Affordable and Competent Course Lifer Time Access </p>
            </div>
        </div>
        </div>

    )
}
export default mainSection;