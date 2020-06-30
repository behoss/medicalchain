import React from "react";

export const About = () => {
  return (
    <div>
      <h2>About</h2>
      <div className="row">
        <div className="col s6">
          <h3>A Smart Medical Ecosystem</h3>
          <p>
            Our aim is to put the patient in control of their medical data,
            giving them the power to share the single, most comprehensive
            version of their record, with every organisation in their medical
            network.
          </p>
          <p>
            Fragmented, siloed patient records create inefficiencies and
            inaccuracies across the breadth of the healthcare system.
          </p>
          <p>
            Medicalchain uses blockchain technology to securely manage health
            records for a collaborative, smart approach to healthcare.
          </p>
        </div>
        <div className="col s6">
          <img
            src="https://medicalchain.com/wp-content/uploads/2017/09/Clinician_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
