# PARSEC 5.0 Website - Dynamic Content Configuration Guide

## Overview
The PARSEC 5.0 website has been refactored to use JSON files for dynamic content management. This allows easy updates to website content without modifying code.

## ✅ Completed Improvements

### 1. **Fixed ESLint Errors**
   - Added PropTypes validation to all components
   - Fixed React import warnings
   - Added missing rel="noopener noreferrer" to external links

### 2. **Centralized Configuration**
   All content is now managed through JSON files in `src/data/`:

## 📁 JSON Configuration Files

### 1. `src/data/config.json`
Controls the main website content including:
- **Hero Section**: Title, tagline, dates
- **About Section**: Introduction and description text
- **Sponsors**: All sponsor tiers with logos and details
- **Features**: "What you get" section cards
- **Event Date**: Countdown timer date
- **Social Links**: Instagram, LinkedIn, Twitter, YouTube
- **Contact Information**: Email and phone

#### Example Structure:
```json
{
  "siteName": "Parsec 5.0",
  "eventDate": "2025-01-31T00:00:00",
  "hero": {
    "title": "Parsec 5.0",
    "subtitle": "Annual techfest,",
    "institution": "IIT Dharwad",
    "dates": "31st Jan - 2nd Feb, 2025"
  },
  "sponsors": {
    "title": {
      "name": "Title Sponsor",
      "sponsors": [...]
    }
  }
}
```

### 2. `src/data/cultural.json`
Manages cultural events:
- Event name, date, month
- Location and timing
- Registration links
- Image paths
- Color themes (borders, gradients, text colors)
- Multiple time slots per event

#### Example Structure:
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
      "textColor": "text-yellow-500"
    }
  ]
}
```

### 3. `src/data/events.json`
Technical events data:
- Event heading and description
- Images and registration links
- Location and timing
- All event details in one place

#### Example Structure:
```json
[
  {
    "heading": "DevHack 6.0",
    "content": "An exhilarating 36-hour hackathon...",
    "image": "/Images/Events/devhack-for-site.png",
    "registrationLink": "https://unstop.com/...",
    "location": "PC IIT Dharwad",
    "timing": "31 Jan, 2:00 PM - 1 Feb, 10:00 PM"
  }
]
```

### 4. `src/data/team.json`
Core team information:
- Team categories (Overall Coordinator, Core Team, etc.)
- Member details: name, email, social links, images, phone

#### Example Structure:
```json
[
  {
    "name": "Overall Coordinator",
    "members": [
      {
        "name": "Anvay Jaykar",
        "email": "220010023@iitdh.ac.in",
        "linkedin": "https://linkedin.com/...",
        "instagram": "aiden_tempest",
        "image": "https://drive.google.com/...",
        "phone": "+91 75585 80646"
      }
    ]
  }
]
```

### 5. `src/data/eventLeads.json`
Event-specific team leads with the same structure as team.json

### 6. `src/data/navigation.json`
Navigation menu configuration:
- Menu items with IDs, labels, and paths
- Mobile-specific labels where needed

#### Example Structure:
```json
{
  "navigation": [
    {
      "id": "home",
      "label": "Home",
      "path": "/home"
    }
  ],
  "mobileCulturalLabel": "Cultural Events"
}
```

## 🔧 How to Update Content

### Updating Hero Section
Edit `src/data/config.json`:
```json
{
  "hero": {
    "title": "Parsec 6.0",  // Change version
    "dates": "1st Feb - 3rd Feb, 2026"  // Update dates
  }
}
```

### Adding a New Sponsor
Edit `src/data/config.json` in the sponsors section:
```json
{
  "sponsors": {
    "gold": {
      "name": "Gold Sponsors",
      "sponsors": [
        {
          "name": "New Sponsor",
          "logo": "/Images/sponsors/new-sponsor.png",
          "width": "max-w-[300px]",
          "url": "https://sponsor-website.com"
        }
      ]
    }
  }
}
```

### Adding a New Event
Edit `src/data/events.json`:
```json
[
  {
    "heading": "New Event Name",
    "content": "Event description...",
    "image": "/Images/Events/new-event.png",
    "registrationLink": "https://registration-link.com",
    "location": "Event Location",
    "timing": "Event Timing"
  }
]
```

### Adding a Cultural Event
Edit `src/data/cultural.json`:
```json
{
  "events": [
    {
      "id": 3,
      "name": "NEW CULTURAL EVENT",
      "date": "03",
      "month": "FEB",
      "location": "Venue",
      "image": "/Images/Cultural/new-event.png",
      "registrationLink": "https://forms.gle/...",
      "buttonText": "Register Now!",
      "borderColor": "border-blue-500",
      "textColor": "text-blue-500",
      "gradientFrom": "from-blue-500",
      "gradientTo": "to-cyan-400",
      "times": [
        {
          "event": "Sub Event 1",
          "time": "2:00 PM"
        }
      ]
    }
  ]
}
```

### Updating Team Members
Edit `src/data/team.json` or `src/data/eventLeads.json`:
```json
[
  {
    "name": "New Team Category",
    "members": [
      {
        "name": "New Member",
        "email": "member@iitdh.ac.in",
        "linkedin": "https://linkedin.com/in/member",
        "instagram": "username",
        "image": "https://drive.google.com/thumbnail?id=...",
        "phone": "+91 XXXXX XXXXX"
      }
    ]
  }
]
```

### Changing Navigation Menu
Edit `src/data/navigation.json`:
```json
{
  "navigation": [
    {
      "id": "new-page",
      "label": "New Page",
      "path": "/new-page"
    }
  ]
}
```

## 🎨 Customizing Styles

### Cultural Event Colors
Available Tailwind color classes you can use in `cultural.json`:
- **Border**: `border-yellow-500`, `border-blue-500`, `border-purple-500`, etc.
- **Text**: `text-yellow-500`, `text-blue-500`, `text-purple-500`, etc.
- **Gradients**: 
  - From: `from-yellow-500`, `from-blue-500`, etc.
  - To: `to-orange-400`, `to-cyan-400`, etc.

### Feature Card Colors
In `config.json` features array:
```json
{
  "color": "pink",
  "bgClass": "bg-pink-600/80",
  "shadowClass": "pink-shadow"
}
```

## 📝 Component Updates

### Updated Components with PropTypes:
1. ✅ `Experience.jsx` - Added PropTypes validation
2. ✅ `Home.jsx` - Now reads from config.json
3. ✅ `Cultural.jsx` - Now reads from cultural.json
4. ✅ `Events.jsx` - Now reads from events.json
5. ✅ `Team.jsx` - Now reads from team.json and eventLeads.json
6. ✅ `Appbar.jsx` - Now reads from navigation.json
7. ✅ `NavButton.jsx` - Added PropTypes
8. ✅ `NavTile.jsx` - Added PropTypes
9. ✅ `EventCard.jsx` - Added PropTypes
10. ✅ `Sponcer.jsx` - Added PropTypes
11. ✅ `SponcerCard.jsx` - Added PropTypes
12. ✅ `TeamCard.jsx` - Added PropTypes
13. ✅ `Countdown.jsx` - Added PropTypes

## ⚠️ Important Notes

### Image Paths
- All image paths in JSON should start with `/` (e.g., `/Images/Events/event.png`)
- Images are served from the `public` folder
- For Google Drive images, use the thumbnail URL format

### External Links
- Always include full URLs with `https://`
- Registration links should be complete and tested

### Date Format
- Event countdown date: `YYYY-MM-DDTHH:mm:ss`
- Display dates: Use any human-readable format

### Phone Numbers
- Format: `+91 XXXXX XXXXX`
- Will be used in tel: links automatically

## 🚀 Testing Changes

After updating JSON files:
1. Save the file
2. Refresh the browser (no rebuild needed for JSON changes)
3. Verify all content displays correctly
4. Test all links and buttons

## 🔍 Troubleshooting

### Content Not Updating?
- Clear browser cache
- Check JSON syntax (use a JSON validator)
- Ensure file is saved in the correct location
- Check browser console for errors

### Broken Images?
- Verify image path starts with `/`
- Check if image file exists in public folder
- For external images, verify URL is accessible

### Links Not Working?
- Ensure full URL including `https://`
- Test link in new browser tab first
- Check for typos in URL

## 📚 File Structure Summary

```
src/
  data/
    ├── config.json          # Main site configuration
    ├── cultural.json        # Cultural events
    ├── events.json          # Technical events
    ├── team.json           # Core team data
    ├── eventLeads.json     # Event leads data
    └── navigation.json     # Navigation menu
  Pages/
    ├── Home/Home.jsx       # Uses config.json
    ├── Cultural/Cultural.jsx # Uses cultural.json
    ├── Events/Events.jsx   # Uses events.json
    └── Team/Team.jsx       # Uses team.json & eventLeads.json
  Components/
    └── Appbar/Appbar.jsx   # Uses navigation.json
```

## 🎯 Benefits of This Refactor

1. ✅ **Easy Content Updates** - No code knowledge needed
2. ✅ **Centralized Data** - All content in one place
3. ✅ **Type Safety** - PropTypes validation prevents errors
4. ✅ **Maintainability** - Clear separation of data and UI
5. ✅ **Scalability** - Easy to add new sections
6. ✅ **No Rebuild Required** - JSON changes are instant
7. ✅ **Error-Free** - Fixed all ESLint warnings

## 💡 Best Practices

1. **Always validate JSON** before saving (use jsonlint.com)
2. **Keep backup** of working JSON files
3. **Test locally** before pushing to production
4. **Use consistent formatting** in JSON files
5. **Document custom changes** you make
6. **Update this README** if you add new JSON files

## 🆘 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Validate JSON syntax
3. Review this documentation
4. Check component PropTypes for required fields

---

**Last Updated**: October 17, 2025
**Version**: 2.0
**Maintained by**: PARSEC Web Team
