# Component Rules for Calendly Clone

## Component Structure
Each component should follow this structure:

```tsx
import React from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  // Define props here with proper types
}

const ComponentName: React.FC<ComponentNameProps> = ({ /* destructured props */ }) => {
  // State hooks
  
  // Effect hooks
  
  // Event handlers
  
  // Helper functions
  
  // Render
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

## Component Naming Conventions
- Use PascalCase for component names (e.g., `TimeGrid`, `BookingModal`)
- Use camelCase for file names (e.g., `timeGrid.tsx`, `bookingModal.tsx`)
- CSS class names should use kebab-case (e.g., `time-grid`, `booking-modal`)
- Prefix state variables with appropriate terms:
  - `is` or `has` for booleans (e.g., `isLoading`, `hasError`)
  - `set` for state setters (e.g., `setSelectedDate`)
  - `handle` for event handlers (e.g., `handleClick`, `handleSubmit`)

## Props Guidelines
- Define a clear interface for component props
- Use descriptive prop names
- Provide default values when appropriate
- Document complex props with comments
- Keep required props to a minimum
- Use callback props for events (e.g., `onClick`, `onSubmit`)

## State Management
- Keep state as local as possible
- Lift state up only when necessary
- Use context for global state
- Split complex state into smaller pieces
- Use reducers for complex state logic

## Component Composition
- Prefer composition over props drilling
- Create small, reusable components
- Use children prop for flexible composition
- Extract repeated patterns into separate components
- Use render props or custom hooks for sharing logic

## CSS Guidelines
- Use component-scoped CSS
- Follow the existing color scheme
- Use responsive design principles
- Implement consistent spacing
- Use semantic class names
- Avoid inline styles

## Accessibility
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation works
- Use ARIA attributes when necessary
- Test with screen readers

## Performance Considerations
- Memoize expensive calculations
- Use React.memo for pure components
- Avoid unnecessary re-renders
- Optimize event handlers with useCallback
- Use useMemo for derived values 