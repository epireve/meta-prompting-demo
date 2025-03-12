# TypeScript and Zod Rules for Calendly Clone

## TypeScript Type Definitions

### Basic Types
- Use explicit types for all variables, parameters, and return values
- Prefer interfaces for object shapes
- Use type aliases for unions, intersections, and complex types
- Avoid using `any` - use `unknown` if type is truly unknown
- Use proper generics when creating reusable components or functions

### Naming Conventions
- Use PascalCase for interfaces, types, and enums
- Use camelCase for variables, functions, and methods
- Prefix interfaces with `I` only when necessary to avoid naming conflicts
- Use descriptive names that indicate the purpose of the type

### Type Organization
- Define component prop interfaces near the component
- Place shared types in the `src/types` directory
- Group related types together
- Export types that are used across multiple files

## Zod Schema Definitions

### Schema Structure
- Define Zod schemas in the `src/types` directory
- Use descriptive names for schemas (e.g., `TimeSlotSchema`)
- Derive TypeScript types from Zod schemas using `z.infer<typeof Schema>`
- Provide meaningful error messages for validation

### Schema Example
```typescript
import { z } from 'zod';

// Define the schema
export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  role: z.enum(["admin", "user"]).default("user"),
  createdAt: z.date().optional(),
});

// Derive the type
export type User = z.infer<typeof UserSchema>;
```

### Validation Best Practices
- Validate data at application boundaries (API calls, form submissions)
- Use schema methods like `.parse()` or `.safeParse()` for validation
- Handle validation errors gracefully
- Provide user-friendly error messages
- Use schema transformations when necessary

## Type Safety Guidelines

### Strict Null Checking
- Enable `strictNullChecks` in tsconfig.json
- Use proper null/undefined checks
- Avoid non-null assertion operator (`!`) when possible
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators

### Type Narrowing
- Use type guards to narrow types (e.g., `typeof`, `instanceof`, custom guards)
- Implement discriminated unions for complex state
- Use assertion functions when appropriate

### Example Type Guard
```typescript
function isTimeSlot(value: unknown): value is TimeSlot {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'startTime' in value &&
    'endTime' in value &&
    'isAvailable' in value
  );
}
```

## Integration with React

### Component Props
- Define prop interfaces for all components
- Use React's built-in types (e.g., `React.ReactNode`, `React.ChangeEvent`)
- Specify callback types with proper event parameters
- Use generics for reusable components

### Hooks Typing
- Properly type useState hooks (e.g., `useState<string>('')`)
- Define return types for custom hooks
- Use proper event types for event handlers

### Context Typing
- Define explicit types for context values
- Provide proper default values
- Use type assertions only when necessary and safe 