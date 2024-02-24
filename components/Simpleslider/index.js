import AboutusCard from '@/containers/AboutUs/components/Aboutcard';
import Slider from 'react-slick';
import { DUMMY_ABOUTUSDATA } from '@/constants/aboutdata';
import styles from './style.module.css';

const Simpleslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.largeScreen}>
        {DUMMY_ABOUTUSDATA.map((card) => (
          <AboutusCard key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
      <div className={styles.smallScreen}>
        <Slider {...settings}>
          {DUMMY_ABOUTUSDATA.map((card) => (
            <AboutusCard key={card.id} title={card.title} text={card.text} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Simpleslider;
