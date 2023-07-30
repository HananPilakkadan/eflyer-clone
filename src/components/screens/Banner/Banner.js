import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.css";
import Header from "../Header/Header";

const Banner = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        {">"}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        {"<"}
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section id="banner">
        <Header />
        <Slider {...settings} className="banner-wrapper">
          <div className="banner-item">
            <div className="container">
              <div className="content-box">
                <h3>
                  GET START <br />
                  YOUR FAVRIOT SHOPING
                </h3>
              </div>
            </div>
          </div>
          <div className="banner-item">
            <div className="container">
              <div className="content-box">
                <h3>
                  GET START <br />
                  YOUR FAVRIOT SHOPING
                </h3>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="banner-item">
            <div className="container">
              <div className="content-box">
                <h3>
                  GET START <br />
                  YOUR FAVRIOT SHOPING
                </h3>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
          <div className="banner-item">
            <div className="container">
              <div className="content-box">
                <h3>
                  GET START <br />
                  YOUR FAVRIOT SHOPING
                </h3>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
