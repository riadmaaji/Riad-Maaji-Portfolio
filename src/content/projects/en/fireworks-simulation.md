---
title: "Fireworks Simulator"
description: "A physics-based fireworks simulation with particle systems, guided launches, and explosion patterns using MonoGame."
date: 2025-01-25
tags: ["C#", "MonoGame", "Physics Simulation", "Particle Systems"]
images: ["/projects/fireworks-1.png", "/projects/fireworks-2.png", "/projects/fireworks-3.png"]
github: "https://github.com/riadmaaji/Fireworks-Simulation"
featured: true
---

## The Problem

Creating realistic fireworks effects requires complex physics calculations including gravity, velocity, and particle management. Traditional implementations often suffer from performance bottlenecks when handling hundreds of particles simultaneously.

## The Solution

Built a real-time fireworks simulator using C# and MonoGame that features a physics-based particle system with gravity and velocity calculations. Implemented multiple explosion patterns (random, rectangle, circle, star) and a guided missile-style launch system where fireworks track the mouse cursor while in flight.

## Technical Highlights

- Physics engine with gravity, velocity, and acceleration vectors for realistic particle movement
- Parallel processing using `Parallel.ForEach` to distribute firework updates across CPU cores, achieving up to 13x performance improvement
- Object pooling pattern that reuses Circle objects via `UpdateCenter()` instead of allocating new objects every frame, reducing GC pressure
- Shape-based explosion patterns using vertex calculations to create rectangle, circle, and star burst effects

## Outcome

Achieved 13x faster performance in Release mode through systematic profiling and optimization. Learned advanced techniques for CPU profiling, identifying allocation hotspots, and implementing parallel processing in game loops.
