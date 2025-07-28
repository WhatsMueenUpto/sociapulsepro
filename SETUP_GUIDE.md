# Quick Setup Guide for Dr. Kesha

## Step-by-Step Local Installation

### 1. Prerequisites Check
- [ ] Node.js 18+ installed
- [ ] PostgreSQL installed (or cloud database access)
- [ ] Git installed (optional)

### 2. Project Setup
```bash
# Create project directory
mkdir sociapulse
cd sociapulse

# Copy all project files to this directory
# (Use the file structure provided)

# Install dependencies
npm install
```

### 3. Database Setup
```bash
# Option A: Local PostgreSQL
createdb sociapulse

# Option B: Use cloud database (Neon, Supabase, etc.)
# Get connection string from your provider
```

### 4. Environment Configuration
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your database credentials
# DATABASE_URL=postgresql://username:password@localhost:5432/sociapulse
```

### 5. Initialize Database
```bash
# Push schema and seed data
npm run db:push
```

### 6. Start Application
```bash
# Development mode
npm run dev

# Application will be available at http://localhost:5000
```

### 7. Login with Demo Account
- Email: demo@sociapulse.com
- Password: demo123

## Common Issues & Solutions

### Issue: "Database connection failed"
**Solution**: 
- Check PostgreSQL is running: `pg_ctl status`
- Verify credentials in `.env` file
- Test connection: `psql -d sociapulse`

### Issue: "Port 5000 already in use"
**Solution**: 
- App will auto-select next available port
- Or kill process using port: `lsof -ti:5000 | xargs kill`

### Issue: "Module not found"
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Database tables don't exist"
**Solution**:
```bash
npm run db:push
```

## File Structure You Need

```
sociapulse/
├── package.json              # Dependencies & scripts
├── .env                      # Environment variables
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS config
├── drizzle.config.ts         # Database config
├── postcss.config.js         # PostCSS config
├── components.json           # shadcn/ui config
├── client/
│   ├── index.html           # HTML entry point
│   └── src/
│       ├── main.tsx         # React entry point
│       ├── App.tsx          # Main app component
│       ├── index.css        # Global styles
│       ├── components/      # React components
│       ├── pages/           # Application pages
│       ├── hooks/           # Custom React hooks
│       └── lib/             # Utility functions
├── server/
│   ├── index.ts             # Express server
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Database operations
│   ├── db.ts                # Database connection
│   ├── seed.ts              # Demo data seeder
│   └── vite.ts              # Vite integration
└── shared/
    └── schema.ts            # Database schema & types
```

## Production Deployment

For production deployment:

```bash
# Build the application
npm run build

# Start production server
npm run start
```

Set production environment variables:
```env
NODE_ENV=production
DATABASE_URL=your_production_database_url
```