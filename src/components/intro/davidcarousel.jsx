import './davidcarousel.css';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Jotaro from './david/face1.jpg';
import Giovanni from './david/face2.jpg';
import Joseph from './david/face3.jpg';

const David = (props) => {
    const indicators = false;
    const controls = false;
    const interval = props.paused ? null : 5000;
    const getCarousel = () => {
        return (
            <Carousel
                className="eyes"
                indicators={indicators}
                controls={controls}
                interval={interval}
            >
                <Carousel.Item>
                    <img src={Jotaro} alt="Jotaro face" className="eye"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Giovanni} alt="Giovani face" className="eye"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Joseph} alt="Joseph face" className="eye"/>
                </Carousel.Item>
            </Carousel>
        );
    }

    const negativeClass = props.paused ? "negative-after" : "negative-before";
    const topClass = props.paused ? "top-after" : "top-before";

    return (
        <div className="frame">
            <div className="david-background david-bottom">
                {getCarousel()}
            </div>
            <div className={`circle-top-david ${topClass}`}>
                <div className={`circle-negative ${negativeClass}`}>
                    <div className="david-background david-top">
                        {getCarousel()}
                    </div>
                </div>
            </div>
        </div>
    );
}

David.propTypes = {
    paused: PropTypes.bool
}

export default David;
