```jsx
import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-cta">
          <h2 className="footer-title">{t('footer.cta.title')}</h2>
          <p className="footer-subtitle">{t('footer.cta.subtitle')}</p>
          <button className="footer-btn">{t('footer.cta.button')}</button>
        </div>

        <div className="footer-content">
          <div className="footer-col">
            <h3>John Doe</h3>
            <p>{t('footer.about.description')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.links.title')}</h4>
            <a href="#work">{t('footer.links.work')}</a>
            <a href="#about">{t('footer.links.about')}</a>
            <a href="#contact">{t('footer.links.contact')}</a>
          </div>

          <div className="footer-col">
            <h4>{t('footer.social.title')}</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Dribbble</a>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact.title')}</h4>
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
  );
};

export default Footer;
```