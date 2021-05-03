import './davidcarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Jotaro from './david/face1.jpg';
import Giovanni from './david/face2.jpg';
import Joseph from './david/face3.jpg';

const David = () => {
    const indicators = false;

    return (
        <div className="David">
            <Carousel className="eyes" indicators={indicators}>
                <Carousel.Item>
                    <img src={Jotaro} alt="Jotaro face"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Giovanni} alt="Giovani face"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={Joseph} alt="Joseph face"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default David;
