import Slider from 'react-slick';
import { videos } from './videosData';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VideoSection.module.scss';
import { useRef } from 'react';
import arrow from '../assets/icon-arrow.png';

export const VideoSection = () => {
  
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipe: true, 
    touchMove: true, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const getThumbnail = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : '';
  };

  return(
    <section className={styles.section}>

      <div className={styles.header}>
        <h2>ВИДЕО И КЛИПЫ</h2>
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
            <img src={arrow} alt="Вперед" />
          </button>
      </div>


     <Slider ref={sliderRef} {...settings}>
      {videos.map((video) => (
        <div key={video.id} className={styles.container}>
        <div className="card">
          <img
            src={getThumbnail(video.url)}
            alt={video.title}
            className="w-100"
          />
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute top-50 start-50 translate-middle"
          >
            <PlayCircle className="playBtn" />
          </a>
      </div>
      </div>
  ))}
</Slider>
 
    </section>
  );
};