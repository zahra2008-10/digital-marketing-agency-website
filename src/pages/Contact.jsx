import tiktok from "../assets/icons/tiktok-brands-solid-full.svg";
import x from "../assets/icons/x-twitter-brands-solid-full.svg";
import instagram from "../assets/icons/square-instagram-brands-solid-full (1).svg";
import youtub from "../assets/icons/youtube-brands-solid-full.svg";
import email from "../assets/icons/envelope-regular-full.svg";
import phone from "../assets/icons/phone-solid-full (1).svg";
import "./style/contact.css";
import { easeOut, motion } from "motion/react";
import Footer from "../components/footer/Footer";
function Contact() {
  return (
    <>
      <section className="section-contact">
        <div className="content-contact">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="icon-group"
          >
            <img src={tiktok} alt="" className="icon" />
            <img src={x} alt="" className="icon" />
            <img src={instagram} alt="" className="icon" />
            <img src={youtub} alt="" className="icon" />
          </motion.div>
          {/* *****************************************8 */}

          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            LET'S GET IN TOUCH
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            <p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="text-contact"
            >
              Project, have a question, or just want to connect, drop
            </p>
            <p className="text-contact">
              me a message below and l'll get back to soon.
            </p>
            <p className="text-contact">
              Let's get in touch! Whether you'r ready to start a
            </p>
          </motion.div>
          {/* ************************************************************ */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="icons"
          >
            <div className="icon-email">
              <img src={email} alt="" className="icon" />
              <p>info@example.com</p>
            </div>
            <div className="icon-phone">
              <img src={phone} alt="" className="icon" />
              <p>(555) 123-4567</p>
            </div>
          </motion.div>
        </div>
        {/* *********************************************************** */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
        >
          <form>
            <div>
              <label>Name</label>
              <br />
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label>Subject</label>
              <br />
              <input type="text" placeholder="Collaboration request" />
            </div>
            <div>
              <label>Message</label>
              <br />
              <input type="text" placeholder="Let's make something happen" />
            </div>
            <button>Send message</button>
          </form>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
export default Contact;
