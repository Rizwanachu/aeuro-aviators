# Aeuro Aviators Website

## Overview
This is a React-based website for Aeuro Aviators, an aviation academy that provides pathways for Indian students to European cockpits.

## Project Structure
- `client/` - React frontend application
  - `src/components/` - React components including UI components
  - `src/pages/` - Page components (Home, About, Programs, Contact, etc.)
  - `src/hooks/` - Custom React hooks
  - `src/lib/` - Utility functions and query client setup
- `shared/` - Shared TypeScript schemas
- `attached_assets/` - Images and other assets
- `script/` - Build scripts

## Technology Stack
- **Frontend**: React 19, TypeScript, Vite 7
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI, Shadcn/ui
- **Routing**: Wouter
- **State Management**: TanStack Query
- **Animations**: Framer Motion

## Development
The frontend runs on port 5000 using Vite dev server.

## Deployment
Configured for static deployment with build output in `dist/public`.

## Notes
- The project includes database configuration (Drizzle/PostgreSQL) but the server directory is not present in this import
- Currently runs as a frontend-only static website
