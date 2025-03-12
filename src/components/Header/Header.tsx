import React from "react";
import { useCalendly } from "../../context/CalendlyContext";
import "./Header.css";

const Header: React.FC = () => {
  const { viewMode, setViewMode } = useCalendly();

  return (
    <header className="header">
      <div className="logo">
        <h1>Calendly Clone</h1>
      </div>
      <div className="view-toggle">
        <button
          className={`toggle-btn ${viewMode === "host" ? "active" : ""}`}
          onClick={() => setViewMode("host")}
        >
          Host View
        </button>
        <button
          className={`toggle-btn ${viewMode === "guest" ? "active" : ""}`}
          onClick={() => setViewMode("guest")}
        >
          Guest View
        </button>
      </div>
    </header>
  );
};

export default Header;
