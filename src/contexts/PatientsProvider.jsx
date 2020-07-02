import React, { createContext, useState, useEffect } from "react";

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patientsList, setPatientsList] = useState([]);

  const DATA_URL = "https://api.jsonbin.io/b/5efb21e87f16b71d48a8924c";

  useEffect(() => {
    (async () => {
      console.info("Fetching data");
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setPatientsList(data);
    })();
  }, []);

  return (
    <PatientsContext.Provider value={[patientsList, setPatientsList]}>
      {children}
    </PatientsContext.Provider>
  );
};
