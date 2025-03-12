# Calendly Clone (Simplified Frontend Demo)

A simplified frontend-only demo of a Calendly-like scheduling application. This project allows users to set their availability and simulate the booking process, all without any backend or persistence.

## Features

- **Host View**: Set your availability by selecting time slots
- **Guest View**: View available slots and simulate booking
- **Simple Interface**: Clean, intuitive UI with minimal complexity
- **Frontend Only**: No backend, authentication, or persistence required

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header/       # Navigation and view toggle
│   ├── TimeGrid/     # Time slot grid component
│   ├── DatePicker/   # Simple date selection
│   └── BookingModal/ # Confirmation modal
├── views/            # Main application views
│   ├── HostView/     # Availability setting interface
│   └── GuestView/    # Booking interface
├── context/          # React Context for state management
├── types/            # TypeScript type definitions
├── utils/            # Helper functions
└── App.tsx           # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Generating the Starter Code

If you want to generate this project from scratch, you can use the starter prompt:

1. Create a new directory for your project
2. Copy the `starter-prompt.md` file into your project directory
3. Use an AI assistant (like Cursor) with the following prompt:
   ```
   Please generate the starter files and update the project files based on the project description in starter-prompt.md
   ```
4. The AI will scaffold the entire project structure with all necessary files
5. Install dependencies and start the development server as described above

## Usage

1. Toggle between "Host" and "Guest" views using the buttons in the header
2. In Host view, click on time slots to mark them as available
3. Switch to Guest view to see the available slots
4. Click on an available slot to simulate booking

## Project Rules and Guidelines

This project follows a set of rules and guidelines to ensure consistent code quality and maintainability. These rules are defined in the `.cursor/rules` directory and include:

- General coding standards
- Component structure and naming conventions
- TypeScript and Zod usage
- Styling guidelines
- Documentation requirements
- Testing best practices

For AI assistants working with this codebase, these rules provide context on how to maintain and extend the project according to established patterns.

## Documentation

- See `prd.md` for detailed product requirements
- See `todo.md` for project progress and tasks
- See `changelog.md` for version history
- See `.cursor/rules` for project rules and guidelines

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder
