import React from "react";
import { CalendlyProvider, useCalendly } from "./context/CalendlyContext";
import Header from "./components/Header/Header";
import HostView from "./views/HostView/HostView";
import GuestView from "./views/GuestView/GuestView";
import "./App.css";

// Main content component that uses the context
const CalendlyContent: React.FC = () => {
  const { viewMode } = useCalendly();

  return (
    <div className="calendly-content">
      <Header />
      <main>{viewMode === "host" ? <HostView /> : <GuestView />}</main>
    </div>
  );
};

// App component that wraps everything with the context provider
function App() {
  return (
    <div className="App">
      <CalendlyProvider>
        <CalendlyContent />
      </CalendlyProvider>
    </div>
  );
}

export default App;
