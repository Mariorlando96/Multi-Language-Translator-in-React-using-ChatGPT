import React, { useState } from "react";

function FormInput({ onTranslate, loading }) {
  const [text, setText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onTranslate({ text: text.trim(), targetLanguage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What do you want to translate?
        <input
          type="text"
          value={input}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </label>

      <label>
        Target Language
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </label>

      <button type="submit" disabled={loading || !text.trim()}>
        {loading ? "Translating..." : "Translate"}
      </button>
    </form>
  );
}

export default FormInput;
