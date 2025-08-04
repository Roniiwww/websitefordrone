# Overview

This is a full-stack web application built with React frontend and Express.js backend, showcasing the "FireHawk" - a life-saving drone project website by Ron Osmani, an 8th grade student from Skopje, North Macedonia. The application features a modern, dark-themed landing page with sections for gallery, demo videos, features, code repository information, and contact details. The project focuses on building autonomous drone technology for emergency response and life-saving missions. It uses a monorepo structure with shared schema definitions and includes database integration capabilities with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Components**: Comprehensive component library based on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark cyberpunk aesthetic
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Centralized component system with consistent spacing, colors, and animations

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Hot module replacement with Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Error Handling**: Centralized error handling middleware with structured responses
- **Request Logging**: Custom middleware for API request/response logging with performance metrics

## Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Database Provider**: Neon Database serverless PostgreSQL
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle Zod integration
- **Development Storage**: In-memory storage implementation for local development

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Type Safety**: Zod schemas for runtime validation and type inference

## Project Structure
- **Monorepo**: Client, server, and shared code in separate directories
- **Shared Types**: Common schema definitions and types accessible to both frontend and backend
- **Asset Management**: Centralized asset handling with proper path resolution
- **Build System**: Separate build processes for client (Vite) and server (esbuild) with production bundling

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tools

## UI and Design
- **Radix UI**: Comprehensive set of unstyled, accessible components for complex UI patterns
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library with consistent styling and theming
- **shadcn/ui**: Pre-built component library built on Radix UI primitives

## Development Tools
- **Vite**: Fast build tool with HMR, optimized for React development
- **TypeScript**: Type safety across the entire application stack
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS processing with Tailwind integration

## External Integrations
- **YouTube**: Embedded demo videos for drone showcases
- **Unsplash**: Stock imagery for gallery and feature sections
- **Replit**: Development environment integration with banner and cartographer plugins

## Production Considerations
- **Asset Optimization**: Vite handles code splitting, tree shaking, and asset optimization
- **Server Deployment**: Node.js production server with static file serving
- **Environment Configuration**: Separate development and production configurations with environment variables