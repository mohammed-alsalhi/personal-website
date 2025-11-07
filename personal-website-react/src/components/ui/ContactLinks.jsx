import { EmailIcon, GitHubIcon, LinkedInIcon } from '../../assets/icons';

const ContactLinks = () => {
  return (
    <div className="contacts-section">
      <div className="contact-links-sidebar">
        <a href="mailto:mohammed@mohammedalsalhi.com" className="contact-item" aria-label="Email">
          <EmailIcon />
        </a>
        <a href="https://github.com/mohammed-alsalhi" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/mohammedalsalhi/" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
