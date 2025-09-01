import {
  applause,
  bell,
  cheering_crowd,
  cheering_kids
} from "../assets/sounds";


const correctSounds = [applause, bell, cheering_crowd, cheering_kids];
const randomCorrectSound = () => {
  return correctSounds[Math.floor(Math.random() * correctSounds.length)]
};

console.log("Math.floor(Math.random() * correctSounds.length): ", Math.floor(Math.random() * correctSounds.length))

export default function CorrectButtons({ playSound }) {

  return (
    <div className='button-set'>
            <h2 className='title'>Correct</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomCorrectSound())}>Random Correct</button>
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