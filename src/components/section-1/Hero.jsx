import "./hero.css";
import { motion } from "motion/react";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="hero-label"
        >
          DIGITAL MARKETING · CREATIVE · TECHNOLOGY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
          className="hero-title"
        >
          <span className="spn-1"> We Craft Digital</span> <br />{" "}
          <span className="spn-2"> Experiences the World</span> <br />
          <span className="spn-3">Has not Seen.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="hero-description"
        >
          We help ambitious brands grow through creative <br /> strategy,
          digital marketing, and exceptional web <br /> experiences that turn
          ideas into meaningful results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="hero-buttons"
        >
          <motion.button
            whileTap={{ scale: 0.8, opacity: 0.5 }}
            className="primary-btn"
          >
            Start a Project ↗
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.8, opacity: 0.5 }}
            className="secondary-btn"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="hero-visual"
      >
        <img
          src="https://www.sdim.nl/app/uploads/2026/02/sdim-collegas-oscar-van-wijk-dirko-borst-1536x1024.jpg"
          alt=""
          className="hero-img"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
