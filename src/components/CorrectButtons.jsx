import applause from "../assets/sounds/correct_sounds/applause.mp3";
import bell from "../assets/sounds/correct_sounds/bell.mp3";
import cheering_crowd from "../assets/sounds/correct_sounds/cheering_crowd.mp3";
import cheering_kids from "../assets/sounds/correct_sounds/cheering_kids.mp3";


export default function CorrectButtons({ playSound }) {

    const correctSounds = [applause, bell, cheering_crowd, cheering_kids];
    const randomCorrectSound = correctSounds[Math.floor(Math.random() * correctSounds.length)];

  return (
    <div className='button-set'>
            <h2 className='title'>Correct</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomCorrectSound)}>Random Correct</button>
            </div>
            <div className="specific-buttons">
                <button onClick={() => playSound(applause)}>Applause</button>
                <button onClick={() => playSound(bell)}>Bell</button>
                <button onClick={() => playSound(cheering_crowd)}>Cheering Crowd</button>
                <button onClick={() => playSound(cheering_kids)}>Cheering Kids</button>
            </div>
        </div>
  );
};