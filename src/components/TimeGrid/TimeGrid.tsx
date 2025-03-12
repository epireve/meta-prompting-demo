import React from "react";
import { TimeSlot } from "../../types";
import { isSlotBookable } from "../../utils/timeUtils";
import "./TimeGrid.css";

interface TimeGridProps {
  timeSlots: TimeSlot[];
  isHostView: boolean;
  onSlotClick: (slotId: string) => void;
}

const TimeGrid: React.FC<TimeGridProps> = ({
  timeSlots,
  isHostView,
  onSlotClick,
}) => {
  const getSlotClassName = (slot: TimeSlot): string => {
    let className = "time-slot";

    if (isHostView) {
      className += slot.isAvailable ? " available" : " unavailable";
    } else {
      if (slot.isBooked) {
        className += " booked";
      } else if (slot.isAvailable) {
        className += " available";
      } else {
        className += " unavailable";
      }
    }

    return className;
  };

  return (
    <div className="time-grid">
      <h2>{isHostView ? "Set Your Availability" : "Available Time Slots"}</h2>
      <div className="time-slots-container">
        {timeSlots.map((slot) => (
          <div
            key={slot.id}
            className={getSlotClassName(slot)}
            onClick={() => {
              // In guest view, only allow clicking available and unbooked slots
              if (!isHostView && !isSlotBookable(slot)) return;
              onSlotClick(slot.id);
            }}
          >
            <div className="time-range">
              {slot.startTime} - {slot.endTime}
            </div>
            <div className="slot-status">
              {isHostView
                ? slot.isAvailable
                  ? "Available"
                  : "Unavailable"
                : slot.isBooked
                ? "Booked"
                : slot.isAvailable
                ? "Available"
                : "Unavailable"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeGrid;
