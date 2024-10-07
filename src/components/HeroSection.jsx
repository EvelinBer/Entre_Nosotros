import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import imgSlider1 from "../assets/img/slider-1.jpg";
import imgSlider2 from "../assets/img/slider-2.jpg";
import imgSlider3 from "../assets/img/slider-3.jpg";

export default function HeroSection({ title, subtitle, buttonText }) {
  return (
    <>
      <section className="hero-section" id="principal">
        <div className="container hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href="#historias" className="btn">
            {buttonText}
          </a>
        </div>
        <div className="image-carousel">
          <Splide
            options={{
              autoplay: true,
              rewind: true,
              interval: 3000,
              arrows: false,
              pagination: false,
            }}
          >
            <SplideSlide>
              <img src={imgSlider1} className="image-carousel-cover" />
            </SplideSlide>
            <SplideSlide>
              <img src={imgSlider2} className="image-carousel-cover" />
            </SplideSlide>
            <SplideSlide>
              <img src={imgSlider3} className="image-carousel-cover" />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
}
