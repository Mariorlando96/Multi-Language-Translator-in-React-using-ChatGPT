import React, { useRef, useState, useEffect } from "react";
import FormInput from "./FormInput";
import { translate } from "../../api/translate";

//create your first component
export default function Home() {
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef(null);

  useEffect(() => {
    // cleanup: abort pending request on unmount
    return () => abortRef.current?.abort();
  }, []);

  async function handleTranslate(payload) {
    setError("");
    setTranslated("");
    setLoading(true);

    // cancel any previous request
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const { translation } = await translate(payload, abortRef.current.signal);
      setTranslated(translation);
    } catch (e) {
      // ignore AbortError nicely
      if (e.name !== "AbortError") {
        setError(e.message || "Translation failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">
        Multi-Language Translator in React using ChatGPT!
      </h1>
      <FormInput
        onTranslate={handleTranslate}
        loading={loading}
        translation={translated}
      />
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
