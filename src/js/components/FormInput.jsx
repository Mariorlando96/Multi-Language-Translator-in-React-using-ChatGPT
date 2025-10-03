import { Translations } from "openai/resources/audio/translations.js";
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
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="row ">
        {/* Left: textarea */}
        <div className="col-md-5 text-center">
          <div className="mb-3">
            <label className="form-label">
              What do you want to translate?
              <textarea
                className="form-control w-100"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type text to translate..."
                rows={6}
              />
            </label>
          </div>
        </div>

        {/* Middle: select + button stacked */}
        <div className="col-md-2">
          <div className="mb-3">
            <label className="form-label">Target Language</label>
            <select
              className="form-select"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading || !text.trim()}
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>

        {/* Right: translation result */}
        <div className="col-md-5 text-center">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Result</h5>
              <p className="card-text">{Translations}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormInput;
