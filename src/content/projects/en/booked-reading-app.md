---
title: "Booked! Reading App"
description: "A modern Android e-reader for Project Gutenberg classics with text-to-speech, full-text search, and adaptive UI."
date: 2025-01-25
tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Android"]
images: ["/projects/booked-app-0.jpg", /projects/booked-app-1.jpg", "/projects/booked-app-2.jpg", "/projects/booked-app-3.jpg", "/projects/booked-app-4.jpg"]
github: "https://github.com/riadmaaji/Booked-Reading-App"
featured: true
---

## The Problem

Reading classic literature on mobile devices often means dealing with clunky interfaces, losing your place between sessions, and no way to search within lengthy texts. Existing e-reader apps either lack essential features or overwhelm users with complexity.

## The Solution

Built a native Android app using Jetpack Compose and Material Design 3 that automatically downloads and parses books from Project Gutenberg. The app features an MVVM architecture with Hilt dependency injection, Room database for offline storage, and adaptive navigation that responds to screen size (bottom nav, rail, or drawer).

## Technical Highlights

- Adaptive navigation system that switches between bottom bar, navigation rail, and drawer based on device width using WindowSizeClass
- Custom HTML parser with Jsoup to extract chapters, metadata, and images from Project Gutenberg's inconsistent formatting
- Text-to-speech engine with adjustable speed/pitch that parses HTML content into speakable chunks

## Outcome

Created a fully-featured offline e-reader with immersive reading mode, scroll position persistence, and bilingual support (English/French). Comprehensive test coverage includes unit tests, ViewModel tests, and UI instrumentation tests.
