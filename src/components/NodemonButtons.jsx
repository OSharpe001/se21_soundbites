import buckshot from "../assets/sounds/nodemon_sounds/buckshot.mp3";
import eh_eh from "../assets/sounds/nodemon_sounds/eh_eh.mp3";
import nodemon_irie from "../assets/sounds/nodemon_sounds/nodemon_irie.mp3";
import rude_bwoy from "../assets/sounds/nodemon_sounds/rude_bwoy.mp3";


export default function NodemonButtons({ playSound }) {

    const nodemonSounds = [buckshot, eh_eh, nodemon_irie, rude_bwoy];
    const randomNodemon = nodemonSounds[Math.floor(Math.random() * nodemonSounds.length)];

  return (
    <div className='button-set'>
            <h2 className='title'>Nodemon</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomNodemon)}>Random Nodemon</button>
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