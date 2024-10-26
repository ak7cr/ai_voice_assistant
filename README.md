Voice Assistant Web App
A web-based voice assistant that uses the Gemini API to process user input and provide interactive, voice-based responses. This app captures voice commands, sends them to the Gemini API, and speaks the responses back to the user.

Features
Voice Recognition: Uses the Web Speech API to capture voice input.
Gemini API Integration: Processes commands and queries using the Gemini API.
Text-to-Speech Output: Converts responses into audio for a seamless interactive experience.
Deployed via GitHub Pages: Easily accessible and can be used directly from a web browser.
Demo
Live Demo

Table of Contents
Getting Started
Installation
Usage
API Reference
Contributing
License
Getting Started
Prerequisites
Node.js (v14 or higher recommended)
Vite for fast frontend development
A Gemini API key (if authentication is required)

Usage
Allow microphone permissions when prompted by your browser.
Speak your query or command; the app will process it using the Gemini API.
Listen to the response, which will be spoken back to you.
API Reference
Gemini API
This app uses the Gemini API to process voice input and return appropriate responses.

Web Speech API

SpeechRecognition: Used for capturing user voice input.
SpeechSynthesis: Used for converting text responses to audio output.
