# Deployment Guide

This guide provides step-by-step instructions for deploying the Policy Management App to Render (backend) and Vercel (frontend).

## Backend Deployment (Render)

### Prerequisites
- GitHub account
- Render account (free tier available)
- MongoDB Atlas account (for cloud database)

### Step 1: Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string

### Step 2: Deploy Backend to Render
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: `policy-management-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### Step 3: Set Environment Variables in Render
In your Render service dashboard, go to "Environment" and add:
```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
NODE_ENV=production
```

### Step 4: Deploy
Click "Create Web Service" and wait for deployment to complete.

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Step 1: Deploy Frontend to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### Step 2: Set Environment Variables in Vercel
In your Vercel project dashboard, go to "Settings" → "Environment Variables" and add:
```
REACT_APP_API_URL=https://your-render-backend-url.onrender.com
```

### Step 3: Deploy
Click "Deploy" and wait for deployment to complete.

## Testing Deployment

### Backend Testing
Visit your Render backend URL and test these endpoints:
- `GET /` - Should return API welcome message
- `GET /api/health` - Should return health status
- `POST /api/policies` - Test creating a policy
- `GET /api/policies/search?cnic=test` - Test searching

### Frontend Testing
Visit your Vercel frontend URL and test:
- Homepage loads correctly
- Search functionality works
- Admin form at `/admin` works
- Mobile responsiveness

## Environment Variables Summary

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/policy-management  # Local
# OR
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/policy-management  # Atlas

PORT=5000
NODE_ENV=development  # Local
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000  # Local
# OR
REACT_APP_API_URL=https://your-backend.onrender.com  # Production
```

## Troubleshooting

### Common Issues
1. **CORS Errors**: Ensure backend allows frontend domain
2. **Database Connection**: Check MongoDB Atlas IP whitelist
3. **Environment Variables**: Verify all variables are set correctly
4. **Build Failures**: Check for missing dependencies

### Debug Steps
1. Check Render/Vercel logs for errors
2. Test API endpoints individually
3. Verify environment variables are loaded
4. Check network requests in browser dev tools

## Production Considerations

### Security
- Use strong database passwords
- Limit MongoDB Atlas IP access
- Add rate limiting to API endpoints
- Validate all input data

### Monitoring
- Set up Render service monitoring
- Use Vercel analytics
- Monitor MongoDB Atlas metrics
- Set up error tracking (e.g., Sentry)

### Scaling
- Upgrade Render plan for better performance
- Use Vercel Pro for advanced features
- Consider MongoDB Atlas cluster scaling
- Implement caching strategies
