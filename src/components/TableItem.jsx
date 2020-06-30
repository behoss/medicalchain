import React from "react";

export const TableItem = ({ patientsList, handleClick, selectedPatient }) => {
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
