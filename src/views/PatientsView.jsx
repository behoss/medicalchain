import React, { useState } from "react";
import { TableItem } from "../components/TableItem";
import { Table } from "../components/Table";
import { PatientDetails } from "../components/PatientDetails";

export const PatientsView = () => {
  console.info("render -> PatientsView");
  const [selectedPatient, setSelectedPatient] = useState("");
  const [toggleDetails, setToggleDetails] = useState("");

  const handleClick = (patientId) => {
    if (patientId === selectedPatient) {
      setToggleDetails("col s6 popout");
      setTimeout(() => {
        setSelectedPatient("");
      }, 300);
    } else {
      setToggleDetails("col s6 popin");
      setSelectedPatient(patientId);
    }
  };

  return (
    <div className="row">
      <h2>Patients</h2>
      <div className={selectedPatient === "" ? "col s12" : "col s6"}>
        <Table selectedPatient={selectedPatient}>
          <TableItem
            selectedPatient={selectedPatient}
            handleClick={handleClick}
          />
        </Table>
      </div>
      <div className={toggleDetails}>
        <PatientDetails selectedPatient={selectedPatient} />
      </div>
    </div>
  );
};
