import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/profile.png";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Prince Pal
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Competitive Programmer", "A creater"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
              cursor: "",
            }}
          />
          <div>
            <a href="mailto:princepal9120@gmail.com">Hire me </a>
            <a href="#work">
              Projects <BsArrowUpRight />{" "}
            </a>
          </div>
          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +<span>500</span>
              </p>
              <span>Projects made by me</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>princepal9120@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Prince" />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;

