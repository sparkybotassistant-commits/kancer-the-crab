#!/bin/bash

# Kancer The Crab - GitHub Pages Deployment Script
# This script helps you deploy the website to GitHub Pages

echo "🦀 Kancer The Crab - Deployment Helper"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Running git init..."
    git init
    git config user.email "deploy@kancer.thecrab"
    git config user.name "Kancer Deploy"
fi

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo ""
    echo "⚠️  GitHub remote not configured!"
    echo ""
    echo "To deploy, you need to:"
    echo ""
    echo "1. Create a repository on GitHub:"
    echo "   https://github.com/new"
    echo "   Name: kancer-the-crab"
    echo "   Visibility: Public"
    echo ""
    echo "2. Then run this command (replace YOUR_USERNAME):"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/kancer-the-crab.git"
    echo ""
    echo "3. Then run this script again."
    echo ""
    exit 1
fi

echo "📦 Adding files to git..."
git add .

echo "💾 Committing changes..."
git commit -m "Deploy Kancer The Crab website" || echo "No changes to commit"

echo "🚀 Pushing to GitHub..."
git push -u origin main || git push -u origin master

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps to enable GitHub Pages:"
echo "1. Go to: https://github.com/$(git remote get-url origin | sed 's/.*github.com\///' | sed 's/\.git//' | sed 's/\//\/\/github.com\//')/settings/pages"
echo "2. Under 'Source', select 'Deploy from a branch'"
echo "3. Select 'main' (or 'master') branch and '/ (root)' folder"
echo "4. Click 'Save'"
echo ""
echo "⏳ Wait 2-3 minutes for deployment..."
echo "🌐 Your site will be at: https://$(git remote get-url origin | sed 's/.*github.com\///' | sed 's/\.git//' | sed 's/\//\/\/github.com\//').github.io/kancer-the-crab/"
echo ""
