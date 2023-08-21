import './App.css';
import { useState } from "react";
import { CorrectButtons, EagleEyesButtons, NodemonButtons, PikachuButtons } from './components';
import { allImages, kittyImages, professionalImages } from "./components/images";

export default function App() {

  const playSound = (title) => (new Audio(title)).play();

  const [currentBackground, setCurrentBackground] = useState(allImages[Math.floor(Math.random() * allImages.length)]);
  const randomImage = () => (setCurrentBackground(allImages[Math.floor(Math.random() * allImages.length)]));
  const randomCatImage = () => (setCurrentBackground(kittyImages[Math.floor(Math.random() * kittyImages.length)]));
  const randomProfessionalImage = () => (setCurrentBackground(professionalImages[Math.floor(Math.random() * professionalImages.length)]));

  return (
    <div className={`App ${currentBackground.class}`} style={{backgroundImage: `url("${currentBackground.image}")`}}>
      <header>
        <h1 className='title'>SE-21 Soundbites</h1>
        <button onClick={randomImage} className="change-image-button">Random Background</button>
        <button onClick={randomCatImage} className="change-image-button">Random Cat Background</button>
        <button onClick={randomProfessionalImage} className="change-image-button">Random Professional Background</button>
      </header>
      
      <div className="buttons">
        <CorrectButtons playSound={playSound}/>
        <EagleEyesButtons playSound={playSound}/>
        <NodemonButtons playSound={playSound}/>
        <PikachuButtons playSound={playSound}/>
      </div>
      
    </div>
  );
};
