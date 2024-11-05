import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import '../assets/styles/components/_about.scss';

const About = () => {
  const skills = [
    { icon: <FaHtml5 />, level: "90%" },
    { icon: <FaCss3Alt />, level: "80%" },
    { icon: <FaJs />, level: "50%" },
    { icon: <FaReact />, level: "70%" },
    { icon: <FaNodeJs />, level: "40%" },
    { icon: <SiExpress />, level: "50%" },
    { icon: <SiMongodb />, level: "45%" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about_container">
        <div className="about_left">
          <div className="about_left_skills">
            <h3>Mes Compétences</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <div className="skill">
                    <span className="skill_icon">{skill.icon}</span>
                    <span className="skill_name">{skill.name}</span>
                    <div className="skill_bar">
                      <div
                        className="skill_level"
                        style={{ width: isVisible ? skill.level : "0%" }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="about_left_cv">
            <h3 className='about_left_cv_title'>Mon CV</h3>
            <button>Voir mon CV</button>
          </div>
        </div>
        <div className="about_right">
          <h2>Présentation</h2>
          <p>Je me présente, <strong>MARTIAL HAMCHA</strong>, développeur web junior ayant un parcours atypique et riche en expériences. Avant de m’engager pleinement dans le développement web, j’ai eu l’opportunité de travailler dans différents secteurs, notamment en tant que militaire, mécanicien et électricien. Ces expériences variées ont renforcé ma capacité d’adaptation et mon esprit analytique, des qualités qui me servent aujourd’hui dans le monde du développement.</p>

          <p>Depuis toujours, je suis attiré par la création de sites internet. Cependant, ce n'est que récemment que j’ai eu l’occasion de me former dans ce domaine qui me passionne. J’ai suivi un programme intensif de six mois en développement web, où j’ai acquis des compétences solides en HTML, CSS, JavaScript, Node.js, Express, MongoDB et le SEO. Ce portfolio est le fruit de mon parcours et représente mon premier projet complet.</p>

          <p>Aujourd’hui, je suis déterminé à continuer d’apprendre et à approfondir mes connaissances. Mon objectif est d’acquérir de l’expérience au sein d’une équipe dynamique, avec la possibilité, à terme, de développer mes propres projets. Bien que je ne me sois pas encore fixé sur une carrière freelance, c’est une option que je considère sérieusement pour l’avenir.</p>
          <p><em>Ma vision</em> : Concevoir des expériences utilisateur intuitives et efficaces, tout en continuant à évoluer en tant que développeur.</p>
        </div>
      </div>
      <div className="gradient_about-1"></div>
      <div className="gradient_about-2"></div>
    </section>
  );
};

export default About;