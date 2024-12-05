# Rephrase Assistant Chrome Extension

This is a Chrome extension (or web app) that allows users to input a sentence and choose a tone (e.g., professional, polite, friendly, etc.) to rephrase the sentence. The extension interacts with the Gemini API to rephrase the sentence and display the new version based on the chosen tone.

## Features

- **Input Sentence**: Users can enter a sentence they want to rephrase.
- **Select Tone**: Users can select from a variety of tones, such as:
  - Professional
  - Polite
  - Romantic
  - Friendly
  - Assertive
  - Sympathetic
  - Casual
  - Optimistic
  - Direct
  - Motivational
  - Empathetic
  - Formal
  - Inquisitive
  - Encouraging
  - Reassuring
- **Rephrase**: After selecting a tone, users can click the "Rephrase" button to get the sentence rephrased.
- **Output**: The rephrased sentence will appear in a text area.

## Prerequisites

- A web browser (e.g., Chrome) to run the extension or web app.
- **Gemini API key**: You will need an API key from Gemini (or any other compatible AI language model API) to make the rephrasing requests.

## Setup

### 1. Clone the repository

To get started, clone the repository to your local machine:

```bash
https://github.com/basantiroomie/sentence-rephraser-using-gemini.git
```

### 2. Running as a Chrome Extension

To load the code as a Chrome Extension:

1. Go to the Chrome browser and open `chrome://extensions/`.
2. Enable "Developer mode" in the top right.
3. Click on "Load unpacked" and select the folder containing `index.html` and `popup.js`.
4. The extension should now be available in your browser's extension toolbar.

## How It Works

1. **User Input**: The user enters a sentence in the "Enter your sentence here..." text area.
2. **Tone Selection**: The user selects a tone from the dropdown menu.
3. **Rephrase Request**: The user clicks the "Rephrase" button to send a request to the Gemini API.
4. **API Call**: The extension sends the request to the Gemini API with the selected tone and the sentence to be rephrased.
5. **Response**: The Gemini API responds with a rephrased sentence.
6. **Display Output**: The rephrased sentence is displayed in the "Rephrased sentence will appear here..." text area.

