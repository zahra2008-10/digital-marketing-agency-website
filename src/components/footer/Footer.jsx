import "./footer.css";
import { easeOut, motion } from "motion/react";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="head-footer">
            <motion.a
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              href="/"
              className="logo"
            >
              <span className="sp-1">Nexora</span>
              <span className="sp-2">Digital</span>
            </motion.a>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
            >
              Digital experiences that <br /> move brands forward.
            </motion.p>
          </div>

          <div c2lassName="footer-div">
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
            >
              Navigation
            </motion.h4>
            <ul>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="one"
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="two"
              >
                About Us
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="three"
              >
                Service
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="one"
              >
                Our Work
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="two"
              >
                Contact
              </motion.li>
            </ul>
          </div>
          {/* ************************************************************** */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
            >
              Service
            </motion.h4>
            <ul>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="one"
              >
                Social Media
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="two"
              >
                Digital Marketing
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="three"
              >
                Branding
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="one"
              >
                Web Development
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="two"
              >
                SEO
              </motion.li>
            </ul>
          </div>
          {/* ************************************************************************ */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: easeOut }}
            >
              Contact
            </motion.h4>
            <ul>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="one"
              >
                hello@nexora.com
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="two"
              >
                0796957833
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: easeOut }}
                className="three"
              >
                Kabul, Afghanistan
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="end-footer">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            © 2026 Nexora Digital. All rights reserved.
          </motion.p>
          <div className="spans">
            <motion.span
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="ins"
            >
              Instagram
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="link"
            >
              LinkedIn
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: easeOut }}
              className="face"
            >
              Facebook
            </motion.span>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
