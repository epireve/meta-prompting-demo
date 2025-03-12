# Calendly Clone Project Rules

## Overview
This file contains rules for the AI assistant to follow when working with this Calendly Clone project. These rules help ensure consistent code quality, documentation, and project management.

## General Coding Rules
- Use functional React components with hooks (no class components)
- Use TypeScript for all new code with proper type definitions
- Implement Zod for data validation and schema definition
- Follow the existing project structure and organization
- Maintain a clean and consistent coding style
- Use meaningful variable and function names
- Add comments for complex logic or non-obvious code

## React Specific Rules
- Use React Context API for state management
- Prefer composition over inheritance
- Keep components small and focused on a single responsibility
- Use CSS modules for component styling
- Implement proper prop validation with TypeScript interfaces
- Use React hooks appropriately (useState, useEffect, useContext, etc.)
- Avoid unnecessary re-renders by using memoization when appropriate

## TypeScript Rules
- Define explicit types for all variables, parameters, and return values
- Use interfaces for object shapes and types for unions/primitives
- Avoid using `any` type - use proper type definitions or generics
- Use Zod schemas for runtime validation and TypeScript types for static typing
- Export types and interfaces that are used across multiple files

## Project Structure Rules
- Place components in the appropriate directories:
  - `src/components/` for reusable UI components
  - `src/views/` for page-level components
  - `src/context/` for React Context providers
  - `src/utils/` for utility functions
  - `src/types/` for TypeScript type definitions
- Each component should have its own directory with:
  - Component file (e.g., `ComponentName.tsx`)
  - CSS file (e.g., `ComponentName.css`)
  - Tests (if applicable)
- Keep related files together in the same directory

## Styling Rules
- Use CSS modules for component-specific styles
- Follow the existing color scheme and design patterns
- Implement responsive design for all components
- Use semantic HTML elements
- Ensure accessibility (proper ARIA attributes, keyboard navigation, etc.)
- Use CSS variables for consistent theming

## Documentation Rules
- Update documentation when making significant changes
- Document complex functions and components
- Keep the README up-to-date with setup and usage instructions
- Update the changelog when adding new features or fixing bugs
- Maintain the todo list to track progress

## Testing Rules
- Write tests for critical functionality
- Ensure all components render without errors
- Test user interactions and state changes
- Verify responsive design works on different screen sizes

## Performance Rules
- Optimize component rendering
- Avoid unnecessary re-renders
- Use proper React patterns for efficient updates
- Keep bundle size small by avoiding unnecessary dependencies

## Accessibility Rules
- Ensure proper keyboard navigation
- Use semantic HTML elements
- Add appropriate ARIA attributes
- Maintain sufficient color contrast
- Provide text alternatives for non-text content 