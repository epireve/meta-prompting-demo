import { z } from 'zod';

// Time slot schema using Zod for validation
export const TimeSlotSchema = z.object({
  id: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  isAvailable: z.boolean(),
  isBooked: z.boolean().default(false),
});

// Type derived from the schema
export type TimeSlot = z.infer<typeof TimeSlotSchema>;

// View mode type
export type ViewMode = 'host' | 'guest';

// Context state type
export interface CalendlyState {
  viewMode: ViewMode;
  timeSlots: TimeSlot[];
  selectedDate: Date;
  setViewMode: (mode: ViewMode) => void;
  setTimeSlots: (slots: TimeSlot[]) => void;
  setSelectedDate: (date: Date) => void;
  toggleSlotAvailability: (slotId: string) => void;
  bookSlot: (slotId: string) => void;
} 