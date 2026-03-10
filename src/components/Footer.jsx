import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cta">
          <h2 className="footer-title">Let's Create Something Amazing</h2>
          <p className="footer-subtitle">
            Ready to bring your vision to life? Let's talk about your next project.
          </p>
          <button className="footer-btn">Start a Project →</button>
        </div>

        <div className="footer-content">
          <div className="footer-col">
            <h3>John Doe</h3>
            <p>Creative Developer & Digital Artist</p>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Dribbble</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@johndoe.com">hello@johndoe.com</a>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 John Doe. All rights reserved.</p>
          <p>Designed & Developed with 💚</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
