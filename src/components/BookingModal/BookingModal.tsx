import React from "react";
import { TimeSlot } from "../../types";
import "./BookingModal.css";

interface BookingModalProps {
  slot: TimeSlot | null;
  onClose: () => void;
  onConfirm: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  slot,
  onClose,
  onConfirm,
}) => {
  if (!slot) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Confirm Booking</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>You are about to book the following time slot:</p>
          <div className="slot-details">
            <div className="slot-time">
              <strong>Time:</strong> {slot.startTime} - {slot.endTime}
            </div>
          </div>
          <p className="note">
            Note: This is a demo application. No actual booking will be made.
          </p>
        </div>
        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
