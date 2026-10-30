import menu from "./menu";
import "./Header.css";
import { useState } from "react";
import { easeOut, motion } from "motion/react";
function Header() {
  const [item, setItem] = useState(false);
  return (
    <>
      <header className="header">
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          href="/"
          className="logo"
        >
          <span className="sp-1">Nexora</span>
          <span className="sp-2">Digital</span>
        </motion.a>

        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          className="nav"
        >
          <ul className={item ? "nav-list active" : "nav-list"}>
            {menu.map((items) => {
              return (
                <motion.li whileHover={{ scale: 1.2 }} key={items.id}>
                  <a href={items.link}>{items.name}</a>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: easeOut }}
          href="3contact"
          className="header-btn"
        >
          Let's Talk <span>↗</span>
        </motion.a>
        <div className="burger-menu" onClick={() => setItem(!item)}>
          {" "}
          ☰ <span>menu</span>
        </div>
      </header>
    </>
  );
}
export default Header;
