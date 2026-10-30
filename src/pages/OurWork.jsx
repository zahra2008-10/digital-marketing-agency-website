import Footer from "../components/footer/Footer";
import "./style/work.css";
import boxs from "./work";
function OurWork() {
  return (
    <>
      <section className="section-1-work">
        <p className="label-work">OUR WORK</p>
        <h1>Work That Speaks for Itself.</h1>
        <div>
          <p className="text-work">
            Explore some of the digital experiences, brands, and creative
            solutions
          </p>
          <p className="text-work">
            we've designed to help businesses stand out.
          </p>
        </div>
      </section>
      {/* *********************************************************************** */}

      <section>
        <div>
          {boxs.map((cardWok) => {
            return (
              <div key={cardWok.id}>
                <div>
                  <img src={cardWok.Image} alt={cardWok.title} />
                </div>
                <span>{cardWok.title}</span>
                <p>{cardWok.category}</p>
                <p>{cardWok.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default OurWork;
