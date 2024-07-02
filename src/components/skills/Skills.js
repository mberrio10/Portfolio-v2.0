import React from 'react'

const Skills = () => {
  return (
    <section className='skills-section' id='skills'>
        <div className='u-text-center u-margin-bottom-big'>
            <h2 className='heading-secondary'>My Skills</h2>
        </div>
        <div className='skills-content'>
            <div className='skills-box'>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>HTML5/SCSS DOM<span >90%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>Javascript/ES6 JQuery Node.js React.js<span>75%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>Object/Event-Oriented Programming JSON JWT Authentication<span>87%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>RESTful API development<span>84%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
            </div>
            <div className='skills-box'>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>PHP Wordpress API & CLI<span>54%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>Java/Spring<span>75%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>SQL, MySQL, NoSQL, PostgreSQL<span>81%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
                <div className='progress'>
                    <h3 className='paragraph progress__title'>Version Control, NPM, Git, GitHub, CI/CD<span>72%</span></h3>
                    <div className='progress__bar'><span className='progress__fill'></span></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills