---
title: "Booked! Application de Lecture"
description: "Une liseuse Android moderne pour les classiques de Project Gutenberg avec synthèse vocale, recherche et interface adaptative."
date: 2025-01-25
tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Android"]
images: ["/projects/booked-app-0.jpg", /projects/booked-app-1.jpg", "/projects/booked-app-2.jpg", "/projects/booked-app-3.jpg", "/projects/booked-app-4.jpg"]
github: "https://github.com/riadmaaji/Booked-Reading-App"
featured: true
---

## Le Problème

Lire la littérature classique sur appareils mobiles signifie souvent gérer des interfaces maladroites, perdre sa position entre les sessions, et n'avoir aucun moyen de rechercher dans de longs textes. Les applications de lecture existantes manquent soit de fonctionnalités essentielles, soit submergent les utilisateurs de complexité.

## La Solution

Développement d'une application Android native utilisant Jetpack Compose et Material Design 3 qui télécharge et analyse automatiquement les livres de Project Gutenberg. L'application utilise une architecture MVVM avec injection de dépendances Hilt, base de données Room pour le stockage hors ligne, et navigation adaptative selon la taille d'écran.

## Points Techniques

- Système de navigation adaptatif qui bascule entre barre inférieure, rail de navigation et tiroir selon la largeur de l'appareil via WindowSizeClass
- Parseur HTML personnalisé avec Jsoup pour extraire chapitres, métadonnées et images du formatage inconsistant de Project Gutenberg
- Moteur de synthèse vocale avec vitesse et tonalité ajustables qui convertit le contenu HTML en segments prononçables

## Résultat

Création d'une liseuse hors ligne complète avec mode de lecture immersif, persistance de la position de défilement et support bilingue (anglais/français). La couverture de tests comprend tests unitaires, tests de ViewModel et tests d'instrumentation UI.
