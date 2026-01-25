---
title: "MQTT Forest Monitoring System"
description: "An IoT sensor monitoring platform with real-time MQTT data streaming and WebSocket-based team chat for forest researchers."
date: 2025-10-20
tags: ["Python", "MQTT", "WebSockets", "Docker", "IoT"]
images: ["/projects/mqtt-1.png", "/projects/mqtt-2.png"]
github: "https://github.com/riadmaaji/MQTT-Systems-Assignment"
featured: false
---

## The Problem

Forest research teams deploy Raspberry Pi sensor platforms to monitor environmental conditions, but lack a unified system to collect, visualize, and discuss the data in real-time. They needed a way to stream sensor readings (temperature, humidity, light, images) while enabling team collaboration.

## The Solution

Built a dual-protocol IoT system using MQTT for efficient sensor data transmission and WebSockets for real-time team chat. The MQTT publisher sends environmental readings to a HiveMQ broker running in Docker, while web dashboards allow researchers to monitor data streams and communicate simultaneously.

## Technical Highlights

- Hierarchical MQTT topic structure (`sensors/{sensor_id}/{data_type}`) enabling flexible wildcard subscriptions for filtering by sensor or data type
- WebSocket chat server with multi-channel support and persistent message history replay on client join
- Base64-encoded image transmission over MQTT for camera sensor data from Raspberry Pi platforms

## Outcome

Delivered a complete IoT monitoring solution that demonstrates proficiency in pub/sub messaging patterns, real-time communication protocols, and containerized broker deployment. The modular architecture supports easy scaling to additional sensors and chat channels.
