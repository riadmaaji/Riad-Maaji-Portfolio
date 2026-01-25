---
title: "Système de Surveillance Forestière MQTT"
description: "Une plateforme IoT de surveillance avec streaming de données MQTT en temps réel et chat WebSocket pour les chercheurs forestiers."
date: 2025-10-20
tags: ["Python", "MQTT", "WebSockets", "Docker", "IoT"]
images: ["/projects/mqtt-1.png", "/projects/mqtt-2.png"]
github: "https://github.com/riadmaaji/MQTT-Systems-Assignment"
featured: false
---

## Le Problème

Les équipes de recherche forestière déploient des capteurs Raspberry Pi pour surveiller les conditions environnementales, mais manquent d'un système unifié pour collecter, visualiser et discuter des données en temps réel. Ils avaient besoin d'un moyen de diffuser les relevés des capteurs (température, humidité, luminosité, images) tout en permettant la collaboration d'équipe.

## La Solution

Développement d'un système IoT à double protocole utilisant MQTT pour la transmission efficace des données de capteurs et WebSockets pour le chat d'équipe en temps réel. Le publisher MQTT envoie les relevés environnementaux à un broker HiveMQ fonctionnant dans Docker, tandis que les tableaux de bord web permettent aux chercheurs de surveiller les flux de données et de communiquer simultanément.

## Points Techniques

- Structure hiérarchique de topics MQTT (`sensors/{sensor_id}/{data_type}`) permettant des abonnements flexibles avec wildcards pour filtrer par capteur ou type de données
- Serveur de chat WebSocket avec support multi-canal et rejeu de l'historique des messages lors de la connexion client
- Transmission d'images encodées en Base64 via MQTT pour les données des caméras des plateformes Raspberry Pi

## Résultat

Livraison d'une solution complète de surveillance IoT démontrant une maîtrise des patterns de messagerie pub/sub, des protocoles de communication temps réel et du déploiement de brokers conteneurisés. L'architecture modulaire permet une mise à l'échelle facile vers des capteurs et canaux de chat supplémentaires.
