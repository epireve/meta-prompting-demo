# Documentation Rules for Calendly Clone

## Project Documentation Files

### README.md
- Keep the README up-to-date with setup and usage instructions
- Include the following sections:
  - Project overview
  - Features
  - Project structure
  - Getting started (prerequisites, installation)
  - Usage instructions
  - Documentation references
  - Available scripts

### PRD.md (Product Requirements Document)
- Maintain comprehensive system information
- Document front-end architecture and tech stack
- Keep requirements organized by feature and priority
- Update when requirements change or new features are added

### Todo.md
- Use as a checklist for project planning and progress tracking
- Update markers immediately after completing each item
- Rebuild when task planning changes significantly
- Remove skipped items when all planned steps are complete

### Changelog.md
- Record all completed features and sub-features
- Use semantic versioning format (MAJOR.MINOR.PATCH)
- Include date of implementation for each change
- Provide brief descriptions that are clear to new engineers
- Group related changes together under feature headings
- Highlight breaking changes if applicable

## Code Documentation

### Component Documentation
- Add a brief description at the top of each component file
- Document props with descriptions of their purpose
- Explain complex logic or non-obvious code with comments
- Document any side effects or important behaviors

Example:
```tsx
/**
 * TimeGrid Component
 * 
 * Displays a grid of time slots that can be toggled between available and unavailable.
 * In host mode, slots can be clicked to toggle availability.
 * In guest mode, only available slots can be clicked for booking.
 */
interface TimeGridProps {
  /** Array of time slot objects to display */
  timeSlots: TimeSlot[];
  /** Whether the component is in host view mode */
  isHostView: boolean;
  /** Callback function when a slot is clicked */
  onSlotClick: (slotId: string) => void;
}
```

### Function Documentation
- Document functions with JSDoc comments
- Include parameter descriptions and return values
- Note any side effects or important behaviors
- Provide examples for complex functions

Example:
```typescript
/**
 * Generates time slots for a day with the specified parameters
 * 
 * @param startHour - Starting hour (0-23)
 * @param endHour - Ending hour (0-23)
 * @param intervalMinutes - Interval between slots in minutes
 * @returns Array of TimeSlot objects
 * 
 * @example
 * // Generate 30-minute slots from 9 AM to 5 PM
 * const slots = generateTimeSlots(9, 17, 30);
 */
export const generateTimeSlots = (
  startHour = 9,
  endHour = 17,
  intervalMinutes = 30
): TimeSlot[] => {
  // Implementation
};
```

### Type Documentation
- Document complex types and interfaces
- Explain the purpose of each property
- Provide examples for non-obvious types

Example:
```typescript
/**
 * Represents a time slot in the calendar
 */
export interface TimeSlot {
  /** Unique identifier for the slot (format: HH:mm) */
  id: string;
  /** Formatted start time (e.g., "9:00 AM") */
  startTime: string;
  /** Formatted end time (e.g., "9:30 AM") */
  endTime: string;
  /** Whether the slot is marked as available by the host */
  isAvailable: boolean;
  /** Whether the slot has been booked by a guest */
  isBooked: boolean;
}
```

## Commit Messages

- Use clear and descriptive commit messages
- Follow conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance tasks
- Include the scope of the change when relevant
- Reference issue numbers when applicable

Examples:
- `feat(booking): add confirmation modal for slot booking`
- `fix(timegrid): correct time slot display on mobile devices`
- `docs: update README with setup instructions`

## Pull Request Documentation

- Provide a clear title that summarizes the changes
- Include a detailed description of the changes
- Reference related issues
- List any breaking changes
- Include screenshots or GIFs for UI changes
- Mention any dependencies that were added or removed 