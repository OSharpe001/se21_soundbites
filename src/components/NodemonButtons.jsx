import {
  buckshot,
  eh_eh,
  nodemon_irie,
  rude_bwoy
} from "../assets/sounds";


const nodemonSounds = [buckshot, eh_eh, nodemon_irie, rude_bwoy];
const randomNodemon = () => {
  return nodemonSounds[Math.floor(Math.random() * nodemonSounds.length)]
};

export default function NodemonButtons({ playSound }) {

  return (
    <div className='button-set'>
            <h2 className='title'>Nodemon</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomNodemon())}>Random Nodemon</button>
            </div>
            <div className="specific-buttons">
                <button onClick={() => playSound(buckshot)}>Buckshot!</button>
                <button onClick={() => playSound(eh_eh)}>Eh-eh!</button>
                <button onClick={() => playSound(nodemon_irie)}>Nodemon! Irie</button>
                <button onClick={() => playSound(rude_bwoy)}>Rude Bwoy!</button>
            </div>
        </div>
  );
};