# Elevra — React/Vite Component-Based Website

This is a component-based rebuild of the supplied Elevra design and content. The original material specifies a multi-page structure — Home, Courses, About Kanika, Results, Free Demo, Guide Book and Contact — plus shared brand/navigation elements. fileciteturn3file8L1-L3

## Architecture

```text
src/
├── components/
│   ├── Layout.jsx       # Navbar, Footer, Logo, Button
│   └── Sections.jsx     # Hero, Features, Quiz, Journey, Pricing, FAQ, etc.
├── data/
│   └── siteData.js      # Reusable content arrays
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── Results.jsx
│   ├── Demo.jsx
│   ├── About.jsx
│   ├── Guide.jsx
│   └── Contact.jsx
├── main.jsx
└── styles.css
```

## Routes
- `/` Home
- `/courses` Courses & Plans
- `/results` Student Results
- `/demo` Free Demo
- `/about` About Kanika
- `/guide` Guide Book
- `/contact` Contact

## Run
```bash
npm install
npm run dev
```
