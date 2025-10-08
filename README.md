# 🎓 Vraj Kothari - Portfolio Website

A modern, personal portfolio built with Remix, React, and Tailwind CSS showcasing my journey as a Computer Science student at Georgia Tech and Software Engineering Intern at Shopify.

## 👋 About Me

I'm Vraj Kothari, a Computer Science student at Georgia Institute of Technology pursuing a BS/MS degree with a concentration in Artificial Intelligence. Currently working as a Software Engineering Intern at Shopify on the Growth R&D - CX team.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Visit **http://localhost:3000** to see your portfolio!

## 📄 Pages

- **Homepage** (`/`) - Hero section with introduction and quick stats
- **About** (`/about`) - Bio, technical skills, and extracurriculars
- **Education** (`/education`) - Academic background at Georgia Tech
- **Experience** (`/experience`) - Internship experiences (Shopify, URBN, CBORD, Snap)
- **Projects** (`/projects`) - Showcase of ML, robotics, and full-stack projects
- **Resume** (`/resume`) - Complete CV with download option

## ✏️ Customization Guide

### Adding Your Resume PDF

1. Export your resume as PDF
2. Save it as `public/resume.pdf`
3. The download button in `app/routes/resume.tsx` already has the code ready (just uncomment it!)

### Updating Projects

Edit `app/routes/projects.tsx` and update the `projects` array:

```tsx
{
  title: 'Your Project Name',
  category: 'Machine Learning', // or 'Full Stack', 'Robotics', etc.
  description: 'Project description',
  image: '🚀', // Emoji or update to use real images
  technologies: ['Python', 'TensorFlow', 'etc'],
  features: ['Feature 1', 'Feature 2'],
  // ... more fields
}
```

### Adding Real Project Images

Replace emoji placeholders with actual images:

1. Add images to `public/images/projects/`
2. Update the image field: `image: '/images/projects/my-project.png'`
3. Modify the display code to use `<img>` instead of emoji

### Updating Experience

Your internships are already added! To update or add new ones, edit `app/routes/experience.tsx`.

### Color Scheme

The site uses a blue → purple gradient theme. Colors are defined with Tailwind classes:
- Primary: `blue-600`, `purple-600`, `pink-600`
- To change: Replace these classes throughout the files

## 🛠️ Tech Stack

- **Framework**: Remix (React meta-framework with SSR)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Server**: Express.js
- **Build Tool**: Vite

## 📊 Your Stats

- 🎓 GPA: 3.59 (Dean's List)
- 💼 4 Internships at major companies
- 🧠 Machine Learning projects with 96% accuracy
- 🏆 2nd place in URBN Hackathon

## 🎯 Your Projects

1. **Machine Learning Brain Tumor Detection** - 96% accuracy using CNN, SVM, Random Forest
2. **Automotive LiDAR System** - VIP project for autonomous vehicles
3. **AI Checkout Assistant** - 2nd place hackathon winner using LLMs
4. **Dungeon Crawler Game** - Led team of 5 developers
5. **Dynamic Payments System** - Production feature at URBN
6. **AWS Photo Validation** - 50% efficiency improvement

## 📱 Contact

- **Email**: vrjkothari22@gmail.com
- **Phone**: (267) 707-8448
- **LinkedIn**: [linkedin.com/in/vraj-kothari](https://linkedin.com/in/vraj-kothari)
- **GitHub**: [github.com/vrajkothari](https://github.com/vrajkothari)

## 🚀 Deployment

Deploy to:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Fly.io
```bash
fly launch
fly deploy
```

## 📝 Next Steps

1. ✅ Add your actual resume PDF to `public/resume.pdf`
2. ✅ Replace emoji placeholders with real project screenshots
3. ✅ Add a custom domain
4. ✅ Set up Google Analytics (optional)
5. ✅ Add a blog section (optional)
6. ✅ Implement dark mode (optional)

## 🎨 Features

- ✨ Modern gradient design
- 📱 Fully responsive
- ⚡ Server-side rendering (SSR)
- 🎯 SEO optimized
- 💨 Fast page transitions
- 🎭 Smooth animations
- 🔒 Type-safe with TypeScript

## 🏫 Georgia Tech Specific

Your coursework includes:
- Analysis of Algorithms
- Machine Learning & AI
- Robotics
- Computer Organization
- UI/UX Design
- And more!

Extracurriculars:
- VIP (Vertically Integrated Projects)
- GT Climbing Club
- Drones and Experimental Flight Club
- DramaTech@GT

## 💡 Tips

- Keep your projects section updated as you complete new work
- Add blog posts about your learning journey (future enhancement)
- Share your portfolio link on LinkedIn and GitHub
- Use this as a living document of your career progress

## 📚 Resources

- [Remix Documentation](https://remix.run/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

Built with ❤️ by Vraj Kothari using Remix and React.

**Good luck with your job search and MS program!** 🎉
