# Styling Rules for Calendly Clone

## CSS Organization

### File Structure
- Each component should have its own CSS file
- Name CSS files to match component names (e.g., `ComponentName.css`)
- Place CSS files in the same directory as their components
- Use consistent naming conventions across all CSS files

### Class Naming
- Use kebab-case for CSS class names (e.g., `time-slot`, `booking-modal`)
- Use descriptive class names that reflect the component's purpose
- Prefix classes with component name to avoid conflicts (e.g., `time-grid-container`)
- Use BEM-like naming for related elements:
  - Block: `time-grid`
  - Element: `time-grid__slot`
  - Modifier: `time-grid__slot--available`

## Color Scheme

### Primary Colors
- Primary Blue: `#0066ff`
- Primary Green: `#4caf50`
- Primary Gray: `#6c757d`

### Status Colors
- Available: `#e6ffea` (light green)
- Unavailable: `#f8f9fa` (light gray)
- Booked: `#e6f0ff` (light blue)

### Text Colors
- Primary Text: `#333`
- Secondary Text: `#6c757d`
- Link Text: `#0066ff`

### Background Colors
- Main Background: `#f9f9f9`
- Card Background: `#ffffff`
- Header Background: `#f8f9fa`

## Layout Guidelines

### Spacing
- Use consistent spacing throughout the application
- Implement a spacing scale:
  - Extra Small: `0.25rem` (4px)
  - Small: `0.5rem` (8px)
  - Medium: `1rem` (16px)
  - Large: `1.5rem` (24px)
  - Extra Large: `2rem` (32px)

### Containers
- Main content should have a maximum width of `800px`
- Use appropriate padding for different screen sizes:
  - Mobile: `1rem`
  - Tablet: `1.5rem`
  - Desktop: `2rem`

### Responsive Design
- Implement mobile-first approach
- Use media queries for responsive layouts
- Common breakpoints:
  - Small: `576px`
  - Medium: `768px`
  - Large: `992px`
  - Extra Large: `1200px`

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes
- Base: `1rem` (16px)
- Small: `0.875rem` (14px)
- Large: `1.125rem` (18px)
- Heading 1: `1.5rem` (24px)
- Heading 2: `1.25rem` (20px)
- Heading 3: `1.125rem` (18px)

### Line Heights
- Default: `1.6`
- Headings: `1.2`

## Component-Specific Styles

### Buttons
- Primary Button:
  - Background: `#0066ff`
  - Text: `white`
  - Border: `1px solid #0066ff`
  - Border Radius: `4px`
  - Padding: `0.5rem 1rem`

- Secondary Button:
  - Background: `white`
  - Text: `#6c757d`
  - Border: `1px solid #6c757d`
  - Border Radius: `4px`
  - Padding: `0.5rem 1rem`

### Time Slots
- Available Slot:
  - Background: `#e6ffea`
  - Border: `1px solid #4caf50`

- Unavailable Slot:
  - Background: `#f8f9fa`
  - Border: `1px solid #ddd`
  - Color: `#6c757d`

- Booked Slot:
  - Background: `#e6f0ff`
  - Border: `1px solid #0066ff`

### Forms
- Input fields:
  - Padding: `0.5rem`
  - Border: `1px solid #ddd`
  - Border Radius: `4px`
  - Focus Border: `1px solid #0066ff`

## Animations

### Transitions
- Default Transition: `all 0.2s ease`
- Hover Effects: Use subtle transitions for hover states

### Keyframe Animations
- Use keyframe animations for more complex animations
- Example (fade in):
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Accessibility

### Color Contrast
- Ensure sufficient contrast between text and background colors
- Meet WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text)

### Focus States
- Provide visible focus states for interactive elements
- Don't remove outline without providing an alternative

### Screen Reader Support
- Use appropriate ARIA attributes
- Ensure proper heading hierarchy
- Provide text alternatives for non-text content 