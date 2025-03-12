import React, { createContext, useContext, useState } from "react";
import { CalendlyState, TimeSlot, ViewMode } from "../types";
import { generateTimeSlots } from "../utils/timeUtils";

// Create the context with default values
const CalendlyContext = createContext<CalendlyState | undefined>(undefined);

// Provider component
export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("host");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  // Toggle availability of a time slot
  const toggleSlotAvailability = (slotId: string) => {
    setTimeSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === slotId ? { ...slot, isAvailable: !slot.isAvailable } : slot
      )
    );
  };

  // Book a time slot
  const bookSlot = (slotId: string) => {
    setTimeSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === slotId ? { ...slot, isBooked: true } : slot
      )
    );
  };

  // Context value
  const value: CalendlyState = {
    viewMode,
    timeSlots,
    selectedDate,
    setViewMode,
    setTimeSlots,
    setSelectedDate,
    toggleSlotAvailability,
    bookSlot,
  };

  return (
    <CalendlyContext.Provider value={value}>
      {children}
    </CalendlyContext.Provider>
  );
};

// Custom hook to use the context
export const useCalendly = (): CalendlyState => {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
};
