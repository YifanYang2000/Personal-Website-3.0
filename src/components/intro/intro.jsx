import David from './davidcarousel';
import './intro.css';

const Intro = () => {
    return (
        <div className="Intro">
            <div className="david-wrapper">
                <div className="x">
                    <div className="y">
                        <div className="rotate">
                            <David/>
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
