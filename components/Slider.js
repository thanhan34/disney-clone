import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
    return (
        <section className="relative mx-auto shadow-2xl mt-7 max-w-screen-2xl">
            <div />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="/images/slider-1.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-2.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-3.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
                </div>
            </Carousel>
        </section>
    );
}

export default Slider;