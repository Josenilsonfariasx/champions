#!/bin/bash

# Clean previous build
echo "Cleaning previous build..."
rm -rf dist

# Build the TypeScript files
echo "Building TypeScript files..."
npm run build

# Copy necessary files for production
echo "Copying production files..."
cp package.json dist/
cp package-lock.json dist/
cp .env dist/ 2>/dev/null || echo ".env file not found, but that's okay"

echo "Build completed successfully! The production version is in the dist/ folder."
echo "To run in production: cd dist && npm ci --only=production && npm start" 