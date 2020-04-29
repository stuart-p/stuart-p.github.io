import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <form action="https://formspree.io/xyywpnww" method="POST">
              <label>
                Your email:
                <input type="text" name="_replyto" required />
              </label>
              <label>
                Your message:
                <textarea name="message" required></textarea>
              </label>

              <button className="cta-btn cta-btn--resume" type="submit">
                {btn}
              </button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
