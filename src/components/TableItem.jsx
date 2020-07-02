import React, { useContext } from "react";
import { PatientsContext } from "../contexts/PatientsProvider";

export const TableItem = ({ handleClick, selectedPatient }) => {
  const [patientsList] = useContext(PatientsContext);

  return (
    <>
      {patientsList.map((patient) => {
        return (
          <tr
            key={patient.id}
            onClick={() => handleClick(patient.id)}
            style={{
              border: patient.id === selectedPatient && "1px solid DeepSkyBlue",
            }}
          >
            <td>{patient.name}</td>
            <td>{patient.doBString}</td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
};
