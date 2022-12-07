import React, { useState } from "react";
/*eslint-disable-next-line*/
const OpenAI = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [userInput, setUserInput] = useState("");

  const generateImage = async () => {
    const API_KEY = '';
    const response = await fetch(
      `https://api.openai.com/v1/images/generations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "image-alpha-001",
          prompt: userInput
        })
      }
    );
    const data = await response.json();
    setGeneratedImage(data.data[0].url);
  };

  return (
    <div className="openAiApp">
      <div className="openAiApp__header">
      <input
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>
      </div>
      {generatedImage && <><img src={generatedImage} alt="Generated"/></> }
      <div className="openAiApp__footer">
        {generatedImage && (
          <div>
              <a href={generatedImage} download className="download-button">Download</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenAI;