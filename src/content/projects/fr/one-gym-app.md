---
title: "OneGym App"
description: "Un système complet de gestion de salle de sport avec niveaux d'abonnement, planification de cours et réservation de salles."
date: 2025-05-11
tags: ["C#", ".NET 8", "Entity Framework Core", "PostgreSQL", "Avalonia UI"]
images: ["/projects/one-gym-app.png"]
github: "https://github.com/riadmaaji/One-Gym-App"
featured: false
---

## Le Problème

Les centres de fitness gérant plusieurs emplacements ont du mal à coordonner les abonnements, les horaires de cours, les réservations de salles et la disponibilité du personnel à travers leurs installations. Les systèmes traditionnels basés sur des tableurs deviennent ingérables à mesure que l'entreprise se développe, entraînant des doubles réservations et des conflits d'horaires.

## La Solution

Développement d'un système complet de gestion de salle de sport utilisant C# .NET 8 avec une architecture en couches. Le backend utilise Entity Framework Core avec PostgreSQL pour la persistance des données, tandis que le frontend est construit avec Avalonia UI et ReactiveUI pour une expérience de bureau multiplateforme réactive. Le système implémente une authentification sécurisée avec hachage de mot de passe PBKDF2.

## Points Techniques

- Système de contrôle d'accès basé sur les rôles avec des menus distincts pour Admin, Coach, Employé et Client
- Système d'abonnement à plusieurs niveaux (Standard, Gold, Platinum) utilisant le patron de conception Décorateur pour l'extensibilité
- Système intelligent de réservation de salles qui prévient les conflits d'horaires à travers 7 types de salles différents (Spinning, CrossFit, Yoga, Cardio, Musculation, Fitness en groupe, Entraînement privé)
- Moteur de planification complet avec vérification de disponibilité par créneaux de 30 minutes et gestion des réservations

## Résultat

Développement d'une solution évolutive capable de gérer une chaîne de salles de sport régionale avec plusieurs emplacements. Acquisition d'une expérience pratique dans l'implémentation de patrons d'architecture propre, les migrations Entity Framework et la création d'applications de bureau multiplateformes avec Avalonia.
