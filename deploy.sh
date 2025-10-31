#!/bin/bash

echo "🚀 Sector Analysts Pitch - Deployment Script"
echo "=============================================="
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🔐 Please complete Vercel authentication:"
echo "   1. Visit: https://vercel.com/login"
echo "   2. Login with your account"
echo "   3. Then run: vercel --prod"
echo ""
echo "Or run this deployment manually:"
echo "   vercel --prod"
echo ""
