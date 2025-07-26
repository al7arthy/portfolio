# 🌟 Ahmed Muidh Alharthy - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. This portfolio showcases my work as a Software Developer and MIS student, featuring real-time GitHub integration, multilingual support, and a beautiful dark/light theme system.

## 🚀 Live Demo

**🌐 [View Live Portfolio](https://al7arthy.dev)**

## ✨ Key Features

### 🌍 **Internationalization (i18n)**
- **Bilingual Support**: Full English and Arabic language support
- **RTL Layout**: Proper right-to-left layout for Arabic with logical CSS properties
- **Dynamic Language Switching**: Seamless language toggle with persistent storage
- **Tajawal Font Integration**: Beautiful Arabic typography using Google Fonts

### 🎨 **Theme System**
- **Dark/Light Mode**: Elegant theme switching with smooth transitions
- **Persistent Theme**: Theme preference saved in localStorage
- **System Integration**: Respects user's system theme preferences
- **Smooth Animations**: Beautiful fade transitions between themes

### 📊 **Live GitHub Integration**
- **Real-time Data**: Dynamic fetching of GitHub profile information
- **Project Showcase**: Automatic display of latest repositories
- **GitHub Stats**: Live statistics including repositories, stars, and commits
- **Smart Filtering**: Intelligent project categorization by language and topics
- **Error Handling**: Graceful fallbacks when API is unavailable

### 🎯 **Interactive Navigation**
- **Active Section Tracking**: Navbar highlights current section based on scroll position
- **Smooth Scrolling**: Elegant navigation between sections
- **Mobile Responsive**: Collapsible mobile menu with touch-friendly interface

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Flexible Grid**: CSS Grid and Flexbox for perfect layouts
- **Touch Optimized**: Enhanced mobile user experience

### 🎭 **Advanced Animations**
- **Scroll-Based Animations**: Elements animate into view on scroll
- **Staggered Animations**: Beautiful cascading effects
- **Hover Effects**: Interactive micro-animations
- **Performance Optimized**: Smooth 60fps animations

### 📬 **Contact Integration**
- **Formspree Integration**: Working contact form with email notifications
- **Form Validation**: Client-side validation for better UX
- **Success/Error States**: Clear feedback for form submissions

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite 7.0.4** - Lightning-fast build tool

### **Styling & Design**
- **TailwindCSS 4.1.11** - Utility-first CSS framework
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom CSS Variables** - Dynamic theming
- **FontAwesome Icons** - Professional icon library

### **Internationalization**
- **react-i18next 15.6.1** - Complete i18n solution
- **i18next 25.3.2** - Feature-rich internationalization framework

### **Data Fetching**
- **GitHub REST API** - Real-time repository and profile data
- **Custom React Hooks** - Reusable data fetching logic
- **Error Boundaries** - Robust error handling

### **Typography**
- **Google Fonts (Cairo)** - Professional Arabic typography
- **@fontsource/cairo** - Self-hosted font optimization

### **Development Tools**
- **ESLint** - Code quality and consistency
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Dev Server** - Hot module replacement

### **Deployment**
- **GitHub Pages** - Automated deployment
- **GitHub Actions** - CI/CD pipeline
- **Custom Domain** - Professional domain setup

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx       # About section with GitHub stats
│   │   ├── Contact.tsx     # Contact form with Formspree
│   │   ├── Footer.tsx      # Footer with social links
│   │   ├── Hero.tsx        # Hero section with profile image
│   │   ├── Navbar.tsx      # Navigation with active tracking
│   │   ├── Projects.tsx    # Dynamic GitHub projects
│   │   └── Services.tsx    # Services showcase
│   ├── hooks/              # Custom React hooks
│   │   ├── useActiveSection.ts    # Scroll-based navigation
│   │   ├── useGitHubProfile.ts    # GitHub profile data
│   │   ├── useGitHubProjects.ts   # GitHub repositories
│   │   ├── useGitHubStats.ts      # GitHub statistics
│   │   ├── useLanguage.ts         # i18n language management
│   │   ├── useScrollAnimation.ts  # Scroll-triggered animations
│   │   └── useTheme.ts           # Dark/light theme system
│   ├── i18n/               # Internationalization
│   │   ├── ar.json         # Arabic translations
│   │   ├── en.json         # English translations
│   │   └── index.ts        # i18n configuration
│   ├── assets/             # Static assets
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and animations
├── public/                # Public assets
├── dist/                  # Production build output
├── package.json           # Project configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # TailwindCSS configuration
└── vite.config.ts        # Vite configuration
```



## 🌟 Features In Detail

### GitHub API Integration
The portfolio dynamically fetches data from GitHub to display:
- **Latest repositories** with language detection
- **Repository statistics** (stars, forks, last updated)
- **Profile information** and avatar
- **Commit activity** and total contributions

### Multilingual Support
Complete internationalization with:
- **Translation files** for English and Arabic
- **RTL layout support** with logical CSS properties
- **Font optimization** for both Latin and Arabic scripts
- **Cultural adaptations** in content and layout

### Performance Optimizations
- **Code splitting** with dynamic imports
- **Image optimization** with responsive loading
- **Font preloading** for faster text rendering
- **Efficient animations** with CSS transforms
- **Bundle optimization** with Vite's tree shaking

## 📱 Browser Support

- ✅ **Chrome** (latest)
- ✅ **Firefox** (latest)
- ✅ **Safari** (latest)
- ✅ **Edge** (latest)
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. While you can view the code for educational purposes, contributions are not accepted as this represents my individual work and branding.

## 📄 License

**All Rights Reserved - Educational Use Only**

This project is the personal portfolio of Ahmed Alharthy. The code is made available for educational and learning purposes only.

**Restrictions:**
- ❌ **No Commercial Use**: This code cannot be used for commercial purposes
- ❌ **No Redistribution**: You cannot redistribute, publish, or share this code
- ❌ **No Modification**: You cannot modify, adapt, or create derivative works
- ❌ **No Personal Use**: You cannot use this code for your own portfolio or projects
- ✅ **Educational Reference Only**: You may view the code to learn and understand the implementation

**Copyright Notice:**
© 2025 Ahmed Alharthy. All rights reserved. This portfolio represents my personal brand and professional identity.

If you wish to create your own portfolio, please build it from scratch or use open-source templates specifically designed for that purpose.

## 👨‍💻 Author

**Ahmad Alharthy**
- Built with ❤️ using Node.js and React

---

**⭐ If you found this project helpful, please consider giving it a star!**
