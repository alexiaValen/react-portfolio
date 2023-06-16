import React from 'react';
import '../styles/Section.css';

const styles = {
  sectionStyles: {
    background: 'white',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Full Stack Web Developer</h2>
      <p>
      As a Full-Stack developer I am capable of working on both front-end and back-end development processes. I can design, develop, and maintain fully-fledged and functioning platforms with databases or servers. These servers do not need other third-party applications to build an entire system from scratch.
      </p>
      <p>
      I have a functional knowledge of all the layers of software development. I can take an idea and turn it into a finished product independently. I know multiple languages, especially web languages (HTML, CSS, JavaScript), software development approaches, modern concepts, and various tools that are needed to build a full-fledged web/mobile app.
      </p>
      <p>
      <h3>Roles And Responsibilites I have accomplished:</h3>
      <li>Build dynamic, visually-attractive, end-to-end, and innovative software product/apps including front-end and back-end</li>
      <li>Able to design the user experience, user interaction, responsive design, and complete architecture</li>
      <li>Able to work with databases, servers, APIs, version control systems, and third-party apps</li>
      <li>Provide insights on continuous improvement and add/remove functionality as per needs</li>
      <li>Design strategy for continuous enhancement, performance optimization, stability, and scalability</li>
      <li>Stay updated with new tools, frameworks, approaches, and architectures in the development world</li>
      <li>Transform business needs into a finished product from conception to implementation</li>
      <li>Ensure cross-platform compatibility and fixing issues during test and production phases</li>

      </p>
    </section>
  );
}

export default Section;
