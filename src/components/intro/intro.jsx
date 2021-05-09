import { useState } from 'react';
import David from './davidcarousel';
import timeStop from './david/dio-time-stop.mp3';
import useSound from 'use-sound';
import './intro.css';

const Intro = () => {
    const [isPaused, setIsPaused] = useState(false);
    const playState = isPaused ? "paused" : "running";
    const [play, { stop }] = useSound(timeStop, { volume: 0.1 });
    const hovered = () => {
        setIsPaused(true);
        play();
        return;
    }
    const unhovered = () => {
        setIsPaused(false);
        stop()
        return;
    }

    return (
        <div className="Intro">
            <div className="david-container">
                <div className="x" style={{animationPlayState: playState}}>
                    <div className="y" style={{animationPlayState: playState}}>
                        <div
                            className="rotate"
                            onMouseEnter={() => hovered()}
                            onMouseLeave={() => unhovered()}
                            style={{animationPlayState: playState}}
                        >
                            <David paused={isPaused}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='introtext'>
                HEY, I'M<br/>
                YIFAN YANG,<br/>
                <span className="description">DEVELOPER.<br/></span>
            </div>
        </div>
    );
}

export default Intro;
