import Slider from 'react-slick';
import { audios } from './audioData';
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import styles from './AudioSection.module.scss';

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
          <section className={styles.section}>
            <div className={styles.header}>
                <h2>ТОП ПЕСЕН</h2>
            </div>

         <div className={`${styles.container} d-flex justify-content-between align-items-center}`}>
          <button
            className={styles.chevronBtn}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeft size={40}/>
          </button>
          <button
            className={styles.chevronBtn}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRight size={40} />
          </button>
        </div>


        <Slider ref={sliderRef} {...settings}>
    {audios.map((audio) => (
        <div key={audio.id} className={styles.container}>
        <div className={`${styles.card} position-relative`}>
            <img
            src={audio.img}
            alt={audio.alt}
            className="img-fluid w-100"
            />
            <a
            href={audio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute top-50 start-50 translate-middle"
            >
            <PlayCircle size={60} className={styles.playIcon} />
            </a>
        </div>
        <h4>{audio.title}</h4>
        </div>
    ))}
    </Slider>


       </section>
    )
}