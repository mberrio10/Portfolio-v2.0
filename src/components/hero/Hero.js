// import React from 'react'

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__image">
        <img src="/images/myAvatar.png" alt="Avatar" className="avatar-png" />
        {/* <div className='avatar'>
        </div> */}
      </div>
      <div className="hero__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hi, I'm Mike Berrio</span>
          <span className="heading-primary--sub">Full-Stack Engineer</span>
        </h1>
        <a target="#" href="https://github.com/mberrio10">
          <i className="social-icon fa-brands fa-github"></i>
        </a>
        <a target="#" href="https://www.linkedin.com/in/mikeberrio/">
          <i className="social-icon fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;
