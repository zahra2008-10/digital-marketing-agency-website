import "./style/about.css";
import Footer from "../components/footer/Footer";
import { easeOut, motion } from "motion/react";
function About() {
  return (
    <>
      <section className="section-about">
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          className="label"
        >
          ABOUT NEXORA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
        >
          We Create Digital Experiences <br />
          That Move Brands Forward.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          className="text-about"
        >
          We are a creative digital agency helping ambitious businesses grow
          through strategy, design, technology, and meaningful digital
          experiences.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
        >
          Let's Work Together ↗
        </motion.button>
      </section>
      {/* ****************end of one section *********************************** */}

      <section className="section-2-about">
        <div>
          <motion.h2
            initial={{ opacity: 1, x: -130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            Where Strategy <br /> Meets Creativity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            At Nexora Digital, we combine creative thinking with modern
            technology to help businesses build stronger brands, connect with
            their audiences, and create lasting digital impact.
          </motion.p>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, x: 130 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            src="https://images.openai.com/static-rsc-4/zWIn5uU5I59DQhcjpw1cfKjRQBHtt0K7tukS_3ytoKIKhQJQXctTeBTTriPW6mCJZKME7S_WG0P7b4wDLlAATupgKT_FW5IAVP1-Z1I7tacOpuC85w1fpDHzKyUT-TCcybKxFcrlQ8MB5G2Roy_cdGiEqDrY0M6YHxE12laGNvoM3wLImzxgFbFJgvo4DZyg?purpose=fullsize"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
export default About;
