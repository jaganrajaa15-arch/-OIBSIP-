# Web Development Internship — Project Showcase

A centralized repository containing three frontend web development projects demonstrating proficiency in **semantic HTML5**, **modern CSS3 (Flexbox & Grid)**, and **interactive JavaScript (DOM & calculation logic)**.

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Task 1: Tech G Landing Page](#-task-1-tech-g-landing-page)
3. [Task 2: Personal Profile Portfolio](#-task-2-personal-profile-portfolio)
4. [Task 3: Temperature Converter Web App](#-task-3-temperature-converter-web-app)
5. [Tech Stack Summary](#-tech-stack-summary)
6. [Folder Structure](#-folder-structure)
7. [How to Run Locally](#-how-to-run-locally)
8. [Author Details](#-author-details)

---

## 📌 Project Overview

| Task | Title | Tech Stack | Key Highlight |
|---|---|---|---|
| **Task 1** | Tech G Landing Page | HTML5, CSS3, Flexbox | Clean branding header, hero CTA, custom styling |
| **Task 2** | Profile Portfolio | HTML5, CSS3, CSS Grid | vCard sidebar layout, interactive skill badges, education timeline |
| **Task 3** | Temperature Converter | HTML5, CSS3, JavaScript | Real-time multi-unit formula conversion (Celsius, Fahrenheit, Kelvin) |

---

## 🚀 Task 1: Tech G Landing Page

A minimal corporate landing page with a hero banner, navigation bar, and introduction card.

### Key Features
- **Flexbox Navigation:** Balanced header layout with pill-shaped active navigation links.
- **Split Hero Layout:** Left-aligned intro card with header, bio, and call-to-action button, leaving right-aligned space for graphics.
- **Full Viewport Sizing:** Clean full-height hero section using background sizing and positioning.

### Technologies
- **HTML5:** Semantic `<header>`, `<nav>`, and container hierarchy.
- **CSS3:** Flexbox alignment, button border radiuses, and responsive spacing.

---

## 💼 Task 2: Personal Profile Portfolio

A modern, dark-themed personal portfolio showcasing development skills, academic milestones, and previous web projects.

### Key Features
- **Sticky Sidebar Profile:** Profile avatar, contact links (`mailto:`, `tel:`), and vector social links (GitHub, LinkedIn, Instagram).
- **Interactive Skills Grid:** Responsive CSS Grid displaying key technologies (HTML5, CSS3, JS, React, TypeScript, Git) with hover scale effects.
- **Vertical Education Timeline:** Custom CSS-drawn milestone tracker with circular badge indicators and connectors.
- **Project Showcase Gallery:** Two-column card grid with project screenshots, brief descriptions, and technology pills.

### Technologies
- **HTML5:** Semantic anchor navigation, SVG icons, and structured content sections.
- **CSS3:** Custom color variables, dark theme palette (`#1e1e1e`), CSS Grid, and hover transitions.

---

## 🌡️ Task 3: Temperature Converter Web App

An interactive client-side web utility that converts temperature values seamlessly between **Celsius**, **Fahrenheit**, and **Kelvin**.

### Key Features
- **Dynamic Multi-Unit Conversion:** Automatically updates all three temperature cards simultaneously based on the selected input scale.
- **Input Validation:** Handles blank inputs and non-numeric inputs using defensive JavaScript checks.
- **Precision Formatting:** Rounds outputs to two decimal places (`.toFixed(2)`).
- **Reset Functionality:** One-click clear button restoring default conversion state (`0 °C`, `32 °F`, `273.15 K`).
- **Responsive Card UI:** Clean card container with gradient background and mobile-friendly column stacking.

### Conversion Logic Implemented
- **Celsius to Fahrenheit:** $F = \left(C \times \frac{9}{5}\right) + 32$
- **Celsius to Kelvin:** $K = C + 273.15$
- **Fahrenheit to Celsius:** $C = (F - 32) \times \frac{5}{9}$
- **Kelvin to Celsius:** $C = K - 273.15$

---

## 🛠️ Tech Stack Summary

- **Frontend:** HTML5, CSS3 (Flexbox, CSS Grid, Transitions)
- **Scripting:** JavaScript (Vanilla ES6+, DOM manipulation, Event handling)
- **Design & Icons:** Simple Icons, SVGRepo, linear gradient accents
- **Version Control:** Git, GitHub

---

## 📁 Folder Structure

```text
├── task-1-landing-page/
│   ├── index.html
│   ├── style.css
│   └── assests/
│       └── subh.jpg
│
├── task-2-portfolio/
│   ├── index.html
│   ├── portfolio.css
│   └── assests/
│       └── subhabb.png
│
├── task-3-temperature-converter/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md