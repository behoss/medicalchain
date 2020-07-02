import React, { useContext } from "react";
import { PatientsContext } from "../contexts/PatientsProvider";

export const PatientDetails = ({ selectedPatient }) => {
  const [patientsList] = useContext(PatientsContext);

  return (
    <div>
      {patientsList.map((patient) => {
        if (patient.id === selectedPatient) {
          return (
            <div key={patient.id}>
              <h4>{patient.name}</h4>
              <hr />
              <h5>Date of Birth:</h5>
              <p>{patient.doBString}</p>
              <h5>Phone Number:</h5>
              <p>{patient.phoneNumber}</p>
              <h5>Joined:</h5>
              <p>{patient.patientJoinedString}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
