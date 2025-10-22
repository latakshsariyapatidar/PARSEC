# PARSEC 5.0 Website

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.157.0-000000?logo=three.js)](https://threejs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

Annual techfest website for IIT Dharwad featuring an immersive 3D particle background and fully dynamic JSON-based content management.

## ✨ Features

- 🎨 **Interactive 3D Background** - React Three Fiber particle system with mouse tracking
- 🌊 **Butter-Smooth Scrolling** - Lenis smooth scroll with GSAP animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎯 **Dynamic Content** - All content managed through JSON files
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🔒 **Type Safe** - PropTypes validation throughout
- 🎭 **Modern UI** - Tailwind CSS with custom animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
PARSEC/
├── src/
│   ├── Experience/          # 3D scene components (React Three Fiber)
│   │   ├── Experience.jsx   # Main Canvas
│   │   ├── Scene/           # Scene management
│   │   ├── Camera/          # Responsive camera
│   │   ├── StaticParticles/ # Particle system with shaders
│   │   └── Effects/         # Post-processing effects
│   ├── Pages/               # Page components
│   │   ├── Home/            # Homepage
│   │   ├── Events/          # Events page
│   │   ├── Cultural/        # Cultural events
│   │   ├── Team/            # Team page
│   │   └── Schedule/        # Schedule page
│   ├── Components/          # Reusable UI components
│   │   ├── Appbar/          # Navigation
│   │   ├── EventCard/       # Event display
│   │   ├── TeamCard/        # Team member cards
│   │   └── Countdown/       # Event countdown timer
│   ├── data/                # JSON configuration files
│   │   ├── config.json      # Main site config
│   │   ├── events.json      # Technical events
│   │   ├── cultural.json    # Cultural events
│   │   ├── team.json        # Team data
│   │   ├── eventLeads.json  # Event coordinators
│   │   └── navigation.json  # Navigation menu
│   └── Helpers/             # Utility functions
│       └── lenis.js         # Smooth scroll hook
└── public/
    └── Images/              # Static assets
```

## 🎨 How the 3D Background Works

### Architecture

The 3D background is a **fixed-position canvas** that renders behind all content:

```jsx
// Layout.jsx
<>
  {/* Fixed 3D Background */}
  <div className="experience">
    <Experience current={route} />
  </div>
  
  {/* Scrollable Content */}
  <div id="main-content">
    <Appbar />
    <Outlet />  {/* Pages render here */}
    <Footer />
  </div>
</>
```

### Key Components

1. **Experience.jsx** - Main Canvas with Three.js setup
2. **Camera.jsx** - Responsive camera with adaptive zoom
3. **Scene.jsx** - Manages 3D content based on current route
4. **StaticParticlesV2.jsx** - Particle sphere with:
   - Mouse-tracking parallax effect
   - Auto-rotation animation
   - Custom GLSL shaders
   - Three-color gradient system

### CSS Magic

```css
.experience {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;  /* Behind content */
}

#main-content {
  position: relative;
  z-index: 1;  /* Above 3D */
}
```

## 📦 Dynamic Content Management

All content is managed through JSON files - **no code editing required**!

### Configuration Files

| File | Purpose | Used By |
|------|---------|---------|
| `config.json` | Main site config, sponsors, features | `Home.jsx`, `Footer.jsx` |
| `events.json` | Technical events | `Events.jsx` |
| `cultural.json` | Cultural events with custom styling | `Cultural.jsx` |
| `team.json` | Core team members | `Team.jsx` |
| `eventLeads.json` | Event coordinators | `Team.jsx` |
| `navigation.json` | Navigation menu items | `Appbar.jsx` |

### Example: Update Event Date

**Before** (hardcoded):
```jsx
<div>31st Jan - 2nd Feb, 2025</div>
```

**After** (dynamic):
```jsx
// In Home.jsx
import config from "../../data/config.json"
<div>{config.hero.dates}</div>

// In config.json
{
  "hero": {
    "dates": "31st Jan - 2nd Feb, 2025"
  }
}
```

Just edit the JSON and refresh! 🎉

## 🌊 Smooth Scrolling

Powered by **Lenis** + **GSAP ScrollTrigger**:

```javascript
// useLenis hook
const lenis = new Lenis({
  wrapper: scrollEl,
  wheelMultiplier: 0.5,  // Adjust scroll speed
  touchMultiplier: 1,
})

// Sync with GSAP
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
```

Features:
- 60fps smooth scrolling
- Native iOS-like physics
- Perfect GSAP animation sync
- Customizable speed

## 🎯 Key Technologies

### 3D Graphics Stack
- **Three.js** - WebGL 3D rendering
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful R3F helpers
- **r3f-points-fx** - Custom particle effects

### Animation Stack
- **GSAP** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animations
- **Lenis** - Smooth scrolling
- **Framer Motion** - React animations

### UI Stack
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **React Icons** - Icon library
- **PropTypes** - Type checking

## 📱 Responsive Design

### Breakpoints
- **Mobile**: <640px
- **Tablet**: 640px-768px
- **Desktop**: >768px

### Adaptive Features
- Camera zoom adjusts per device
- Mobile hamburger menu
- Stacked layouts on small screens
- Touch-optimized interactions

## 🚢 Deployment

### Build

```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Platforms

**Vercel** (Recommended):
```bash
vercel --prod
```

**Netlify**:
```bash
netlify deploy --prod --dir=dist
```

**GitHub Pages**:
Update `vite.config.js` with `base: '/repo-name/'`

## 📚 Documentation

For comprehensive documentation, see:

- **[COMPREHENSIVE_README.md](./COMPREHENSIVE_README.md)** - Full technical documentation
- **[DYNAMIC_CONTENT_GUIDE.md](./DYNAMIC_CONTENT_GUIDE.md)** - Content management guide

## 🔧 Creating a Similar Project

Want to build something similar? Give Copilot this command:

```
Create a React + Vite website with:
1. Fixed 3D background using React Three Fiber with particle effects
2. Smooth scrolling using Lenis
3. React Router for navigation
4. Tailwind CSS for styling
5. JSON-based content management
6. GSAP animations with ScrollTrigger
7. Responsive design (desktop, tablet, mobile)
8. PropTypes validation

Follow the PARSEC 5.0 architecture with Experience.jsx as main Canvas,
Scene.jsx for 3D content, Layout.jsx wrapping all pages,
and useLenis hook for smooth scroll. Use JSON imports for dynamic content.
```

See [COMPREHENSIVE_README.md](./COMPREHENSIVE_README.md) for detailed setup guide.

## 🐛 Common Issues

### 3D Background Not Showing?
- Check z-index: `.experience { z-index: -1 }`
- Verify WebGL support in browser
- Ensure Canvas has width/height

### Smooth Scroll Not Working?
- Verify `#main-content` element exists
- Check Lenis initialization in console
- Ensure route prop changes trigger effect

### JSON Data Not Loading?
- Validate JSON syntax at jsonlint.com
- Use correct import path
- Add fallback values

For more troubleshooting, see [COMPREHENSIVE_README.md](./COMPREHENSIVE_README.md#troubleshooting).

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Make changes (edit JSON for content, components for functionality)
4. Test: `npm run dev`
5. Build test: `npm run build`
6. Commit: `git commit -m "feat: Description"`
7. Push: `git push origin feature/new-feature`
8. Create Pull Request

## 👥 Team

**PARSEC Web Team, IIT Dharwad**

- **Lead Developer**: Aayush Vats
- **Core Team**: Jai Sharma, Vedant Kannur
- **Design**: Upakramanika Bishnu
- **Web Developer**: Saksham Chhimwal

## 📞 Contact

- **Email**: parsec@iitdh.ac.in
- **Instagram**: [@parsec.iitdh](https://instagram.com/parsec.iitdh)
- **LinkedIn**: [PARSEC IIT Dharwad](https://linkedin.com/company/parsec-iitdh)
- **Website**: [parsec.iitdh.ac.in](https://parsec.iitdh.ac.in)

## 📜 License

MIT License - Free to use for your own projects!

---

**Built with ❤️ by PARSEC Team**

*For detailed technical documentation, architecture explanations, and setup guides, see [COMPREHENSIVE_README.md](./COMPREHENSIVE_README.md)*
