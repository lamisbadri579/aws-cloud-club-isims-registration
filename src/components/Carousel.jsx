import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './carousel.css';
import PropTypes from 'prop-types';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function Carousel({ imgs }) {
  // State to store screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect to update screen width on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only render the Carousel component if the screen width is >= 980px
  if (screenWidth < 980) {
    return null; // Return nothing if the screen is smaller than 980px
  }

  // Duplicating images to ensure enough slides for looping
 

  return (
    <div className="relative h-full p-0 m-0">
     
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // You can adjust this as needed
        slidesPerGroup={1}
        loop={true}
       
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
          className: "bg-[#000] bg-opacity-50",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.link}
              loading="lazy"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
