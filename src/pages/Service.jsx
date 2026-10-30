import "./style/service.css";
import Services from "../components/section-2/Services";
import Footer from "../components/footer/Footer";
import { easeOut, motion } from "motion/react";
function Service() {
  return (
    <>
      <section className="section-1-service">
        <div className="service-content">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="label"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
          >
            Digital Solutions Built to Move <br /> Your Business Forward.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            className="parag-service"
          >
            From strategy to execution, we create digital solutions <br /> that
            help ambitious brands grow, connect, and stand out.
          </motion.p>
        </div>
        {/* ********************************************************************* */}

        <div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
            src="https://images.openai.com/static-rsc-4/_grevuKcih3ZcQuOhk2mdUZtUfNL3Pa6KLZU7P2Brj_ctjUzWyZg0kkOGOMU4rIGkMFvTIEO-L9lTxNF6UntBWUC7QpaqQGfef8dF5_NoCvW2omPH4FLu_B6XzjnNDiAkFNaU9-6tWs2llAE2I-iH8xs4pem22qQi4RXvWjnfO4?purpose=inline"
            alt=""
          />
        </div>
      </section>
      <Services />
      <Footer />
    </>
  );
}
export default Service;
