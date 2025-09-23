# COMATRA FISH MARINE - Corporate Website

## Overview

COMATRA FISH MARINE is a professional corporate website for a sustainable fishing, aquaculture, and marine product distribution company operating in West Africa (Côte d'Ivoire, Benin, and Togo). The application serves as a comprehensive business showcase featuring company information, product catalogs, agency locations, partner networks, and contact capabilities. Built with React/Vite frontend and Express.js backend, the site emphasizes modern design, accessibility, and responsive user experience across all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using **React 18** with **TypeScript** and utilizes a component-based architecture pattern. The application employs **Wouter** for client-side routing instead of React Router, providing a lightweight routing solution. State management is handled through **React Query (TanStack Query)** for server state and built-in React hooks for local component state. The UI framework is **shadcn/ui** built on top of **Radix UI primitives**, providing accessible and customizable components with consistent design patterns.

### Styling and Design System
The application uses **Tailwind CSS** for styling with a custom design system based on an "Ocean" color palette theme. Colors are systematically defined using CSS custom properties and organized into semantic color scales (ocean-very-dark, ocean-dark, ocean-medium, etc.). Typography uses **Google Fonts** with Montserrat for headings and Roboto for body text. The design system prioritizes accessibility with proper contrast ratios, focus states, and semantic markup.

### Backend Architecture
The server-side uses **Express.js** with TypeScript in a REST API pattern. The application follows a modular route-based architecture with separate route handlers, storage abstraction layer, and middleware for request logging and error handling. Currently implements an in-memory storage solution but is architected to easily switch to database persistence through the storage interface abstraction.

### Data Layer and Schema Management
Database schema is managed using **Drizzle ORM** with PostgreSQL dialect configuration, though the current implementation uses in-memory storage. The schema includes tables for users and contact submissions with proper TypeScript type inference. **Zod** is used for runtime validation and schema creation, ensuring type safety across the application stack.

### Build and Development Tools
The application uses **Vite** as the build tool and development server, configured with React plugin and TypeScript support. The build process compiles the client-side React application and bundles the server-side Express application using **esbuild**. Development environment includes hot module replacement, error overlays, and Replit-specific development tooling.

### Component Architecture
Components are organized into a hierarchical structure with reusable UI components in `components/ui/`, layout components in `components/layout/`, and section-specific components in `components/sections/`. Each page is a top-level route component that composes smaller components. The architecture emphasizes component reusability and separation of concerns.

### Form Handling and Validation
Forms use **React Hook Form** with **Zod resolvers** for validation. The contact form demonstrates the pattern with client-side validation, server-side processing, and user feedback through toast notifications. Form components are built using the shadcn/ui form primitives for consistent styling and accessibility.

## External Dependencies

### UI and Component Libraries
- **@radix-ui/react-***: Complete suite of accessible React components including dialogs, dropdowns, navigation menus, and form controls
- **@tanstack/react-query**: Server state management and caching solution for API interactions
- **react-hook-form**: Form state management and validation library
- **@hookform/resolvers**: Integration layer between React Hook Form and validation libraries
- **lucide-react**: Modern icon library providing consistent iconography
- **react-icons**: Additional icon sets including social media icons (Twitter, LinkedIn, Instagram)

### Database and Validation
- **drizzle-orm**: TypeScript-first ORM with PostgreSQL support and type-safe query building
- **drizzle-kit**: Schema management and migration tools for Drizzle ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database driver for cloud deployment
- **zod**: TypeScript-first schema validation library for runtime type checking
- **drizzle-zod**: Integration between Drizzle ORM and Zod for seamless schema validation

### Styling and CSS
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe utility for creating component variants with Tailwind
- **clsx**: Utility for constructing conditional className strings
- **tailwind-merge**: Utility for merging Tailwind CSS classes without conflicts

### Maps Integration
- **Google Maps JavaScript API**: Interactive mapping functionality for displaying agency locations with custom markers and info windows

### Development and Build Tools
- **vite**: Fast build tool and development server with React plugin support
- **typescript**: Static type checking and enhanced developer experience
- **@vitejs/plugin-react**: Official Vite plugin for React support with Fast Refresh
- **@replit/vite-plugin-***: Replit-specific development tools for enhanced debugging and development experience

### Utility Libraries
- **date-fns**: Modern date manipulation and formatting library
- **nanoid**: Compact URL-safe unique string ID generator for generating unique identifiers