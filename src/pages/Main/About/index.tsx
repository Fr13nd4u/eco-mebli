import React, { useEffect } from "react";
import Aos from "aos";

import logo from "../../../assets/img/logo.png";

import "aos/dist/aos.css";
import "./About.scss";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1600, easing: "ease-in-out", offset: 0 });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="about">
          <h2>
            хто
            <br /> ми?
          </h2>

          <div className="vl"></div>

          <div style={{ marginBottom: "60px" }}>
            <div
              className="about-item"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <div className="about-item_circule"></div>
              <div className="about-item-description">
                <h5 className="about-item-description_subtitle">
                  Ми звичайнісінькі люди, з незвичною пристрастю до природи та
                  домашнього затишку. Нас поєднує погляд на світ та потяг до
                  прекрасного. Віримо, що світ довкола завжди ліпший коли ти з
                  ним у гармонії.
                </h5>
              </div>
            </div>

            <div
              className="about-item"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <div className="about-item_circule"></div>
              <div className="about-item-description">
                <h3 className="about-item-description_title">Що робимо?</h3>
                <p className="about-item-description_text">
                  Займаємось індивідуальним виготовленням меблів <br /> у
                  індустріальному стилі. Використовуємо <br /> виключно
                  екологічні матеріали, які не залишають <br /> по собі шкоди
                  для вашого здоров'я та довкілля.
                </p>
              </div>
            </div>

            <div
              className="about-item"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <div className="about-item_circule"></div>
              <div className="about-item-description">
                <h3 className="about-item-description_title">Для чого?</h3>
                <div className="about-item-description-withLogo">
                  <h6>
                    Гармонія з навколишнім світом – те що потрібно кожному. Наша
                    мета полягає в тому аби привносити цю гармонію у ваші життя
                    та оселі.
                  </h6>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>

            <div
              className="about-item"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <div className="about-item_circule"></div>
              <div className="about-item-description">
                <h3 className="about-item-description_title">Як робимо?</h3>
                <p className="about-item-description_text">
                  Використовуючи відновлювальний матеріал, та <br /> власний
                  досвід ми створюємо речі які <br /> організовують ваш життєвий
                  простір у одну міцну <br /> та гармонічну екосистему.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
