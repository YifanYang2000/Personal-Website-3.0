import David from './scrollmagic/davidcarousel';
import './intro.css';

const Intro = () => {
    return (
        <div className="Intro">
            <div className='introtext'>
                HI, I'M<br/>
                YIFAN YANG,<br/><br/>
            </div>
            <div className="x">
                <div className="y">
                    <div className="rotate">
                        <David/>
                    </div>
                </div>
            </div>
            <div className="description"><br/><br/>DEVELOPER.</div>
        </div>
    );
}

export default Intro;
