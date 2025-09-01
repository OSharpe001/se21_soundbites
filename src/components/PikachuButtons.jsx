import {
    astounded_pikachu,
    happy_pikachu,
    talkative_pikachu
} from "../assets/sounds";

const pikaSounds = [astounded_pikachu, happy_pikachu, talkative_pikachu];
const randomPika = () => {
  return pikaSounds[Math.floor(Math.random() * pikaSounds.length)]
};

export default function PikachuButtons({ playSound }) {

    return (
        <div className='button-set'>
            <h2 className='title'>Pikachu</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomPika())}>Random Pika</button>
            </div>
            <div className="specific-buttons">
                <button onClick={() => playSound(astounded_pikachu)}>Astounded Pika</button>
                <button onClick={() => playSound(happy_pikachu)}>Happy Pika</button>
                <button onClick={() => playSound(talkative_pikachu)}>Talkative Pika</button>
            </div>
        </div>
    );
};