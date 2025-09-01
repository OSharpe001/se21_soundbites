import { hawk } from "../assets/sounds";


export default function EagleEyesButtons({ playSound, randomEagleImage }) {
  const eagleEyes = () => {
    randomEagleImage();
    playSound(hawk);
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