import React, { useState, useEffect } from "react";

const Slide = ({ items }) => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      if (slide < items.length - 1) {
        setSlide((slide) => slide + 1);
      } else {
        setSlide(0);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]);
  return items[slide] ? (
    <>
    {items.map((item, index) => (
      <div
      className={`hero${slide === index ? ' d-block' : ' d-none'}`} 
      key={item.id}   
      style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="hero-gradient">
        <div className="container col-lg-9">
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 my-4">
                  <h1 className="fs-2 fw-bold">
                    {item && (item.title || items.name)}
                  </h1>
                  <p className="fs-6 fs-lg-5">
                    {item&& item.overview.substring(0, 200)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  ) : null
};

export default Slide;
