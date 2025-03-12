Please generate the starter files and update the project files based on the project description as following: 

**Product Requirements Document (PRD): Calendly Clone (Simplified Frontend Demo)**  
**Version:** 1.0  
**Objective:** A 5–10 minute frontend-only demo for a Calendly-like app with **zero backend**, **no authentication**, and **no persistence**.  

---

### **1. Purpose**  
Enable users to:  
- Set their availability for the day (time slots).  
- Allow others to "book" a slot (demo only; no actual persistence).  

---

### **2. Key Features**  
#### **A. Set Availability**  
- **Time Picker**: Simple UI to select available time slots (e.g., 9:00 AM – 5:00 PM, 30-minute increments).  
- **Visual Grid**: Display selected slots as green/unselected as gray (no persistence; resets on page refresh).  

#### **B. Booking Page**  
- **Date Picker**: Select a date (mock data for demo; only "today" works).  
- **Available Slots**: Show green slots set by the user.  
- **"Book Slot" Button**: Clicking a slot shows a confirmation message (no backend logic).  

---

### **3. User Stories**  
1. **As a "Host"**:  
   - I want to click time slots to mark them as available.  
   - I want to see my selected slots highlighted.  

2. **As a "Guest"**:  
   - I want to view available slots for "today".  
   - I want to click a slot and see a "Booked!" confirmation message.  

---

### **4. Non-Functional Requirements**  
- **Simplicity**: No extra UI elements (e.g., login, settings).  
- **Speed**: Instant visual feedback (no API calls).  

---

### **5. Out of Scope**  
- Backend, databases, user accounts.  
- Email reminders, payment integration, calendar sync.  

---

### **6. Milestones**  
1. **Day 1-2**: Design UI mockup (time grid + booking page).  
2. **Day 3-5**: Build time picker and slot selection logic.  
3. **Day 6-7**: Implement booking confirmation flow.  

---

### **7. Notes**  
- **Demo Flow**:  
  1. Toggle between "Host" and "Guest" views (hardcoded buttons).  
  2. Host sets slots → Guest "books" a slot → Show confirmation.  
- **Tech Stack**: React with TypeScript, using functional components and hooks.

---

## Project Rules

### Overview
This file contains custom rules for the AI assistant to follow when working with this project. These rules help ensure consistent code quality, documentation, and project management.

### General Rules
- Follow best practices for the technologies used in this project
- Prioritize readability and maintainability over clever code
- Document all code thoroughly with clear comments
- Use functional React components with proper TypeScript typing
- Implement Zod for data validation and serialization
- Maintain a clean and organized project structure

### Project Documentation
- Use project-specific markdown files for documentation:
  - `prd.md`: Product Requirements Document with system information and tech stack
  - `todo.md`: Task checklist for project planning and progress tracking
  - `changelog.md`: Record of completed features and changes

### Todo Management Rules
- Create todo.md file as checklist based on task planning from the Planner module
- Task planning takes precedence over todo.md, while todo.md contains more details
- Update markers in todo.md via text replacement tool immediately after completing each item
- Rebuild todo.md when task planning changes significantly
- Must use todo.md to record and update progress for information gathering tasks
- When all planned steps are complete, verify todo.md completion and remove skipped items

### PRD Rules
- Maintain comprehensive system information in prd.md
- Document front-end, back-end, middleware, and complete tech stack
- Include architectural diagrams and data flow when applicable
- Keep requirements organized by feature and priority
- Update PRD when requirements change or new features are added

### Changelog Rules
- Record all completed features and sub-features in changelog.md
- Use semantic versioning format (MAJOR.MINOR.PATCH)
- Include date of implementation for each change
- Provide brief descriptions of changes that are clear to new engineers
- Group related changes together under feature headings
- Highlight breaking changes and required migrations

### File Organization
- Maintain a clean and logical directory structure
- Group related files together in appropriate directories
- Use consistent naming conventions for all files and directories
- Separate concerns between different parts of the application 
```

