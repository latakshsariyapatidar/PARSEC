# PARSEC 5.0 Website - Complete Technical Documentation

## 🌟 Overview

PARSEC 5.0 is a modern, interactive techfest website built with cutting-edge web technologies. It features an immersive 3D particle background powered by React Three Fiber, smooth scrolling animations with GSAP, and a fully dynamic content management system using JSON files.

---

## 📋 Table of Contents

1. [Technology Stack](#technology-stack)
2. [Architecture Overview](#architecture-overview)
3. [3D Background System](#3d-background-system)
4. [Dynamic Content Management](#dynamic-content-management)
5. [Routing & Navigation](#routing--navigation)
6. [Smooth Scrolling System](#smooth-scrolling-system)
7. [Component Structure](#component-structure)
8. [Project Setup](#project-setup)
9. [Creating a Similar Project](#creating-a-similar-project)
10. [Deployment Guide](#deployment-guide)
11. [Troubleshooting](#troubleshooting)

---

## 🛠 Technology Stack

### Frontend Framework
- **React 18.2.0** - UI library
- **Vite 4.4.5** - Build tool and dev server
- **React Router DOM 6.15.0** - Client-side routing

### 3D Graphics
- **Three.js 0.157.0** - WebGL 3D library
- **@react-three/fiber 8.14.5** - React renderer for Three.js
- **@react-three/drei 9.87.0** - Useful helpers for R3F
- **@react-three/postprocessing 2.15.0** - Post-processing effects
- **r3f-points-fx 1.0.4** - Custom particle effects system

### Animations & Interactions
- **GSAP 3.12.2** - Animation library
- **@studio-freight/lenis 1.0.29** - Smooth scroll library
- **Framer Motion 11.18.1** - React animation library

### Styling
- **Tailwind CSS 3.3.6** - Utility-first CSS framework
- **PostCSS 8.4.32** - CSS processor
- **Autoprefixer 10.4.16** - CSS vendor prefixing

**Architecture**: This project uses **100% Tailwind CSS** with zero legacy CSS files. All custom styles, gradients, shadows, and utilities are defined in `tailwind.config.js` using the plugin system and theme extensions.

### Other Libraries
- **Axios 1.7.9** - HTTP client
- **Day.js 1.11.13** - Date manipulation
- **React Icons 4.12.0** - Icon library
- **PropTypes** - Runtime type checking

---

## 🏗 Architecture Overview

### High-Level Structure

```
┌─────────────────────────────────────────┐
│           App.jsx (Root)                │
│  - Sets document title                  │
│  - Renders Views component              │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         Views.jsx (Router)              │
│  - Defines all routes                   │
│  - Protected routes                     │
│  - Route configuration                  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│       Layout.jsx (Main Layout)          │
│  ┌───────────────────────────────────┐  │
│  │  Experience (3D Background)       │  │
│  │  - Fixed position                 │  │
│  │  - Z-index: -1                    │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Main Content (#main-content)     │  │
│  │  - Appbar (Navigation)            │  │
│  │  - Outlet (Page Content)          │  │
│  │  - Footer                         │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### File Structure

```
PARSEC/
├── public/                          # Static assets
│   ├── Images/
│   │   ├── Cultural/               # Cultural event images
│   │   ├── Events/                 # Technical event images
│   │   ├── sponsors/               # Sponsor logos
│   │   └── Team/                   # Team member photos
│   └── Models/                     # 3D models (if any)
│
├── src/
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   ├── index.css                   # Global styles
│   ├── Views.jsx                   # Route definitions
│   │
│   ├── Components/                 # Reusable UI components
│   │   ├── Appbar/                 # Navigation bar
│   │   │   └── Appbar.jsx
│   │   ├── Footer/                 # Footer component
│   │   │   └── Footer.jsx
│   │   ├── Countdown/              # Countdown timer
│   │   │   ├── Countdown.jsx
│   │   │   └── Countdown.css
│   │   ├── EventCard/              # Event display card
│   │   │   └── EventCard.jsx
│   │   ├── CulturalCard/           # Cultural event card
│   │   │   └── CulturalCard.jsx
│   │   ├── TeamCard/               # Team member card
│   │   │   └── TeamCard.jsx
│   │   ├── Sponcers/               # Sponsor components
│   │   │   ├── Sponcer.jsx
│   │   │   └── SponcerCard.jsx
│   │   ├── NavButton/              # Desktop nav button
│   │   │   └── NavButton.jsx
│   │   ├── NavTile/                # Mobile nav tile
│   │   │   └── NavTile.jsx
│   │   ├── ComingSoonCard/         # Coming soon placeholder
│   │   │   └── ComingSoonCard.jsx
│   │   └── AlertPage.tsx           # Alert/notification page
│   │
│   ├── Pages/                      # Page components
│   │   ├── Layout.jsx              # Main layout wrapper
│   │   ├── Home/                   # Homepage
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Events/                 # Events page
│   │   │   └── Events.jsx
│   │   ├── Cultural/               # Cultural events page
│   │   │   ├── Cultural.jsx
│   │   │   └── Cultural.css
│   │   ├── Team/                   # Team page
│   │   │   ├── Team.jsx
│   │   │   └── Team.css
│   │   ├── Schedule/               # Schedule page
│   │   │   └── Schedule.jsx
│   │   ├── Login/                  # Login page
│   │   │   └── login.jsx
│   │   └── Forms/                  # Forms page
│   │       └── Form.jsx
│   │
│   ├── Experience/                 # 3D scene components
│   │   ├── Experience.jsx          # Main 3D canvas
│   │   ├── Scene/                  # Scene management
│   │   │   ├── Scene.jsx
│   │   │   └── HomePageScene.jsx
│   │   ├── Camera/                 # Camera setup
│   │   │   └── Camera.jsx
│   │   ├── Effects/                # Post-processing
│   │   │   └── Effects.jsx
│   │   ├── StaticParticles/        # Particle system
│   │   │   ├── StaticParticlesV2.jsx
│   │   │   └── shaders/
│   │   │       ├── staticVertFunctions.glsl
│   │   │       └── staticFragFunctions.glsl
│   │   ├── MorphParticles/         # Morphing particles
│   │   │   ├── Morph.jsx
│   │   │   └── shaders/
│   │   ├── Bot/                    # 3D bot model
│   │   │   ├── Bot.jsx
│   │   │   └── HolographicMaterial.jsx
│   │
│   ├── data/                       # JSON configuration files
│   │   ├── config.json             # Main site config
│   │   ├── events.json             # Technical events
│   │   ├── cultural.json           # Cultural events
│   │   ├── team.json               # Team data
│   │   ├── eventLeads.json         # Event leads
│   │   └── navigation.json         # Navigation menu
│   │
│   ├── Helpers/                    # Utility functions
│   │   └── lenis.js                # Smooth scroll hook
│   │
│   └── middleware/                 # Route protection
│       └── ProtectedRoute.tsx
│
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── README.md                       # Basic documentation
```

---

## 🎨 3D Background System

### How It Works

The 3D background is a **fixed-position canvas** that sits behind all content, creating an immersive parallax effect as users scroll.

### Key Components

#### 1. **Experience.jsx** - Main 3D Canvas

```jsx
import { Canvas } from "@react-three/fiber"
import Scene from "./Scene/Scene"
import Camera from "./Camera/Camera"
import { Effects } from "./Effects/Effects"
import * as THREE from "three"

export default function Experience({ current }) {
  return (
    <Canvas
      className="canvas"
      gl={{
        alpha: true,                              // Transparent background
        toneMapping: THREE.ACESFilmicToneMapping, // Cinematic color grading
        outputColorSpace: THREE.SRGBColorSpace,   // Color space
      }}
      dpr={[1, 2]}  // Device pixel ratio (performance)
    >
      <Camera />                    {/* Responsive camera */}
      <Scene currentMesh={current} /> {/* Scene content */}
      <color args={["#000006"]} attach="background" /> {/* Background color */}
      <Effects />                   {/* Post-processing */}
    </Canvas>
  )
}
```

**Key Features:**
- **Transparent Canvas**: Allows HTML content to overlay
- **Tone Mapping**: ACES Filmic for cinematic look
- **Responsive DPR**: Adjusts to device pixel density
- **Dynamic Scenes**: Changes based on current page

#### 2. **Camera.jsx** - Responsive Camera System

```jsx
import { PerspectiveCamera } from "@react-three/drei"

function Camera() {
  const cameraRef = useRef()
  
  useEffect(() => {
    const resizeCamera = () => {
      if (cameraRef.current) {
        // Responsive zoom levels
        if (window.innerWidth > 768) {
          cameraRef.current.zoom = 1      // Desktop
        } else if (window.innerWidth > 448) {
          cameraRef.current.zoom = 0.8    // Tablet
        } else {
          cameraRef.current.zoom = 0.6    // Mobile
        }
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
      }
    }
    
    resizeCamera()
    window.addEventListener("resize", resizeCamera)
    return () => window.removeEventListener("resize", resizeCamera)
  }, [])
  
  return <PerspectiveCamera position={[0, 0, 6]} ref={cameraRef} makeDefault />
}
```

**Breakpoints:**
- Desktop (>768px): Full zoom
- Tablet (448-768px): 80% zoom
- Mobile (<448px): 60% zoom

#### 3. **Scene.jsx** - Scene Manager

```jsx
export default function Scene({ currentMesh }) {
  let componentToRender
  
  switch (currentMesh) {
    case "home":
      componentToRender = <HomePageScene />
      break
    default:
      componentToRender = <group />  // Empty group for other pages
      break
  }
  
  return (
    <>
      <StaticParticlesV2 />  {/* Always visible particles */}
      {componentToRender}     {/* Page-specific 3D content */}
    </>
  )
}
```

**Purpose:** Dynamically loads 3D content based on the current route.

#### 4. **StaticParticlesV2.jsx** - Particle System

This is the **star of the show** - the animated particle sphere that responds to mouse movement.

```jsx
function StaticParticlesV2() {
  // Create sphere geometry for particle distribution
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(20, 16, 16),
    new THREE.MeshStandardMaterial()
  )
  
  // Mouse tracking with smooth interpolation
  const lerp = {
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    ease: 0.08  // Smoothness factor
  }
  
  // Mouse event listener
  window.addEventListener("mousemove", (e) => {
    const factorX = -(e.clientX / size.width - 0.5) * 2
    const factorY = (e.clientY / size.height - 0.5) * 2
    lerp.target.x = factorX * 0.1
    lerp.target.y = factorY * 0.1
  })
  
  // Animation loop
  useFrame((state, delta) => {
    // Update particle shader time
    pointsRef.current.updateTime(state.clock.elapsedTime)
    
    // Auto-rotate
    localRef.current.rotation.y += delta * 0.06
    
    // Smooth mouse follow using GSAP interpolation
    lerp.current.x = GSAP.utils.interpolate(
      lerp.current.x, 
      lerp.target.x, 
      lerp.ease
    )
    
    globalRef.current.rotation.x = lerp.current.y
    globalRef.current.rotation.y = lerp.current.x
  })
  
  return (
    <group ref={globalRef} position={[0, 0, -21]}>
      <group ref={localRef}>
        <R3FPointsFX
          modelsArray={meshes}
          uniforms={{
            uColor1: new THREE.Color("#F31559"),  // Pink
            uColor2: new THREE.Color("#6528F7"),  // Purple
            uColor3: new THREE.Color("#FFB000"),  // Gold
          }}
          pointsCount={15}
          pointSize={10}
          alpha={1.0}
        />
      </group>
    </group>
  )
}
```

**Features:**
- **Sphere Distribution**: Particles arranged in sphere shape
- **Mouse Interaction**: Follows mouse with smooth easing
- **Auto-Rotation**: Continuously rotates for dynamic feel
- **Custom Colors**: Three-color gradient system
- **GLSL Shaders**: Custom vertex and fragment shaders for unique effects

#### 5. **Custom GLSL Shaders**

**Vertex Shader** (`staticVertFunctions.glsl`):
- Controls particle positions
- Handles rotation animations
- Applies random offsets for organic feel

**Fragment Shader** (`staticFragFunctions.glsl`):
- Mixes three colors based on particle position
- Creates gradient effects
- Controls particle opacity

### CSS Integration

```css
/* Experience container - Fixed background */
.experience {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;  /* Behind all content */
}

/* Canvas styling */
.canvas {
  width: 100%;
  height: 100%;
  background: transparent;
}

/* Main content overlay */
#main-content {
  position: relative;
  z-index: 1;  /* Above 3D background */
}
```

### Performance Optimization

1. **Device Pixel Ratio**: `dpr={[1, 2]}` caps at 2x for performance
2. **Responsive Zoom**: Reduces particles on smaller screens
3. **Efficient Shaders**: Optimized GLSL code
4. **Frame Rate**: Uses `useFrame` for smooth 60fps
5. **Memory Management**: Cleanup on unmount

---

## 📦 Dynamic Content Management

All website content is managed through JSON files in `src/data/`. This allows **non-technical users** to update content without touching code.

### JSON Files Overview

#### 1. **config.json** - Main Site Configuration

**Purpose**: Controls homepage content, sponsors, features, and global settings.

**Structure:**
```json
{
  "siteName": "Parsec 5.0",
  "tagline": "Annual techfest, IIT Dharwad",
  "eventDate": "2025-01-31T00:00:00",
  "eventDateDisplay": "31st Jan - 2nd Feb, 2025",
  
  "hero": {
    "title": "Parsec 5.0",
    "subtitle": "Annual techfest,",
    "institution": "IIT Dharwad",
    "dates": "31st Jan - 2nd Feb, 2025"
  },
  
  "about": {
    "intro": "Witness the collision of genius minds...",
    "description": "Parsec offers an incredible stage..."
  },
  
  "sponsors": {
    "title": {
      "name": "Title Sponsor",
      "sponsors": [
        {
          "name": "Sponsor Name",
          "logo": "/Images/sponsors/logo.jpg",
          "width": "max-w-[500px]",
          "url": "https://sponsor-website.com"
        }
      ]
    },
    "silver": { ... },
    "bronze": { ... }
  },
  
  "features": [
    {
      "title": "Experience",
      "description": "Participate in events...",
      "color": "pink",
      "bgClass": "bg-pink-600/80",
      "shadowClass": "pink-shadow"
    }
  ],
  
  "socialLinks": {
    "instagram": "https://instagram.com/parsec.iitdh",
    "linkedin": "https://linkedin.com/company/parsec-iitdh",
    "twitter": "https://twitter.com/parsec_iitdh",
    "youtube": "https://youtube.com/@parsec_iitdh"
  },
  
  "contact": {
    "email": "parsec@iitdh.ac.in",
    "phone": "+91 XXXXX XXXXX"
  }
}
```

**Used By**: `Home.jsx`, `Footer.jsx`, `Countdown.jsx`

#### 2. **events.json** - Technical Events

**Purpose**: All technical event information.

**Structure:**
```json
[
  {
    "heading": "DevHack 6.0",
    "content": "Event description with full details...",
    "image": "/Images/Events/devhack-for-site.png",
    "registrationLink": "https://unstop.com/...",
    "location": "PC IIT Dharwad",
    "timing": "31 Jan, 2:00 PM - 1 Feb, 10:00 PM"
  }
]
```

**Used By**: `Events.jsx`, `EventCard.jsx`

#### 3. **cultural.json** - Cultural Events

**Purpose**: Cultural event details with custom styling.

**Structure:**
```json
{
  "events": [
    {
      "id": 1,
      "name": "ZABAAN SAMBHALKE",
      "date": "01",
      "month": "FEB",
      "location": "F-600, CLT, IIT-Dh",
      "timing": "5:00 PM Onwards",
      "image": "/Images/Cultural/standup-for-site.png",
      "registrationLink": "https://forms.gle/...",
      "buttonText": "Reserve your Seat!",
      "borderColor": "border-yellow-500",
      "textColor": "text-yellow-500",
      "gradientFrom": "from-yellow-500",
      "gradientTo": "to-orange-400",
      "times": [
        {
          "event": "Food Court",
          "time": "2:00 PM Onwards"
        }
      ]
    }
  ],
  "note": {
    "visible": false,
    "text": "The above booking methods..."
  }
}
```

**Used By**: `Cultural.jsx`, `CulturalCard.jsx`

#### 4. **team.json** - Core Team Data

**Purpose**: Team member information with social links.

**Structure:**
```json
[
  {
    "name": "Overall Coordinator",
    "members": [
      {
        "name": "Anvay Jaykar",
        "email": "220010023@iitdh.ac.in",
        "linkedin": "https://linkedin.com/in/...",
        "instagram": "aiden_tempest",
        "image": "https://drive.google.com/thumbnail?id=...",
        "phone": "+91 75585 80646"
      }
    ]
  }
]
```

**Used By**: `Team.jsx`, `TeamCard.jsx`

#### 5. **eventLeads.json** - Event-Specific Leads

Same structure as `team.json`, but for event coordinators.

**Used By**: `Team.jsx`, `TeamCard.jsx`

#### 6. **navigation.json** - Navigation Menu

**Purpose**: Configure navigation menu items.

**Structure:**
```json
{
  "navigation": [
    {
      "id": "home",
      "label": "Home",
      "path": "/home"
    },
    {
      "id": "events",
      "label": "Events",
      "path": "/events"
    }
  ],
  "mobileCulturalLabel": "Cultural Events"
}
```

**Used By**: `Appbar.jsx`, `NavButton.jsx`, `NavTile.jsx`

### How Components Use JSON Data

**Example: Home.jsx**

```jsx
import config from "../../data/config.json"

function Home() {
  const { hero, about, sponsors, features, eventDate } = config
  
  return (
    <>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <Countdown eventDate={eventDate} />
      
      {features.map((feature, index) => (
        <div key={index} className={feature.bgClass}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
      
      {Object.entries(sponsors).map(([tier, data]) => (
        <Sponcer title={data.name}>
          {data.sponsors.map((sponsor, idx) => (
            <SponcerCard
              key={idx}
              imageUrl={sponsor.logo}
              width={sponsor.width}
            />
          ))}
        </Sponcer>
      ))}
    </>
  )
}
```

### Benefits of This System

1. ✅ **Zero Code Knowledge Required** - Edit JSON, refresh browser
2. ✅ **Instant Updates** - No rebuild needed for JSON changes
3. ✅ **Type Safety** - PropTypes catch errors early
4. ✅ **Centralized Data** - Single source of truth
5. ✅ **Version Control Friendly** - Easy to track changes
6. ✅ **Scalable** - Add new sections without touching code
7. ✅ **Maintainable** - Clear separation of data and presentation

---

## 🧭 Routing & Navigation

### Route Structure

**Defined in**: `Views.jsx`

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="home" element={<Home />} />
    <Route path="events" element={<Events />} />
    <Route path="schedule" element={<Schedule />} />
    <Route path="team" element={<Team />} />
    <Route path="cultural" element={<Cultural />} />
    <Route path="login" element={<LoginSignupPage />} />
    <Route path="forms" element={<FormPage />} />
    <Route 
      path="alert" 
      element={
        <ProtectedRoute>
          <AlertPage />
        </ProtectedRoute>
      } 
    />
  </Route>
  <Route index element={<Navigate to="/home" replace />} />
</Routes>
```

### Layout System

**Layout.jsx** acts as a wrapper for all pages:

```jsx
function Layout() {
  const location = useLocation()
  const route = getRouteName()  // Extract current route
  
  useLenis(route)  // Initialize smooth scroll
  
  return (
    <>
      {/* Fixed 3D Background */}
      <div className="experience">
        <Experience current={route} />
      </div>
      
      {/* Scrollable Content */}
      <div id="main-content">
        <Appbar current={route} />
        <Outlet />  {/* Page content renders here */}
        <Footer />
      </div>
    </>
  )
}
```

### Protected Routes

**ProtectedRoute.tsx** - Authentication guard:

```tsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth()  // Your auth logic
  
  return isAuthenticated ? children : <Navigate to="/login" />
}
```

### Navigation Component

**Appbar.jsx** reads from `navigation.json`:

```jsx
import navData from "../../data/navigation.json"

function Appbar({ current }) {
  const { navigation } = navData
  
  return (
    <nav>
      {/* Desktop Navigation */}
      {navigation.map((item) => (
        <Link key={item.id} to={item.path}>
          <NavButton 
            content={item.label} 
            isActive={current === item.id} 
          />
        </Link>
      ))}
      
      {/* Mobile Navigation */}
      {navigation.map((item) => (
        <Link key={item.id} to={item.path}>
          <NavTile 
            content={item.label} 
            isActive={current === item.id} 
          />
        </Link>
      ))}
    </nav>
  )
}
```

---

## 🌊 Smooth Scrolling System

### Lenis Implementation

**File**: `src/Helpers/lenis.js`

```javascript
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const useLenis = (route) => {
  gsap.registerPlugin(ScrollTrigger)
  
  useLayoutEffect(() => {
    const scrollEl = document.querySelector("#main")
    if (!scrollEl || !route) return
    
    // Different scroll behavior per page
    const behavior = route === "home" ? "auto" : "smooth"
    window.scrollTo({ top: 0, left: 0, behavior })
    
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      wrapper: scrollEl,          // Scroll container
      wheelMultiplier: 0.5,       // Scroll speed (desktop)
      touchMultiplier: 1,         // Scroll speed (mobile)
    })
    
    // Sync with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)
    
    // Integrate with GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)  // Prevent lag compensation
    
    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [route])
}
```

### GSAP ScrollTrigger Animations

**Example from Appbar.jsx** - Progress bar:

```jsx
useEffect(() => {
  const scrollContainer = document.getElementById("main-content")
  const progressTimeLine = GSAP.timeline({
    scrollTrigger: {
      trigger: scrollContainer,
      scroller: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,  // Smooth scrubbing
    },
  })
  
  progressTimeLine.from(scrollProgress.current, {
    scaleX: 0,  // Animates width from 0 to 100%
  })
}, [current])
```

### Benefits

1. **Butter-Smooth Scrolling** - 60fps scrolling on all devices
2. **Native Feel** - Mimics iOS scroll physics
3. **GSAP Integration** - Perfect sync with animations
4. **Performance** - Uses RequestAnimationFrame
5. **Customizable** - Adjust speed multipliers

---

## 🎨 Tailwind CSS Styling System

### Pure Tailwind Architecture

This project uses **100% Tailwind CSS** with zero legacy CSS files. All styling is done through:

1. **Utility classes** in JSX components
2. **Custom utilities** in `tailwind.config.js`
3. **Theme extensions** for colors, shadows, and fonts
4. **@layer directives** in `index.css` for global styles

### Tailwind Configuration

**tailwind.config.js** - Custom theme extensions:

```javascript
export default {
  theme: {
    extend: {
      // Custom max-widths for page layouts
      maxWidth: {
        page_lg: "1600px",
        page: "1300px",
      },
      
      // Custom font families
      fontFamily: {
        hero: ["Orbitron", "Poppins", "sans-serif"],
      },
      
      // Custom shadows with glow effects
      boxShadow: {
        'pink-glow': '0 8px 24px rgba(219, 39, 119, 0.2)...',
        'yellow-glow': '0 8px 24px rgba(245, 158, 11, 0.2)...',
        'violet-glow': '0 8px 24px rgba(147, 51, 234, 0.2)...',
        'black-subtle': '0 10px 30px 5px rgba(0, 0, 0, 0.2)',
      },
      
      // Custom gradient backgrounds
      backgroundImage: {
        'gradient-orange-yellow': 'linear-gradient(to right, #ff6600, #ffcc00)',
        'gradient-purple-blue': 'linear-gradient(135deg, #6a11cb, #2575fc)',
        'gradient-orange-pink': 'linear-gradient(to right, #ff6a00, #ee0979)',
      },
      
      // Custom breakpoints
      screens: {
        'custom-width': '910px',
      },
    },
  },
  plugins: [
    // Custom utility classes
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'linear-gradient(to right, #ff6600, #ffcc00)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.gradient-text-orange-pink': {
          background: 'linear-gradient(to right, #ff6a00, #ee0979)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
```

### Global Styles with Tailwind Layers

**index.css** - Organized with `@layer` directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base layer - resets and element defaults */
@layer base {
  * {
    @apply m-0 p-0;
  }

  :root {
    --primary-color: #2390f7;
    --default-dark: 240 4% 46%;
  }

  ::-webkit-scrollbar {
    @apply w-2;
  }

  ::-webkit-scrollbar-track {
    @apply bg-black;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-[#4a4a4a] rounded-[10px] border-2 border-black;
  }

  body {
    @apply text-white bg-[#000006] font-['Open_Sans',sans-serif];
  }
}

/* Component layer - reusable patterns */
@layer components {
  .experience {
    @apply fixed w-full h-screen top-0 left-0;
  }

  .event-block {
    @apply rounded-tl-xl rounded-bl-xl;
  }

  .footer a {
    @apply text-purple-500 transition-all duration-500;
  }
}
```

### Common Tailwind Patterns

#### 1. **Gradient Text**

```jsx
<span className="gradient-text">
  IIT Dharwad
</span>

<span className="gradient-text-orange-pink font-bold">
  PARSEC 6.0
</span>
```

#### 2. **Glow Shadows**

```jsx
<div className="shadow-pink-glow rounded-lg p-4">
  Pink glow card
</div>

<div className="shadow-violet-glow bg-violet-600/80">
  Violet glow box
</div>
```

#### 3. **Responsive Breakpoints**

```jsx
<div className="
  text-2xl          /* Base: mobile */
  sm:text-3xl       /* 640px+ */
  md:text-4xl       /* 768px+ */
  custom-width:text-5xl  /* 910px+ custom */
  lg:text-6xl       /* 1024px+ */
">
  Responsive heading
</div>
```

#### 4. **Background Gradients**

```jsx
<div className="bg-gradient-purple-blue p-8 rounded-lg">
  Purple to blue gradient
</div>

<button className="bg-gradient-to-br from-pink-500 to-orange-400">
  Gradient button
</button>
```

#### 5. **Arbitrary Values**

```jsx
{/* Custom colors */}
<div className="bg-[#000006] text-[#ff6a00]">

{/* Custom sizing */}
<div className="w-[calc(100%-48px)] max-w-[1100px]">

{/* Custom shadows */}
<div className="[text-shadow:0_0_10px_rgba(255,106,0,0.5)]">
```

### Styling Best Practices

1. **Use Tailwind Layers**
   - `@layer base` for resets and element defaults
   - `@layer components` for reusable component classes
   - `@layer utilities` for custom utility classes

2. **Prefer Utility Classes**
   ```jsx
   // ✅ Good - Utility classes
   <div className="flex items-center justify-between p-4 rounded-lg">
   
   // ❌ Avoid - Inline styles
   <div style={{ display: 'flex', padding: '1rem' }}>
   ```

3. **Extract Repeating Patterns to Config**
   ```javascript
   // Add to tailwind.config.js instead of repeating
   boxShadow: {
     'glow-pink': '...',
   }
   
   // Use: className="shadow-glow-pink"
   ```

4. **Use Arbitrary Values for One-offs**
   ```jsx
   <div className="bg-[rgba(26,26,46,0.8)]">
   ```

5. **Responsive Design First**
   ```jsx
   // Mobile-first approach
   <div className="
     text-sm              /* Mobile */
     md:text-base         /* Tablet */
     lg:text-lg           /* Desktop */
   ">
   ```

### Migration from Legacy CSS

All legacy CSS has been converted to Tailwind:

| Legacy File | Converted To |
|------------|--------------|
| `Home.css` | Utility classes + `tailwind.config.js` |
| `Team.css` | Utility classes in components |
| `Cultural.css` | Already using Tailwind utilities |
| `Countdown.css` | Utility classes + custom gradients |
| `index.css` | `@layer` directives + minimal globals |

**Benefits of This Migration:**

✅ **Zero CSS Files** - All styling in components or config  
✅ **Type Safety** - IntelliSense for all classes  
✅ **Tree Shaking** - Unused styles automatically removed  
✅ **Consistency** - Design system enforced through config  
✅ **Maintainability** - No CSS specificity wars  
✅ **Performance** - Minimal CSS bundle size  
✅ **Developer Experience** - Fast iteration with utilities  

---

## 🧩 Component Structure

### Component Types

#### 1. **Page Components** (`src/Pages/`)
- Full-page views
- Data fetching from JSON
- Layout composition
- Examples: `Home.jsx`, `Events.jsx`, `Team.jsx`

#### 2. **UI Components** (`src/Components/`)
- Reusable elements
- PropTypes validation
- Styled with Tailwind
- Examples: `EventCard.jsx`, `TeamCard.jsx`, `NavButton.jsx`

#### 3. **3D Components** (`src/Experience/`)
- React Three Fiber components
- WebGL/Three.js logic
- Shader management
- Examples: `StaticParticlesV2.jsx`, `Camera.jsx`

#### 4. **Layout Components**
- Structural wrappers
- Routing logic
- Global state
- Examples: `Layout.jsx`, `Appbar.jsx`, `Footer.jsx`

### PropTypes Implementation

All components use PropTypes for type checking:

```jsx
import PropTypes from "prop-types"

function EventCard({ data, flipLayout }) {
  return (...)
}

EventCard.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    registrationLink: PropTypes.string.isRequired,
    location: PropTypes.string,
    timing: PropTypes.string,
  }).isRequired,
  flipLayout: PropTypes.bool
}

export default EventCard
```

### Component Communication

```
App.jsx
  └─> Views.jsx
       └─> Layout.jsx
            ├─> Experience.jsx (receives `current` prop)
            ├─> Appbar.jsx (receives `current` prop)
            ├─> Outlet (renders page)
            │    └─> Home.jsx (reads config.json)
            │         ├─> Countdown.jsx (receives eventDate)
            │         ├─> Sponcer.jsx (receives title)
            │         │    └─> SponcerCard.jsx (receives imageUrl)
            │         └─> Feature Cards (mapped from JSON)
            └─> Footer.jsx (reads config.json)
```

---

## 🚀 Project Setup

### Prerequisites

- **Node.js**: v16 or higher
- **npm**: v7 or higher
- **Git**: For version control

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/dev-aayushvats/Parsec2025Website.git
cd Parsec2025Website

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

### Environment Setup

No environment variables needed! All configuration is in JSON files.

### Development Server

- **URL**: `http://localhost:5173`
- **Hot Module Replacement**: Enabled
- **Auto-reload**: On file changes

---

## 🎯 Creating a Similar Project

### Step 1: Initialize Vite + React

```bash
npm create vite@latest my-project -- --template react
cd my-project
npm install
```

### Step 2: Install Core Dependencies

```bash
# React Router
npm install react-router-dom

# Three.js & React Three Fiber
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing

# Animations
npm install gsap @studio-freight/lenis framer-motion

# Styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Utilities
npm install axios dayjs react-icons
npm install prop-types

# Particle effects
npm install r3f-points-fx
```

### Step 3: Configure Tailwind

**tailwind.config.js**:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["YourFont", "sans-serif"],
      },
      maxWidth: {
        page_lg: "1400px",
      },
    },
  },
  plugins: [],
}
```

### Step 4: Set Up Project Structure

```bash
mkdir -p src/{Pages,Components,Experience,data,Helpers,middleware}
mkdir -p src/Experience/{Scene,Camera,Effects,StaticParticles,Bot}
mkdir -p src/Components/{Appbar,Footer,EventCard,TeamCard,NavButton}
mkdir -p public/Images/{Events,Cultural,sponsors,Team}
```

### Step 5: Create 3D Background

**1. Experience.jsx**:
```jsx
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

export default function Experience() {
  return (
    <Canvas
      gl={{
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]}
    >
      <color args={["#000006"]} attach="background" />
      {/* Add your 3D content here */}
    </Canvas>
  )
}
```

**2. CSS for fixed background**:
```css
.experience {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

#main-content {
  position: relative;
  z-index: 1;
}
```

### Step 6: Set Up Routing

**Views.jsx**:
```jsx
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home/Home"

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        {/* Add more routes */}
      </Route>
      <Route index element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default Views
```

**Layout.jsx**:
```jsx
import { Outlet, useLocation } from "react-router-dom"
import Experience from "../Experience/Experience"
import Appbar from "../Components/Appbar/Appbar"

function Layout() {
  const location = useLocation()
  const getRouteName = () => {
    const pathname = location.pathname
    return pathname.split("/").pop()
  }
  
  return (
    <>
      <div className="experience">
        <Experience current={getRouteName()} />
      </div>
      <div id="main-content">
        <Appbar current={getRouteName()} />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
```

### Step 7: Add Smooth Scrolling

**lenis.js**:
```javascript
import Lenis from "@studio-freight/lenis"
import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const useLenis = (route) => {
  gsap.registerPlugin(ScrollTrigger)
  
  useLayoutEffect(() => {
    const scrollEl = document.querySelector("#main-content")
    if (!scrollEl) return
    
    const lenis = new Lenis({
      wrapper: scrollEl,
      wheelMultiplier: 0.5,
    })
    
    lenis.on("scroll", ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    
    return () => lenis.destroy()
  }, [route])
}

export default useLenis
```

### Step 8: Create JSON Data Structure

**src/data/config.json**:
```json
{
  "siteName": "My Event",
  "eventDate": "2025-12-31T00:00:00",
  "hero": {
    "title": "Event Name",
    "subtitle": "Tagline",
    "dates": "Event Dates"
  }
}
```

### Step 9: Build Dynamic Components

**Home.jsx**:
```jsx
import config from "../../data/config.json"

function Home() {
  const { hero, eventDate } = config
  
  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <p>{hero.dates}</p>
    </div>
  )
}

export default Home
```

### Step 10: Add PropTypes

```jsx
import PropTypes from "prop-types"

function MyComponent({ title, data }) {
  return <div>{title}</div>
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object
}

export default MyComponent
```

### Copilot Command Template

When starting a new project, give Copilot this command:

```
Create a React + Vite website with:
1. Fixed 3D background using React Three Fiber with particle effects
2. Smooth scrolling using Lenis
3. React Router for navigation
4. 100% Tailwind CSS for styling (NO legacy CSS files)
5. JSON-based content management for events, team, sponsors
6. Responsive design (desktop, tablet, mobile)
7. GSAP animations with ScrollTrigger
8. PropTypes validation for all components
9. Layout component with Appbar, Footer, and Outlet
10. Dynamic routing based on current page

Styling Requirements:
- Use ONLY Tailwind utility classes (no separate CSS files)
- Define custom gradients, shadows, and utilities in tailwind.config.js
- Use @layer directives in index.css for global styles
- Implement gradient-text utility for colored text
- Add custom box-shadow utilities for glow effects
- Create responsive breakpoints for all screen sizes

Project structure:
- src/Experience/ for 3D components
- src/Pages/ for page components
- src/Components/ for reusable UI
- src/data/ for JSON configuration
- Fixed 3D canvas behind scrollable content
- Navigation that highlights current page
- Countdown timer component
- Event cards, team cards, sponsor cards
- Mobile-responsive navigation

Follow the PARSEC 5.0 architecture with:
- Experience.jsx as main Canvas
- Scene.jsx for 3D content switching
- Camera.jsx with responsive zoom
- StaticParticles with mouse interaction
- Layout.jsx wrapping all pages
- useLenis hook for smooth scroll
- JSON imports for dynamic content
- All components styled with Tailwind classes only
- Custom utilities in tailwind.config.js plugins
```

---

## 📱 Responsive Design

### Breakpoints

```javascript
// Tailwind breakpoints
sm: '640px'   // Small devices
md: '768px'   // Medium devices (tablets)
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large
2xl: '1536px' // 2X Extra large

// Custom breakpoint in Home.css
custom-width: '880px'
```

### Responsive Strategies

1. **3D Camera Zoom**:
   - Desktop: 100% zoom
   - Tablet: 80% zoom
   - Mobile: 60% zoom

2. **Layout Changes**:
   - Desktop: Horizontal navigation, side-by-side content
   - Mobile: Hamburger menu, stacked content

3. **Font Sizes**:
   - Use Tailwind responsive classes: `text-4xl md:text-5xl lg:text-6xl`

4. **Particle Count**:
   - Reduced on smaller screens for performance

---

## 🚢 Deployment Guide

### Build Process

```bash
# 1. Build for production
npm run build

# Output folder: dist/
# - index.html
# - assets/ (minified JS, CSS)
# - Images/ (public folder contents)
```

### Deployment Platforms

#### **Vercel** (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**vercel.json**:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

#### **Netlify**

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### **GitHub Pages**

**vite.config.js**:
```javascript
export default {
  base: '/your-repo-name/',
}
```

```bash
npm run build
npm run deploy  # If using gh-pages package
```

### Environment Considerations

- **Base URL**: Configure in `vite.config.js` if not at root
- **Image Paths**: Use `/Images/` (absolute from public)
- **API URLs**: Use environment variables for backend URLs

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **3D Background Not Showing**

**Problem**: Canvas is blank or not rendering.

**Solutions**:
```javascript
// Check z-index
.experience {
  z-index: -1 !important;
}

// Ensure Canvas has size
.experience {
  width: 100%;
  height: 100vh;
}

// Check WebGL support
if (!window.WebGLRenderingContext) {
  console.error("WebGL not supported")
}
```

#### 2. **Smooth Scroll Not Working**

**Problem**: Lenis not initializing.

**Solutions**:
```javascript
// Ensure #main-content exists
const scrollEl = document.querySelector("#main-content")
if (!scrollEl) {
  console.error("Scroll container not found")
  return
}

// Check if route changes trigger useEffect
useLenis(route)  // Make sure route prop changes
```

#### 3. **JSON Data Not Loading**

**Problem**: Components show empty or undefined.

**Solutions**:
```javascript
// Check import path
import config from "../../data/config.json"

// Destructure safely
const { hero = {} } = config || {}

// Add fallbacks
<h1>{hero?.title || "Default Title"}</h1>
```

#### 4. **Images Not Displaying**

**Problem**: 404 on image paths.

**Solutions**:
```javascript
// Use absolute paths from public folder
"/Images/Events/event.png"  // ✅ Correct

// NOT relative paths
"../public/Images/event.png"  // ❌ Wrong
"./Images/event.png"          // ❌ Wrong

// In JSON files
{
  "image": "/Images/sponsors/logo.png"
}
```

#### 5. **Particle Colors Not Changing**

**Problem**: Shader uniforms not updating.

**Solutions**:
```javascript
// Ensure THREE.Color is used
uniforms={{
  uColor1: new THREE.Color("#F31559"),  // ✅
  uColor1: "#F31559"  // ❌ Won't work
}}

// Check shader code receives uniforms
uniform vec3 uColor1;
```

#### 6. **Build Errors**

**Problem**: Production build fails.

**Solutions**:
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Check for ESLint errors
npm run lint

# Build with verbose output
npm run build -- --mode production
```

#### 7. **PropTypes Warnings**

**Problem**: Console warnings about missing props.

**Solutions**:
```jsx
// Add all required PropTypes
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  onClick: PropTypes.func
}

// Or set defaults
MyComponent.defaultProps = {
  data: {},
  onClick: () => {}
}
```

### Performance Optimization

```javascript
// 1. Reduce particle count on mobile
const pointsCount = window.innerWidth > 768 ? 20 : 10

// 2. Use React.memo for expensive components
export default React.memo(ExpensiveComponent)

// 3. Lazy load routes
const Events = lazy(() => import("./Pages/Events/Events"))

// 4. Optimize images
// Use WebP format
// Compress with ImageOptim or similar

// 5. Code splitting
// Vite does this automatically

// 6. Lighthouse audit
npm run build
npm run preview
# Open Chrome DevTools > Lighthouse > Generate Report
```

---

## 📚 Additional Resources

### Documentation Links

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Three.js**: https://threejs.org/docs
- **GSAP**: https://greensock.com/docs
- **Lenis**: https://github.com/studio-freight/lenis
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com

### Tutorials

- **R3F Basics**: https://threejs-journey.com
- **GSAP ScrollTrigger**: https://greensock.com/scrolltrigger
- **React Patterns**: https://patterns.dev

### Tools

- **JSON Validator**: https://jsonlint.com
- **Image Optimization**: https://imageoptim.com
- **Color Picker**: https://coolors.co
- **3D Models**: https://sketchfab.com

---

## 🤝 Contributing

### Development Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes
# - Edit JSON for content
# - Modify components for functionality

# 3. Test locally
npm run dev

# 4. Build test
npm run build

# 5. Commit with clear message
git commit -m "feat: Add new sponsor tier"

# 6. Push and create PR
git push origin feature/new-feature
```

### Coding Standards

1. **Use PropTypes** for all components
2. **Extract hardcoded content** to JSON
3. **Follow Tailwind** utility-first approach
4. **Keep components small** and focused
5. **Write clear comments** for complex logic
6. **Test responsive** on all breakpoints
7. **Optimize performance** before committing

---

## 📜 License

MIT License - Feel free to use for your own projects!

---

## 👥 Credits

**Developed by**: PARSEC Web Team, IIT Dharwad
- **Lead Developer**: Aayush Vats
- **Design**: Upakramanika Bishnu
- **Content**: PARSEC Core Team

**Technologies**: React, Three.js, GSAP, Tailwind CSS

---

## 📞 Support

For questions or issues:
- **Email**: parsec@iitdh.ac.in
- **Website**: https://parsec.iitdh.ac.in
- **GitHub**: https://github.com/dev-aayushvats/Parsec2025Website

---

**Last Updated**: October 17, 2025  
**Version**: 3.0 - Full Tailwind Migration  
**Status**: Production Ready ✅  
**Styling**: 100% Tailwind CSS (Zero Legacy CSS)

