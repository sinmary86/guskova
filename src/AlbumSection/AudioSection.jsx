import Slider from "react-slick";
import { audios } from "./audioData";
import play from "../assets/play-icon.svg";
import { useRef } from "react";
import arrow from "../assets/icon-arrow.png";

export const AudioSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="audioSection" className="musik-section">
      <div className="header-bg-top">
        <h2>ТОП ПЕСЕН</h2>
      </div>

      <div className="music-container d-flex justify-content-between align-items-center mb-2">
        <button
          className="arrowsBtn"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <img src={arrow} alt="Назад" className="arrow-left" />
        </button>
        <button
          className="arrowsBtn"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <img src={arrow} alt="Вперед" className="arrow-right" />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {audios.map((audio) => (
          <div key={audio.id} className="music-container">
            <div className="card">
              <img src={audio.img} alt={audio.alt} className="w-100" />
              <a
                href={audio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="position-absolute top-50 start-50 translate-middle"
              >
                <img src={play} alt="Вперед" className="playBtn" />
              </a>
            </div>
            <h4>{audio.title}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};
