# Testing Rules for Calendly Clone

## Testing Framework

### Setup
- Use Jest as the test runner
- Use React Testing Library for component testing
- Configure tests in `jest.config.js` or `package.json`

### File Organization
- Place test files next to the files they test
- Use `.test.tsx` or `.spec.tsx` suffix for test files
- Group related tests together

## Component Testing

### Basic Component Tests
- Test that components render without errors
- Verify that components display the correct content
- Check that components respond to prop changes
- Test component interactions (clicks, inputs, etc.)

Example:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import TimeGrid from './TimeGrid';

describe('TimeGrid', () => {
  const mockTimeSlots = [/* mock data */];
  const mockOnSlotClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without errors', () => {
    render(
      <TimeGrid 
        timeSlots={mockTimeSlots} 
        isHostView={true} 
        onSlotClick={mockOnSlotClick} 
      />
    );
    expect(screen.getByText('Set Your Availability')).toBeInTheDocument();
  });

  test('calls onSlotClick when a slot is clicked', () => {
    render(
      <TimeGrid 
        timeSlots={mockTimeSlots} 
        isHostView={true} 
        onSlotClick={mockOnSlotClick} 
      />
    );
    
    const slot = screen.getByText('9:00 AM - 9:30 AM').closest('.time-slot');
    fireEvent.click(slot);
    
    expect(mockOnSlotClick).toHaveBeenCalledWith(mockTimeSlots[0].id);
  });
});
```

### Context Testing
- Test components with context providers
- Create test wrappers for components that use context
- Mock context values as needed

Example:
```tsx
import { render, screen } from '@testing-library/react';
import { CalendlyProvider } from '../../context/CalendlyContext';
import HostView from './HostView';

const renderWithContext = (ui) => {
  return render(
    <CalendlyProvider>
      {ui}
    </CalendlyProvider>
  );
};

describe('HostView', () => {
  test('renders without errors', () => {
    renderWithContext(<HostView />);
    expect(screen.getByText('Set Your Availability')).toBeInTheDocument();
  });
});
```

## Utility Function Testing

### Pure Function Tests
- Test utility functions in isolation
- Verify correct output for various inputs
- Test edge cases and error handling

Example:
```tsx
import { generateTimeSlots, isSlotBookable } from './timeUtils';

describe('timeUtils', () => {
  describe('generateTimeSlots', () => {
    test('generates correct number of slots', () => {
      const slots = generateTimeSlots(9, 11, 30);
      expect(slots.length).toBe(4); // 9:00, 9:30, 10:00, 10:30
    });

    test('formats times correctly', () => {
      const slots = generateTimeSlots(9, 10, 30);
      expect(slots[0].startTime).toBe('9:00 AM');
      expect(slots[0].endTime).toBe('9:30 AM');
    });
  });

  describe('isSlotBookable', () => {
    test('returns true for available and unbooked slots', () => {
      const slot = { id: '09:00', startTime: '9:00 AM', endTime: '9:30 AM', isAvailable: true, isBooked: false };
      expect(isSlotBookable(slot)).toBe(true);
    });

    test('returns false for unavailable slots', () => {
      const slot = { id: '09:00', startTime: '9:00 AM', endTime: '9:30 AM', isAvailable: false, isBooked: false };
      expect(isSlotBookable(slot)).toBe(false);
    });

    test('returns false for booked slots', () => {
      const slot = { id: '09:00', startTime: '9:00 AM', endTime: '9:30 AM', isAvailable: true, isBooked: true };
      expect(isSlotBookable(slot)).toBe(false);
    });
  });
});
```

## Integration Testing

### User Flow Tests
- Test complete user flows (e.g., booking a slot)
- Verify that components work together correctly
- Test state changes across components

Example:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App integration', () => {
  test('booking flow works correctly', async () => {
    render(<App />);
    
    // Switch to host view and make a slot available
    const hostButton = screen.getByText('Host View');
    fireEvent.click(hostButton);
    
    const slot = screen.getByText('9:00 AM - 9:30 AM').closest('.time-slot');
    fireEvent.click(slot);
    
    // Switch to guest view and book the slot
    const guestButton = screen.getByText('Guest View');
    fireEvent.click(guestButton);
    
    const availableSlot = screen.getByText('9:00 AM - 9:30 AM').closest('.time-slot');
    fireEvent.click(availableSlot);
    
    // Confirm booking
    const confirmButton = screen.getByText('Confirm Booking');
    fireEvent.click(confirmButton);
    
    // Verify success message
    expect(screen.getByText(/Booking confirmed/i)).toBeInTheDocument();
  });
});
```

## Mocking

### Mock Functions
- Use Jest mock functions for callbacks and event handlers
- Verify that functions are called with the correct arguments
- Test the number of times a function is called

### Mock Data
- Create realistic mock data for tests
- Use factory functions to generate test data
- Keep mock data consistent across tests

Example:
```tsx
// Mock data factory
const createMockTimeSlot = (overrides = {}) => ({
  id: '09:00',
  startTime: '9:00 AM',
  endTime: '9:30 AM',
  isAvailable: false,
  isBooked: false,
  ...overrides
});

// Using the factory in tests
const availableSlot = createMockTimeSlot({ isAvailable: true });
const bookedSlot = createMockTimeSlot({ isAvailable: true, isBooked: true });
```

## Test Coverage

### Coverage Goals
- Aim for high test coverage (80%+)
- Focus on testing critical functionality
- Ensure all user flows are covered

### Running Coverage Reports
- Use Jest's coverage reporting
- Review coverage reports regularly
- Address areas with low coverage

```bash
npm test -- --coverage
```

## Accessibility Testing

### Basic Accessibility Tests
- Test keyboard navigation
- Verify proper ARIA attributes
- Check heading hierarchy

### Tools
- Use jest-axe for automated accessibility testing
- Manually test with screen readers
- Verify color contrast meets WCAG standards

Example:
```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import TimeGrid from './TimeGrid';

expect.extend(toHaveNoViolations);

describe('TimeGrid accessibility', () => {
  test('should not have accessibility violations', async () => {
    const { container } = render(
      <TimeGrid 
        timeSlots={mockTimeSlots} 
        isHostView={true} 
        onSlotClick={jest.fn()} 
      />
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
``` 