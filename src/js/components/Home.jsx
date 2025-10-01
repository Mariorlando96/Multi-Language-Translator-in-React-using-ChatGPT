import React from "react";
import handleTranslate from "./HandleTranslate";
import FormInput from "./FormInput";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">
        Multi-Language Translator in React using ChatGPT!
      </h1>
      <handleTranslate />
      <FormInput />
    </div>
  );
};

export default Home;
