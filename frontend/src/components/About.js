import React from 'react'
import "./About.css";
const About = () => {

  return (
    <div>
      <header>
        <h1>eNoteBook App</h1>
        <p>Your Digital Notebook Solution</p>
      </header>

      <main>
        <section>
          <h2>About eNoteBook App</h2>
          <p>
            eNoteBook App is a feature-rich and user-friendly eNotebook
            application built on the powerful MERN stack (MongoDB, Express.js,
            React.js, Node.js). Whether you're a student, professional, or
            anyone in need of an organized digital space, our app provides a
            seamless platform for managing your notes efficiently.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Intuitive User Interface</li>
            <li>Secure and Scalable</li>
            <li>CRUD Operations (Create, Read, Update, Delete)</li>
            <li>Collaboration</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        <section>
          <h2>Get Started</h2>
          <p>
            Ready to revolutionize the way you take notes?{" "}
            <a href="/signup">Sign up</a> now to start creating, organizing, and
            collaborating on your digital notes. Join the growing community of
            users who have discovered the power of eNoteBook App.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Reach out to
            our support team at{" "}
            <a href="mailto:roshan099999@gmail.com">roshan099999@gmail.com</a>{" "}
            or visit our <a href="/">FAQ page</a> for commonly asked questions.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 eNoteBook App</p>
      </footer>
    </div>
  );
}

export default About