import cards from "./service";
import "./Services.css";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-heading">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="services-label"
          >
            WHAT WE DO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            Our <span>Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="services-intro"
          >
            Creative solutions and digital strategies to help your business grow
            and stand out.
          </motion.p>
        </div>

        <div className="services-grid">
          {cards.map((boxs) => (
            <motion.div
              initial={{ opacity: 0, y: 130 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="service-card"
              key={boxs.id}
            >
              <div className="service-image">
                {boxs.Image && <img src={boxs.Image} alt={boxs.title} />}
              </div>

              <div className="service-content">
                <span className="service-number">0{boxs.id}</span>

                <h3>{boxs.title}</h3>
                <p>{boxs.paragraph}</p>

                <a href="/contact" className="service-link">
                  Let's Talk <span>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
