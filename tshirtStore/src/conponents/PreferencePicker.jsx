import { useState, useEffect } from "react";
import "./preference.css";
import CustomButton from "./CustomButton";
const PreferencePicker = ({
 
  setPrompt,
  generatingImg,
  handleSubmit,
}) => {
  const [colorScheme, setColorScheme] = useState("");
  const [style, setStyle] = useState("");
  const [topography, setTopography] = useState("");
  const [illustrations, setIllustrations] = useState("");

  useEffect(() => {
    const generateDesignPrompt = () => {
      const designPrompt = `
        Generate a design with the following preferences Color Scheme: ${colorScheme} Style: ${style}
        Typography: ${topography} Images/Illustrations: ${illustrations} Please ensure that the design is cohesive and visually appealing.`;
      setPrompt(designPrompt);
    };

    // Call the generateDesignPrompt function whenever preferences change
    generateDesignPrompt();
  }, [colorScheme, style, topography, illustrations, setPrompt]);

  return (
    <div className="preferencePicker-container text-sm">
      <figure>
        <label>Color Scheme</label>
        <select onChange={(e) => setColorScheme(e.target.value)}>
          <option>Warm colors</option>
          <option>Cool colors</option>
          <option>Neutral colors</option>
        </select>
        <label>Style</label>
        <select onChange={(e) => setStyle(e.target.value)}>
          <option>Modern</option>
          <option>Classic</option>
          <option>Vintage</option>
        </select>
        <label>Typography</label>
        <select onChange={(e) => setTopography(e.target.value)}>
          <option>Bold</option>
          <option>Elegant</option>
          <option>Minimalistic</option>
        </select>
        <label>Images/Illustrations</label>
        <select onChange={(e) => setIllustrations(e.target.value)}>
          <option>Realistic</option>
          <option>Abstract</option>
        </select>
      </figure>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PreferencePicker;
