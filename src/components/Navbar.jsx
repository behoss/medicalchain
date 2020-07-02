import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { PatientsContext } from "../contexts/PatientsProvider";

export const Navbar = () => {
  const [patientsList] = useContext(PatientsContext);

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <span className="brand-logo">
          <Link to="/">Medicalchain</Link>
        </span>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/patients"
              activeClassName="nav-active"
            >{`Patients (${patientsList.length})`}</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="nav-active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
