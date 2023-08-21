import './App.css';
import { CorrectButtons, EagleEyesButtons, NodemonButtons, PikachuButtons } from './components';

export default function App() {

  const playSound = (title) => (new Audio(title)).play();

  return (
    <div className="App">
      <h1 className='title'>SE-21 Soundbites</h1>
      <div className="buttons">
        <CorrectButtons playSound={playSound}/>
        <EagleEyesButtons playSound={playSound}/>
        <NodemonButtons playSound={playSound}/>
        <PikachuButtons playSound={playSound}/>
      </div>
      
    </div>
  );
};
