Vivek Pal — Portfolio Website
This folder contains the full 3D animated portfolio website.

Files
File	Purpose
index.html	The website itself (all content & sections)
style.css	Styling, 3D effects, animations
script.js	Particle background, scroll motion (GSAP), typing effect
host-website.bat	Double-click to host the site on your laptop (Windows)
How to run on your laptop
Copy this whole folder anywhere on your laptop (e.g. E:\Documents\My Portfolio).
Double-click host-website.bat.
Your browser opens at http://localhost:8000 with the site running.
To stop the server, go back to the black window and press Ctrl+C, or just close it.
Requirements
Works best with Python installed (python.org/downloads — tick "Add Python to PATH" during install).
If you have Node.js instead, the bat file uses npx serve automatically.
If neither is installed, the bat still opens index.html directly — everything works, but the URL bar shows a file:// path instead of localhost.
Notes
The GSAP animation library loads from a CDN, so the scroll animations need internet the first time (they cache after that). The site content works fully offline either way.
Port 8000 is used by default; if it's busy, close whatever uses it or edit the 8000 in the bat file.