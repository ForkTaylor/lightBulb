import { useState } from "react";
import './Bulb.css';
import Click from './clickSound/on:off-click.mp3';

const LightBulb = () => {

    let clickSound = new Audio(Click);

    const playClickSound = () => {
        clickSound.play();
    };

    const [isOn, setIsOn] = useState(false);

    const handleLight = () => setIsOn(!isOn);

    return (
        <div>

            <div className="wire"></div>

            <div className={`${isOn ? 'bulbOn' : 'bulbOff'}`}>
                <span></span>
                <span></span>
            </div>

            <div className="switch">
                <div className="container">
                    <input onClick={() => {
                        playClickSound();
                        handleLight();
                    }} type='checkbox' className="toggle"></input>
                </div>
            </div>

        </div>
    );
    
}

export default LightBulb;