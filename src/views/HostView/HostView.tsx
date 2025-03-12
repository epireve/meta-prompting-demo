import React from "react";
import { useCalendly } from "../../context/CalendlyContext";
import TimeGrid from "../../components/TimeGrid/TimeGrid";
import DatePicker from "../../components/DatePicker/DatePicker";
import "./HostView.css";

const HostView: React.FC = () => {
  const { timeSlots, selectedDate, setSelectedDate, toggleSlotAvailability } =
    useCalendly();

  return (
    <div className="host-view">
      <div className="host-header">
        <h1>Set Your Availability</h1>
        <p>Click on time slots to mark them as available for booking.</p>
      </div>

      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />

      <TimeGrid
        timeSlots={timeSlots}
        isHostView={true}
        onSlotClick={toggleSlotAvailability}
      />

      <div className="instructions">
        <h3>Instructions</h3>
        <ul>
          <li>Click on a time slot to toggle its availability</li>
          <li>Green slots are marked as available for booking</li>
          <li>Gray slots are unavailable</li>
          <li>
            Switch to Guest view to see how your availability appears to others
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HostView;
