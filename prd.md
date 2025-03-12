# Product Requirements Document (PRD): Calendly Clone (Simplified Frontend Demo)
**Version:** 1.0  
**Objective:** A 5–10 minute frontend-only demo for a Calendly-like app with **zero backend**, **no authentication**, and **no persistence**.  

## 1. Purpose
Enable users to:  
- Set their availability for the day (time slots).  
- Allow others to "book" a slot (demo only; no actual persistence).  

## 2. Key Features
### A. Set Availability
- **Time Picker**: Simple UI to select available time slots (e.g., 9:00 AM – 5:00 PM, 30-minute increments).  
- **Visual Grid**: Display selected slots as green/unselected as gray (no persistence; resets on page refresh).  

### B. Booking Page
- **Date Picker**: Select a date (mock data for demo; only "today" works).  
- **Available Slots**: Show green slots set by the user.  
- **"Book Slot" Button**: Clicking a slot shows a confirmation message (no backend logic).  

## 3. User Stories
1. **As a "Host"**:  
   - I want to click time slots to mark them as available.  
   - I want to see my selected slots highlighted.  

2. **As a "Guest"**:  
   - I want to view available slots for "today".  
   - I want to click a slot and see a "Booked!" confirmation message.  

## 4. Non-Functional Requirements
- **Simplicity**: No extra UI elements (e.g., login, settings).  
- **Speed**: Instant visual feedback (no API calls).  

## 5. Out of Scope
- Backend, databases, user accounts.  
- Email reminders, payment integration, calendar sync.  

## 6. Milestones
1. **Day 1-2**: Design UI mockup (time grid + booking page).  
2. **Day 3-5**: Build time picker and slot selection logic.  
3. **Day 6-7**: Implement booking confirmation flow.  

## 7. Notes
- **Demo Flow**:  
  1. Toggle between "Host" and "Guest" views (hardcoded buttons).  
  2. Host sets slots → Guest "books" a slot → Show confirmation.

## 8. Tech Stack
### Frontend
- **Framework**: React with TypeScript
- **State Management**: React Context API
- **Styling**: CSS Modules
- **UI Components**: Custom components with responsive design

### Architecture
- **Component Structure**:
  - App (Main container)
  - Header (Navigation and view toggle)
  - HostView (Availability setting)
  - GuestView (Booking interface)
  - TimeGrid (Reusable time slot grid)
  - BookingConfirmation (Confirmation modal)
  - DatePicker (Simple date selection)

### Data Flow
- Local state only (no persistence)
- Context API for sharing availability data between Host and Guest views 