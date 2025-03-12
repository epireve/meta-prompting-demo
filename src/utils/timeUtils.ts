import { format, addMinutes, parse } from 'date-fns';
import { TimeSlot } from '../types';

// Generate time slots for a day (9 AM to 5 PM by default)
export const generateTimeSlots = (
  startHour = 9,
  endHour = 17,
  intervalMinutes = 30
): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const today = new Date();
  today.setHours(startHour, 0, 0, 0);

  const endTime = new Date(today);
  endTime.setHours(endHour, 0, 0, 0);

  let currentTime = new Date(today);

  while (currentTime < endTime) {
    const nextTime = addMinutes(currentTime, intervalMinutes);
    
    slots.push({
      id: format(currentTime, 'HH:mm'),
      startTime: format(currentTime, 'h:mm a'),
      endTime: format(nextTime, 'h:mm a'),
      isAvailable: false,
      isBooked: false,
    });

    currentTime = nextTime;
  }

  return slots;
};

// Format time for display
export const formatTime = (time: string): string => {
  return time;
};

// Parse time string to Date object
export const parseTimeString = (timeString: string): Date => {
  return parse(timeString, 'h:mm a', new Date());
};

// Check if a time slot is available and not booked
export const isSlotBookable = (slot: TimeSlot): boolean => {
  return slot.isAvailable && !slot.isBooked;
}; 