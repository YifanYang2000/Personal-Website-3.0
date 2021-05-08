import { useState } from 'react';
import David from './davidcarousel';
import './intro.css';

const Intro = () => {
    const [isPaused, setIsPaused] = useState(false);
    const playState = isPaused ? "paused" : "running";

    return (
        <div className="Intro">
            <div className="david-container">
                <div className="x" style={{animationPlayState: playState}}>
                    <div className="y" style={{animationPlayState: playState}}>
                        <div
                            className="rotate"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
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
