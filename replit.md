# Dr. Kesha - Social Media Monitoring Platform

## Overview

Dr. Kesha is a comprehensive social media monitoring platform that allows users to track brand mentions, analyze sentiment, and monitor conversations across multiple social media platforms. The application features real-time mention tracking, analytics dashboards, and customizable alerts for keyword monitoring.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Architecture
The application follows a modern full-stack architecture with:
- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured for Neon serverless)
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

### Monorepo Structure
The project uses a monorepo structure with shared code:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript types and database schema
- Root level configuration files for various tools

## Key Components

### Frontend Architecture
- **React Components**: Modular component structure with reusable UI components
- **Pages**: Landing, Login, Signup, Dashboard, and 404 pages
- **Dashboard Features**: Real-time social feed, analytics charts, platform tabs, search functionality
- **UI Library**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming

### Backend Architecture
- **Express Server**: REST API with middleware for logging and error handling
- **Storage Layer**: Abstract storage interface with in-memory implementation (demo data)
- **Route Handlers**: Authentication, mentions, and alerts endpoints
- **Development Tools**: Vite integration for hot reloading in development

### Database Schema
- **Users**: Authentication and user management
- **Mentions**: Social media mentions with sentiment analysis
- **Alerts**: User-configured keyword monitoring alerts
- **Relations**: Foreign key relationships between entities

## Data Flow

### Authentication Flow
1. User registration/login through forms
2. Basic credential validation (demo implementation)
3. Session management (simplified for demo)
4. Protected route access to dashboard

### Mention Monitoring Flow
1. User configures keywords to monitor
2. Backend fetches mentions based on filters (keyword, platform)
3. Real-time updates through periodic polling
4. Sentiment analysis and engagement metrics tracking
5. Data visualization through charts and analytics cards

### Alert System Flow
1. Users create keyword-based alerts
2. Platform-specific monitoring configuration
3. Alert status management (active/inactive)
4. Integration with mention detection system

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks
- **Express**: Node.js web framework
- **Drizzle ORM**: Type-safe SQL toolkit
- **@neondatabase/serverless**: PostgreSQL adapter for Neon

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast JavaScript bundler for production

### Data Visualization
- **Recharts**: Chart library for analytics
- **TanStack Query**: Server state management and caching

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles server code to `dist/index.js`
- **Static Assets**: Served from built client directory

### Environment Configuration
- **Development**: Uses `tsx` for TypeScript execution with hot reloading
- **Production**: Node.js serves compiled JavaScript bundle
- **Database**: Configured for PostgreSQL with environment variable connection

### Scripts and Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both client and server
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

### Platform Integration
- **Replit Ready**: Includes Replit-specific configurations and banner
- **Vite Development**: Integrated development environment with middleware
- **Type Safety**: Full TypeScript support across the stack

The application is designed as a scalable social media monitoring solution with a clean separation of concerns, modern development practices, and a focus on user experience through real-time updates and comprehensive analytics.