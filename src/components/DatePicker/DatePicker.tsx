import React from "react";
import { format } from "date-fns";
import "./DatePicker.css";

interface DatePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
}) => {
  // For the demo, we'll only allow selecting today
  const today = new Date();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    onDateChange(date);
  };

  return (
    <div className="date-picker">
      <h3>Select Date</h3>
      <div className="date-input-container">
        <input
          type="date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={handleDateChange}
          min={format(today, "yyyy-MM-dd")}
          max={format(today, "yyyy-MM-dd")} // For demo, only allow today
        />
        <div className="date-display">
          {format(selectedDate, "EEEE, MMMM d, yyyy")}
        </div>
        <div className="date-note">
          Note: For this demo, only today's date is available.
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
