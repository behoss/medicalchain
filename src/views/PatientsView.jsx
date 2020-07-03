import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="table-wrapper">
      <h2>Patients</h2>
      <motion.div
        initial={{ opacity: 0, width: "100%" }}
        animate={{
          opacity: 1,
          width: selectedPatient !== "" ? "50%" : "100%",
          transition: {
            duration: 0.3,
          },
        }}
        className="table"
      >
        <Table selectedPatient={selectedPatient}>
          <TableItem
            selectedPatient={selectedPatient}
            handleClick={handleClick}
          />
        </Table>
      </motion.div>
      <AnimatePresence>
        {selectedPatient !== "" && (
          <motion.div
            initial={{
              opacity: 0,
              x: "10vw",
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.2,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className="table-details"
          >
            <PatientDetails selectedPatient={selectedPatient} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
