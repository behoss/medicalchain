import React, { useState, useEffect } from "react";
import { TableItem } from "./TableItem";
import { Table } from "./Table";
import { PatientDetails } from "./PatientDetails";

export const PatientsView = () => {
  const [patientsList, setPatientsList] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [toggleDetails, setToggleDetails] = useState("");

  const DATA_URL = "https://api.jsonbin.io/b/5efb21e87f16b71d48a8924c";

  useEffect(() => {
    (async () => {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setPatientsList(data);
    })();
  }, []);

  const handleClick = (patientId) => {
    if (patientId === selectedPatient) {
      setToggleDetails("col s6 popout");
      setTimeout(() => {
        setSelectedPatient("");
      }, 300);
    } else {
      setToggleDetails("col s6");
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
            patientsList={patientsList}
            handleClick={handleClick}
          />
        </Table>
      </div>
      <div className={toggleDetails}>
        <PatientDetails
          patientsList={patientsList}
          selectedPatient={selectedPatient}
        />
      </div>
    </div>
  );
};
