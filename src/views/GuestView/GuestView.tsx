import React, { useState } from "react";
import { useCalendly } from "../../context/CalendlyContext";
import TimeGrid from "../../components/TimeGrid/TimeGrid";
import DatePicker from "../../components/DatePicker/DatePicker";
import BookingModal from "../../components/BookingModal/BookingModal";
import { TimeSlot } from "../../types";
import "./GuestView.css";

const GuestView: React.FC = () => {
  const { timeSlots, selectedDate, setSelectedDate, bookSlot } = useCalendly();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [showBookingSuccess, setShowBookingSuccess] = useState<boolean>(false);

  // Handle slot click to open booking modal
  const handleSlotClick = (slotId: string) => {
    const slot = timeSlots.find((s) => s.id === slotId);
    if (slot) {
      setSelectedSlot(slot);
    }
  };

  // Close the booking modal
  const handleCloseModal = () => {
    setSelectedSlot(null);
  };

  // Confirm booking
  const handleConfirmBooking = () => {
    if (selectedSlot) {
      bookSlot(selectedSlot.id);
      setSelectedSlot(null);
      setShowBookingSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowBookingSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="guest-view">
      <div className="guest-header">
        <h1>Book a Time Slot</h1>
        <p>Select an available time slot to schedule a meeting.</p>
      </div>

      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />

      {showBookingSuccess && (
        <div className="booking-success">
          <p>✅ Booking confirmed! You've successfully booked a time slot.</p>
        </div>
      )}

      <TimeGrid
        timeSlots={timeSlots}
        isHostView={false}
        onSlotClick={handleSlotClick}
      />

      <div className="instructions">
        <h3>Instructions</h3>
        <ul>
          <li>Green slots are available for booking</li>
          <li>Blue slots are already booked</li>
          <li>Gray slots are unavailable</li>
          <li>Click on an available slot to book it</li>
        </ul>
      </div>

      {selectedSlot && (
        <BookingModal
          slot={selectedSlot}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default GuestView;
