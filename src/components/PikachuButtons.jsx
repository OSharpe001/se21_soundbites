import astounded_pikachu from "../assets/sounds/pikachu/astounded_pikachu.mp3";
import happy_pikachu from "../assets/sounds/pikachu/happy_pikachu.mp3";
import talkative_pikachu from "../assets/sounds/pikachu/talkative_pikachu.mp3";

export default function PikachuButtons({ playSound }) {

    const pikaSounds = [astounded_pikachu, happy_pikachu, talkative_pikachu];
    const randomPika = pikaSounds[Math.floor(Math.random() * pikaSounds.length)];

    return (
        <div className='button-set'>
            <h2 className='title'>Pikachu</h2>
            <div className='random-button'>
                <button onClick={() => playSound(randomPika)}>Random Pika</button>
            </div>
            <div className="specific-buttons">
                <button onClick={() => playSound(astounded_pikachu)}>Astounded Pika</button>
                <button onClick={() => playSound(happy_pikachu)}>Happy Pika</button>
                <button onClick={() => playSound(talkative_pikachu)}>Talkative Pika</button>
            </div>
        </div>
    );
};