---
title: "Analyse des Conflits Armés et Dépenses Militaires"
description: "Un outil de visualisation full-stack explorant la relation entre les conflits armés mondiaux et les dépenses militaires de 1960 à 2021."
date: 2025-06-15
tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"]
images: ["/projects/fires-and-funds-1.png", "/projects/fires-and-funds-2.png", "/projects/fires-and-funds-3.png"]
github: "https://github.com/riadmaaji/Fires-And-Funds-Project"
live: "https://armed-conflicts-and-military-spending.onrender.com/"
featured: true
---

## Le Problème

Comprendre la relation entre les dépenses militaires et les conflits armés nécessite l'analyse de décennies de données complexes à travers des centaines de pays. Les chercheurs et analystes manquent d'outils accessibles pour visualiser ces tendances et comparer les dépenses de défense entre nations.

## La Solution

Développement d'une application full-stack utilisant React et Express qui combine deux ensembles de données complets : les conflits armés mondiaux (1989-2021) et les dépenses militaires (1960-2019). L'application propose des cartes interactives avec react-simple-maps, des graphiques temporels avec Chart.js, et un tableau de bord de comparaison de pays avec chargement parallèle des données.

## Points Techniques

- Implémentation de cache serveur et navigateur avec un middleware global, réduisant le TTFB à 6ms lors des visites répétées
- Application de React.lazy/Suspense pour le chargement différé des composants lourds (Chart.js, cartes), améliorant le score Lighthouse de 57 à 81
- Construction de pipelines d'agrégation MongoDB pour des requêtes efficaces et des statistiques de comparaison
- Déploiement sur Render (déploiement automatique) et AWS Lightsail avec pipeline CI/CD GitLab

## Résultat

Amélioration de 67% des performances de chargement initial (FCP de 5.4s à 1.8s) grâce à la compression, au chargement différé et aux stratégies de mise en cache. Le processus d'optimisation documenté dans Performance.md sert de référence pour l'amélioration systématique des performances web.
