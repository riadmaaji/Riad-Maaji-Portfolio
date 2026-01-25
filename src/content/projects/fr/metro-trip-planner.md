---
title: "Planificateur de Trajet Métro"
description: "Une application web full-stack pour planifier des trajets sur le métro STM de Montréal avec cartes interactives et intégration Wikipedia."
date: 2025-01-25
tags: ["React", "Express.js", "Leaflet", "GeoJSON", "REST API"]
images: ["/projects/metro-planner-1.png", "/projects/metro-planner-2.png"]
github: "https://github.com/riadmaaji/Metro-Trip-Planner"
featured: true
---

## Le Problème

Naviguer dans le réseau de métro de Montréal peut être déroutant pour les nouveaux arrivants et les touristes qui ont besoin de visualiser leur trajet avant de voyager. Les applications de transport existantes manquent souvent de visualisation intuitive des itinéraires et d'informations contextuelles sur les stations.

## La Solution

Développement d'un planificateur de trajet interactif utilisant React avec React Leaflet pour le frontend et Express.js pour le backend. L'application traite les données GeoJSON officielles de la STM pour calculer les itinéraires et intègre l'API Wikipedia pour fournir des extraits informatifs sur chaque station lorsque les utilisateurs cliquent sur les marqueurs de la carte.

## Points Techniques

- Calcul d'itinéraire côté serveur avec validation assurant que les deux stations sont sur la même ligne de métro
- Intégration en temps réel de l'API Wikipedia récupérant dynamiquement les informations des stations au clic sur les marqueurs
- Polylignes et éléments d'interface colorés selon les couleurs officielles des lignes de métro de Montréal (Verte, Orange, Jaune, Bleue)
- Design responsive avec media queries CSS pour une expérience fluide sur mobile et ordinateur

## Résultat

Création d'un outil de planification de transport fonctionnel démontrant des compétences en développement full-stack incluant la conception d'API REST, le traitement de données géospatiales et l'intégration d'API tierces. Le projet illustre une séparation claire des responsabilités entre client et serveur.
