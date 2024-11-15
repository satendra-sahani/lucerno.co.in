import Slider from "react-slick";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ResponsiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const slides = [
    { id: 1, src: "/assets/home-page-img/banner1.jpg", alt: "Slide 1" },
    { id: 2, src: "/assets/home-page-img/banner2.jpg", alt: "Slide 2" },
    { id: 3, src: "/assets/home-page-img/banner3.jpg", alt: "Slide 3" },
    { id: 4, src: "/assets/home-page-img/banner4.jpg", alt: "Slide 4" },
    { id: 5, src: "/assets/home-page-img/banner5.jpg", alt: "Slide 5" },
  ];

  return (
    <div className="w-full mx-auto  max-h-[600px] overflow-hidden custom-dots">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative max-h-[600px] h-[600px] flex justify-center items-center">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
