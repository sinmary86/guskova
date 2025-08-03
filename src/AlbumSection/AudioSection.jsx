import Slider from 'react-slick';
import { audios } from './audioData';
import play from '../assets/play-icon.svg';
import { useRef } from 'react';
import styles from './AudioSection.module.scss';
import arrow from '../assets/icon-arrow.png';

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
     ],
    };

    return(
          <section id="audioSection" className={styles.section}>
           
            <div className={styles.header}>
                <h2>ТОП ПЕСЕН</h2>
            </div>

            <div className={`${styles.container} d-flex justify-content-between align-items-center}`}>
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
              <div key={audio.id} className={styles.container}>
              <div className="card">
                  <img
                  src={audio.img}
                  alt={audio.alt}
                  className="w-100"
                  />
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
    )
}