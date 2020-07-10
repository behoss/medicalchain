import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TableItem } from "../components/TableItem";
import { Table } from "../components/Table";
import { PatientDetails } from "../components/PatientDetails";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

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
    <motion.div
      className="table-wrapper"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Patients</h2>

      {/* TABLE */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{
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

      {/* DETAILS PANE */}
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
    </motion.div>
  );
};
