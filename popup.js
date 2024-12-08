document.getElementById('rephraseButton').addEventListener('click', async function () {
  const sentence = document.getElementById('inputSentence').value;
  const tone = document.getElementById('toneSelect').value;

  if (!sentence) {
    alert('Please enter a sentence.');
    return;
  }

  // Build the instruction based on the tone selected
  let promptText = `Rephrase the following sentence in a `;

  switch (tone) {
      case 'professional':
        promptText += 'professional tone: ';
        break;
      case 'polite':
        promptText += 'polite tone: ';
        break;
      case 'romantic':
        promptText += 'romantic tone: ';
        break;
      case 'friendly':
        promptText += 'friendly tone: ';
        break;
      case 'assertive':
        promptText += 'assertive tone: ';
        break;
      case 'sympathetic':
        promptText += 'sympathetic tone: ';
        break;
      case 'casual':
        promptText += 'casual tone: ';
        break;
      case 'optimistic':
        promptText += 'optimistic tone: ';
        break;
      case 'direct':
        promptText += 'direct tone: ';
        break;
      case 'motivational':
        promptText += 'motivational tone: ';
        break;
      case 'empathetic':
        promptText += 'empathetic tone: ';
        break;
      case 'formal':
        promptText += 'formal tone: ';
        break;
      case 'inquisitive':
        promptText += 'inquisitive tone: ';
        break;
      case 'encouraging':
        promptText += 'encouraging tone: ';
        break;
      case 'reassuring':
        promptText += 'reassuring tone: ';
        break;
      default:
        promptText += 'neutral tone: ';
    }

  promptText += sentence;

  // Prepare the request payload
  const requestData = {
    contents: [
      {
        parts: [
          {
            text: promptText
          }
        ]
      }
    ]
  };

  // Construct the request URL with your API key
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual Gemini API key
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('API Response:', data); // Log the entire response for debugging

      // Check if the response contains candidates and the content within it
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        // Extract the rephrased sentence from the correct structure
        let rephrasedSentence = data.candidates[0].content.parts[0].text;

        // Check if the sentence is non-empty
        if (!rephrasedSentence) {
          alert('Error: Rephrased sentence is empty.');
          return;
        }

        console.log('Rephrased Sentence:', rephrasedSentence); // Log the rephrased sentence

        // Display the rephrased sentence in the output field
        document.getElementById('outputSentence').value = rephrasedSentence;
      } else {
        alert('Error: The response format is incorrect or the content is missing.');
      }
    } else {
      alert('Error rephrasing sentence. Status: ' + response.status);
    }
  } catch (error) {
    console.error('Error:', error); // Log any network errors
    alert('Something went wrong. Check the console for details.');
  }
});
