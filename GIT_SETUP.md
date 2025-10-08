# 🔧 Git Setup Instructions

## Setting Up Your Personal GitHub Repository

Your portfolio is now disconnected from the original repo. Follow these steps to push it to your own GitHub:

### Step 1: Create a New GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it something like: `portfolio-website` or `vraj-kothari-portfolio`
4. **DO NOT** initialize with README, .gitignore, or license (your project already has these)
5. Click **"Create repository"**

### Step 2: Connect Your Local Repo to GitHub

After creating the repo, GitHub will show you commands. Use these in your terminal:

```bash
# Add your new GitHub repo as the remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Or if you use SSH:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Future Updates

After the initial push, update your repo with:

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Your commit message here"

# Push to GitHub
git push
```

## 📝 Example

If your GitHub username is `vrajkothari` and you named your repo `portfolio`:

```bash
cd /Users/vrajkot/remix-local
git remote add origin https://github.com/vrajkothari/portfolio.git
git branch -M main
git push -u origin main
```

## 🎨 What's Been Changed

Your portfolio now has:
- ✅ **Dark theme** with cyan/emerald colors
- ✅ **Personal page** with lifting and climbing sections
- ✅ All your actual information (resume, projects, etc.)
- ✅ Ready to push to your own GitHub repo

## 🚀 Deploy Your Site

After pushing to GitHub, you can easily deploy:

### Option 1: Vercel (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your portfolio repo
4. It will auto-deploy!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect to GitHub
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `build`

## 💡 Tips

- Commit your changes regularly
- Use meaningful commit messages
- Keep your repo private if you want (can change in Settings)
- Share the deployed URL on LinkedIn and resume!

---

Need help? Check the main README.md or reach out!

