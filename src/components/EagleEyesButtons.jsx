import eagle_sound from "../assets/sounds/eagle_sound.mp3";

export default function EagleEyesButtons({ playSound, randomEagleImage }) {

  const eagleEyes = () => {
    randomEagleImage();
    playSound(eagle_sound);
  }

  return (
    <div className='button-set'>
        <h2 className='title'>Eagle-Eyes</h2>
        <div className="specific-buttons">
            <button onClick={eagleEyes}>Eagle</button>
        </div>
    </div>
  );
};