# SociaPulse - Social Media Monitoring Platform

A comprehensive social listening and analytics platform for monitoring brand mentions across social media platforms.

## Features

- **Real-time Social Media Monitoring** - Track mentions across Twitter, Instagram, LinkedIn, Facebook, and YouTube
- **Sentiment Analysis** - Automatic sentiment classification of mentions
- **Analytics Dashboard** - Comprehensive analytics with charts and metrics
- **Keyword Management** - Monitor multiple keywords with filtering
- **PDF Report Export** - Generate and download custom reports
- **Client Management** - Manage multiple clients and their monitoring preferences
- **Database Persistence** - PostgreSQL database for data storage

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Tailwind CSS + shadcn/ui components
- **State Management**: TanStack Query
- **Routing**: Wouter

## Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database (local installation or cloud service like Neon)

## Local Setup Instructions

### 1. Clone/Download Project Files

Save all the project files in a directory structure like this:

```
sociapulse/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   └── index.html
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   ├── db.ts
│   ├── seed.ts
│   └── vite.ts
├── shared/
│   └── schema.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── drizzle.config.ts
└── README.md
```

### 2. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
cd sociapulse
npm install
```

### 3. Database Setup

#### Option A: Local PostgreSQL

1. Install PostgreSQL on your system
2. Create a new database:
   ```sql
   CREATE DATABASE sociapulse;
   ```
3. Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/sociapulse
   PGHOST=localhost
   PGPORT=5432
   PGUSER=your_username
   PGPASSWORD=your_password
   PGDATABASE=sociapulse
   ```

#### Option B: Cloud Database (Neon/Supabase)

1. Create a free account on [Neon](https://neon.tech) or [Supabase](https://supabase.com)
2. Create a new database
3. Copy the connection string to your `.env` file:
   ```env
   DATABASE_URL=your_connection_string_here
   ```

### 4. Initialize Database

Push the database schema and seed with demo data:

```bash
npm run db:push
```

### 5. Start the Development Server

Run the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### 6. Access the Application

1. Open your browser and go to `http://localhost:5000`
2. Click "Login" and use the demo credentials:
   - **Email**: demo@sociapulse.com
   - **Password**: demo123

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Demo Data

The application comes pre-loaded with comprehensive demo data including:

- **Users**: Demo user account
- **Keywords**: oncology, healthcare, medical device, telemedicine, clinical trial, pharmaceuticals, biotech, AI healthcare, precision medicine, mental health, digital health
- **Mentions**: 20+ realistic social media mentions across multiple platforms
- **Analytics**: Sentiment analysis, engagement metrics, reach data

## Project Structure

- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript types and database schema
- `/components` - Reusable UI components
- `/pages` - Application pages/routes

## Environment Variables

Required environment variables for local development:

```env
DATABASE_URL=your_postgresql_connection_string
PGHOST=localhost
PGPORT=5432
PGUSER=your_username
PGPASSWORD=your_password
PGDATABASE=sociapulse
NODE_ENV=development
```

## Troubleshooting

### Database Connection Issues

1. Verify PostgreSQL is running
2. Check database credentials in `.env`
3. Ensure database exists and is accessible
4. Run `npm run db:push` to create tables

### Port Already in Use

If port 5000 is busy, the app will automatically try the next available port.

### Build Issues

1. Clear node_modules: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

## License

MIT License - Feel free to use this project for your presentations and client demos.