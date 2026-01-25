---
title: "OneGym App"
description: "A full-stack gym management system with membership tiers, class scheduling, and room booking capabilities."
date: 2025-05-11
tags: ["C#", ".NET 8", "Entity Framework Core", "PostgreSQL", "Avalonia UI"]
images: ["/projects/one-gym-app.png"]
github: "https://github.com/riadmaaji/One-Gym-App"
featured: false
---

## The Problem

Fitness centers managing multiple locations struggle to coordinate memberships, class schedules, room bookings, and staff availability across their facilities. Traditional spreadsheet-based systems become unmanageable as the business scales, leading to double-bookings and scheduling conflicts.

## The Solution

Built a comprehensive gym management system using C# .NET 8 with a layered architecture. The backend uses Entity Framework Core with PostgreSQL for data persistence, while the frontend is built with Avalonia UI and ReactiveUI for a responsive cross-platform desktop experience. The system implements secure authentication with PBKDF2 password hashing.

## Technical Highlights

- Role-based access control system with distinct menus for Admin, Coach, Employee, and Client users
- Multi-tiered membership system (Standard, Gold, Platinum) using the Decorator design pattern for extensibility
- Intelligent room booking system that prevents scheduling conflicts across 7 different room types (Spinning, CrossFit, Yoga, Cardio, Weights, GroupFitness, PrivateTraining)
- Comprehensive scheduling engine with 30-minute time slot availability checking and booking management

## Outcome

Developed a scalable solution capable of managing a regional gym chain with multiple locations. Gained practical experience implementing clean architecture patterns, Entity Framework migrations, and building cross-platform desktop applications with Avalonia.
