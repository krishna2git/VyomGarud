## Getting started with landing page using React and Tailwind CSS
## VyomGarud – UAV Systems Website

A modern, animated, drone-technology website built using React, Tailwind CSS, and Framer Motion.
This project showcases sections like Hero, Highlights, Capabilities, About, and Contact with smooth animations and clean UI.


## Tech Stack
Technology	      Purpose
React (CRA) ------------	Front-end framework
Tailwind CSS --------------  	UI styling & utility classes
Framer Motion ------------	Animations (text, fade, hover, scroll effects)
JavaScript	 ---------------Logic & interactivity
Public folder assets------	Drone images, icons

## Project Structure
src/
 ├── components/
 │    ├── Hero.jsx
 │    ├── Highlights.jsx
 │    ├── About.jsx
 │    ├── Capabilities.jsx
 │    ├── Footer.jsx
 │    └── Navbar.jsx
 ├── App.jsx
 ├── index.js
 └── index.css
       
public/
 ├── drone1.jpg
 ├── drone2.jpg
 └── drone.png (--favicon--)

## Setup Guide

## Clone the repo
git clone <your-repo-url>
cd vyomgarud

## Install dependencies
npm install

(This installs React, Tailwind, Framer Motion, etc.)

## Start development server
npm start

App runs at:
http://localhost:3000



## Design Notes
Theme

Dark futuristic drone-tech aesthetic

Accent color: orange neon

Smooth gradients & overlays

Subtle glows and hover effects

Minimal UI with strong typography

## Components
1. Hero Section

Background drone image (drone2.jpg)

Text fade-in + CTA animation

Overlay darkening layer for contrast

Z-index stacking so text is always visible above the image

2. Highlights Section

Static background image (drone1.jpg)

Bounce-in text on scroll

Hover scale effect

Neon diamond icon glow

3. Capabilities

Animated cards sliding L→R when visible

Hover scale + glow effect

4. About Section

Text animation with letter-by-letter reveal

Triggered each time you scroll into the section

Clean paragraph description

5. Footer

Full-width top border line

Contact form

Bottom-center copyright


## Important Notes
Images must be placed in /public

Example:  public/drone1.jpg









