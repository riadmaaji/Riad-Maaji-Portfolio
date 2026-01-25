---
title: "Metro Trip Planner"
description: "A full-stack web app for planning trips on Montreal's STM metro system with interactive maps and Wikipedia integration."
date: 2025-01-25
tags: ["React", "Express.js", "Leaflet", "GeoJSON", "REST API"]
images: ["/projects/metro-planner-1.png", "/projects/metro-planner-2.png"]
github: "https://github.com/riadmaaji/Metro-Trip-Planner"
featured: true
---

## The Problem

Navigating Montreal's metro system can be confusing for newcomers and tourists who need to visualize their route before traveling. Existing transit apps often lack intuitive route visualization and contextual information about stations along the way.

## The Solution

Built an interactive trip planner using React with React Leaflet for the frontend and Express.js for the backend. The app processes official STM GeoJSON data to calculate routes and integrates the Wikipedia API to provide informative snippets about each station when users click on map markers.

## Technical Highlights

- Server-side route calculation with validation ensuring both stations are on the same metro line
- Real-time Wikipedia API integration fetching station information dynamically on marker click
- Color-coded polylines and UI elements matching Montreal's official metro line colors (Green, Orange, Yellow, Blue)
- Responsive design with CSS media queries for seamless mobile and desktop experiences

## Outcome

Created a functional transit planning tool that demonstrates full-stack development skills including RESTful API design, geospatial data handling, and third-party API integration. The project showcases clean separation between client and server responsibilities.
