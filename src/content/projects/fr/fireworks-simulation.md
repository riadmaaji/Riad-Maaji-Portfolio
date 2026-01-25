---
title: "Simulateur de Feux d'Artifice"
description: "Une simulation de feux d'artifice basée sur la physique avec systèmes de particules et motifs d'explosion utilisant MonoGame."
date: 2025-01-25
tags: ["C#", "MonoGame", "Physics Simulation", "Particle Systems"]
images: ["/projects/fireworks-1.png", "/projects/fireworks-2.png", "/projects/fireworks-3.png"]
github: "https://github.com/riadmaaji/Fireworks-Simulation"
featured: true
---

## Le Problème

Créer des effets de feux d'artifice réalistes nécessite des calculs physiques complexes incluant la gravité, la vélocité et la gestion des particules. Les implémentations traditionnelles souffrent souvent de goulots d'étranglement de performance lors de la gestion de centaines de particules simultanément.

## La Solution

Développement d'un simulateur de feux d'artifice en temps réel utilisant C# et MonoGame, avec un système de particules basé sur la physique intégrant gravité et calculs de vélocité. Implémentation de plusieurs motifs d'explosion (aléatoire, rectangle, cercle, étoile) et d'un système de lancement guidé style missile où les feux d'artifice suivent le curseur de la souris en vol.

## Points Techniques

- Moteur physique avec vecteurs de gravité, vélocité et accélération pour un mouvement de particules réaliste
- Traitement parallèle utilisant `Parallel.ForEach` pour distribuer les mises à jour des feux d'artifice sur plusieurs cœurs CPU, atteignant jusqu'à 13x d'amélioration de performance
- Pattern de réutilisation d'objets qui recycle les objets Circle via `UpdateCenter()` au lieu d'allouer de nouveaux objets à chaque frame, réduisant la pression sur le GC
- Motifs d'explosion basés sur des formes géométriques utilisant des calculs de sommets pour créer des effets d'éclatement en rectangle, cercle et étoile

## Résultat

Performance améliorée de 13x en mode Release grâce à un profilage systématique et des optimisations. Apprentissage de techniques avancées de profilage CPU, d'identification des points chauds d'allocation et d'implémentation du traitement parallèle dans les boucles de jeu.
