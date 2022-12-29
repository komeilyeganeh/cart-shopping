import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../assets/slider/slide-1.jpg";
import slider2 from "../../assets/slider/slide-2.jpg";
import "./Slider.scss";

const Slider = () => {
    return <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true} axis="vertical" verticalSwipe="natural">
        <div>
            <img src={slider1} alt="slider"/>
            <div>
                <h2>Mid Season Sale</h2>
                <p>Stock up on sportswear and limited edition collections on our</p>
                <h4>20% <span>OFF</span></h4>
            </div>
        </div>
        <div>
            <img src={slider2} alt="slider"/>
            <div>
                <h2>Seasonal Offers.</h2>
                <p>Stock up on sportswear and limited edition collections on our <br /> awesome mid-season sale.</p>
            </div>
        </div>
    </Carousel>
}

export default Slider;