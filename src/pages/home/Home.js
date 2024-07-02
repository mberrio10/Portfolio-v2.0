import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Languages from "../../components/languages/Languages";
import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";
import { projectsInfo } from "../../components/projects/ProjectData";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <section className="about-section">
          <div className="u-text-center u-margin-bottom-big">
            <h2 className="about-heading">
              <span className="about-heading--main">About</span>
              <span className="about-heading--sub">Myself</span>
            </h2>
          </div>
          <div className="content u-text-center">
            <div className="about-img u-margin-bottom-small">
              <img
                className="about-img__photo"
                src="/images/Mike.png"
                alt="Profile"
              />
            </div>
            <div className="description">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Full-Stack Engineer
              </h3>
              <p className="paragraph">
                Welcome! I`m a Full Stack Developer with a strong background in
                both front-end and back-end technologies. My expertise includes
                HTML/CSS, JavaScript, React.js, Node.js, Java, Spring Boot, and
                MongoDB. I`ve spent the last 6 years working on various
                projects, developing a deep understanding of web development and
                Agile methodologies. In my previous roles, I`ve had the
                opportunity to work in dynamic teams, develop secure, reliable,
                scalable software solutions, and write custom code or scripts to
                automate infrastructure, monitoring services, and test cases.
                I`m also experienced in customer service, which has honed my
                problem-solving skills and ability to understand and meet
                diverse customer needs. I`m excited about the opportunity to
                leverage my skills and experiences as a Software Engineer, where
                I can contribute to creating secure, reliable, scalable software
                solutions and continue to learn and grow.
              </p>
            </div>
          </div>
        </section>
        <Services />
        <Languages />
        <Skills />
        <Projects theData={projectsInfo} />
      </main>
    </>
  );
};

export default Home;
