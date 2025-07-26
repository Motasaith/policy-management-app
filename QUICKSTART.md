# Quick Start Guide

Follow these steps to get the Policy Management App running locally in under 5 minutes.

## Prerequisites
- Node.js installed (v14 or later)
- MongoDB installed and running locally

## Step 1: Clone and Setup

```bash
# Navigate to the project directory
cd policy-management-app

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Step 2: Environment Configuration

### Backend (.env)
Create `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/policy-management
PORT=5000
```

### Frontend (.env)
Create `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:5000
```

## Step 3: Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows (if installed as service)
net start MongoDB

# macOS (if installed via Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod
```

## Step 4: Seed Sample Data (Optional)
```bash
cd backend
npm run seed
```

This creates 5 sample policies you can use for testing.

## Step 5: Start the Applications

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Backend will start on http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
Frontend will start on http://localhost:3000

## Step 6: Test the Application

### Frontend Testing
1. Open http://localhost:3000
2. Try searching with sample data:
   - CNIC: `12345-1234567-1`
   - Policy Number: `POL-2024-002`
3. Visit http://localhost:3000/admin to add new policies

### Backend API Testing
Test these endpoints directly:
- GET http://localhost:5000/api/health
- GET http://localhost:5000/api/policies
- GET http://localhost:5000/api/policies/search?cnic=12345-1234567-1

## Sample Test Data
If you ran the seed script, you can test with:

| Name | CNIC | Policy Number | Plan Type |
|------|------|---------------|-----------|
| Ahmad Ali | 12345-1234567-1 | POL-2024-001 | Life Insurance |
| Fatima Khan | 54321-7654321-2 | POL-2024-002 | Health Insurance |
| Muhammad Hassan | 11111-2222222-3 | POL-2024-003 | Auto Insurance |

## Troubleshooting

### Common Issues
1. **MongoDB Connection Error**: Ensure MongoDB is running
2. **Port Already in Use**: Change ports in .env files
3. **Module Not Found**: Run `npm install` in both directories
4. **CORS Errors**: Check that backend is running on port 5000

### Reset Everything
```bash
# Clear database
cd backend
npx mongo policy-management --eval "db.dropDatabase()"

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

## Next Steps
- Read the full README.md for detailed setup
- Check DEPLOYMENT.md for production deployment
- Start building your own features!

🎉 You're all set! The Policy Management App should now be running locally.
