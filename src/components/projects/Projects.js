import React, { useEffect, useRef, useState } from "react";

const Projects = ({ theData }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sliderRef = useRef();
  let timeOut = useRef();

  useEffect(() => {
    timeOut.current =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);
    return () => clearTimeout(timeOut.current);
  });

  const slideWidth = 360;

  const slideRight = () => {
    setCurrent(current === theData.length - 1 ? 0 : current + 1);
    sliderRef.current.scrollLeft =
      current === theData.length - 1
        ? 0
        : sliderRef.current.scrollLeft + slideWidth;
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? theData.length - 1 : current - 1);
    sliderRef.current.scrollLeft =
      current === 0
        ? (theData.length - 1) * slideWidth
        : sliderRef.current.scrollLeft - slideWidth;
  };

  return (
    <section className="projects-section">
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary">My Projects</h2>
      </div>
      <div
        className="projects"
        ref={sliderRef}
        onMouseOver={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {theData.map((data, index) => {
          const imageUrl = data.image;
          const cardStyle = {
            backgroundImage: `linear-gradient(to right bottom, rgba(27, 30, 10, 0.87), rgba(16, 18, 6, 0.87)), url(${imageUrl})`,
          };
          return (
            <div
              key={index}
              className={
                index === current
                  ? "card active u-text-center"
                  : "card u-text-center"
              }
            >
              <div className="card__image" style={cardStyle}>
                &nbsp;
              </div>
              <div className="card__content">
                <h3 className="card__content-title heading-tertiary u-margin-bottom-small">
                  {data.title}
                </h3>
                <p className="card__content-text">{data.desc}</p>
                <a href={data.live} className="btn-text">
                  Website &rarr;
                </a>
                <a href={data.source} className="btn-text">
                  Code &rarr;
                </a>
              </div>
            </div>
          );
        })}
        <div className="projects__arrow projects__arrow-lt" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div
          className="projects__arrow projects__arrow-rt"
          onClick={slideRight}
        >
          &rsaquo;
        </div>
      </div>
    </section>
  );
};

export default Projects;
