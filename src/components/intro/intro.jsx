import { useState } from 'react';
import David from './davidcarousel';
import timeStop from './david/dio-time-stop.mp3';
import timeStart from './david/dio-time-start.mp3'
import useSound from 'use-sound';
import './intro.css';

const Intro = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [canUnpause, setCanUnpause] = useState(false);
    const [playStop] = useSound(timeStop, { volume: 0.1 });
    const [playStart] = useSound(timeStart, { volume: 0.1 });
    const playState = !(!isPaused && !canUnpause) ? "paused" : "running";
    const pausing = async () => {
        if ( !canUnpause && !isPaused ) {
            setIsPaused(true);
            playStop();
            await new Promise(resolve => {
                setTimeout(() => resolve(), 1900);
            });
            setCanUnpause(true);
        } else if ( canUnpause && isPaused ) {
            setIsPaused(false);
            playStart();
            await new Promise(resolve => {
                setTimeout(() => resolve(), 1200);
            });
            setCanUnpause(false);
        }
        return;
    }

    return (
        <div className="Intro">
            <div className="david-container">
                <div className="x" style={{animationPlayState: playState}}>
                    <div className="y" style={{animationPlayState: playState}}>
                        <div
                            className="rotate"
                            onClick={() => pausing()}
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
