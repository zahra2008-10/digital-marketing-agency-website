import card from "./us-card";
import "./why.css";
import { easeOut, motion } from "motion/react";

function WhyUs() {
  return (
    <section className="why-us">
      <div className="why-us-content">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          className="why-us-label"
        >
          WHY NEXORA
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
        >
          We Don't Just Create. We Make an Impact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
        >
          We combine creativity, strategy, and technology to help brands stand
          out, connect with their audiences, and achieve meaningful digital
          growth.
        </motion.p>
      </div>

      <div className="why-us-cards">
        {card.map((BoxIcon) => {
          const Icon = BoxIcon.icon;

          return (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="why-us-card"
              key={BoxIcon.id}
            >
              <div className="feature-icon">
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <h3>{BoxIcon.title}</h3>

              <p>{BoxIcon.paragraph}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;
