import React, { useState } from "react";
import { motion } from "framer-motion";
import { TableItem } from "../components/TableItem";
import { Table } from "../components/Table";
import { PatientDetails } from "../components/PatientDetails";

export const PatientsView = () => {
  console.info("render -> PatientsView");
  const [selectedPatient, setSelectedPatient] = useState("");

  const handleClick = (patientId) => {
    if (patientId === selectedPatient) {
      setSelectedPatient("");
    } else {
      setSelectedPatient(patientId);
    }
  };

  return (
    <div className="row">
      <h2>Patients</h2>
      <motion.div
        initial={{ opacity: 0, y: "10vw" }}
        animate={{
          opacity: 1,
          y: 0,
          width: selectedPatient !== "" ? "50%" : "100%",
        }}
        className={selectedPatient !== "" ? "col s6 table" : "col s12 table"}
      >
        <Table selectedPatient={selectedPatient}>
          <TableItem
            selectedPatient={selectedPatient}
            handleClick={handleClick}
          />
        </Table>
      </motion.div>
      {selectedPatient !== "" && (
        <motion.div
          initial={{ opacity: 0, x: "10vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "10vw" }}
          transition={{ delay: 0.1 }}
          className="col s5 table"
        >
          <PatientDetails selectedPatient={selectedPatient} />
        </motion.div>
      )}
    </div>
  );
};
