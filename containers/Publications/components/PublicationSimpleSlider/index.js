import { DUMMY_PUBLICATIONSDATA } from "@/constants/publicationdata";
import Slider from "react-slick";
import PublicateCard from "../PublicateCard";
import Link from "next/link";

const PublicationSimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      <Slider {...settings}>
        {DUMMY_PUBLICATIONSDATA.map((card) => (
          <Link href="/publications" key={card.id}>
            <PublicateCard
              title={card.title}
              date={card.date}
              description={card.description}
              subHeading={card.subHeading}
            />
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default PublicationSimpleSlider;
