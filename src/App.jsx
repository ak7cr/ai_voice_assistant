import React, { useState } from 'react';

const App = () => {
  const [response, setResponse] = useState('');

  // Function to start recognition
  const startRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      const result = await sendToGemini(transcript);
      setResponse(result);
      speakResponse(result);
    };
    recognition.start();
  };

  // Function to send voice input to the Gemini API
  const sendToGemini = async (query) => {
    const res = await fetch(`https://api.gemini.com/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    });
    const data = await res.json();
    return data.response;
  };

  // Function to speak the response
  const speakResponse = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h1>Voice Assistant</h1>
      <button onClick={startRecognition}>Speak</button>
      <p>{response}</p>
    </div>
  );
};

export default App;
