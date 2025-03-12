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

## Usage

1. Toggle between "Host" and "Guest" views using the buttons in the header
2. In Host view, click on time slots to mark them as available
3. Switch to Guest view to see the available slots
4. Click on an available slot to simulate booking

## Documentation

- See `prd.md` for detailed product requirements
- See `todo.md` for project progress and tasks
- See `changelog.md` for version history

## Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder
