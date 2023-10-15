import "./home.scss";
import { useState, useEffect, useRef } from "react";
import { TbBrandLinkedin, TbBrandGithub, TbArrowBackUp } from "react-icons/tb";
import { checkVisited } from "../../utils";
import Typewriter from "typewriter-effect";
import plant from "../../assets/images/plant.svg";
import shadow from "../../assets/images/shadow.svg";

const Home = () => {
  const [visited, setVisited] = useState(checkVisited);
  const [minCard, setMinCard] = useState(false);
  const textonShadow = useRef(null);

  const handleMinCard = (e) => {
    e.stopPropagation();
    setMinCard(false);
  };

  const options = {
    autoStart: true,
    delay: 50,
  };
  const text =
    "<h1><span>Hi there! I'm</span><span>Rita Tang, a</span><span>full stack</span><span>developer</span><span>based in<span><span>Markham, ON.</span></h1><p><span>I like turning innovative ideas</span><span>to life and creating apps</span><span>that simplify everyone's life.</span><span>Explore my portfolio to see</span><span>how I combine my technical</span><span>skills and creativity to build</span><span>unique and enjoyable</span><span>online experiences.</span></p>";

  useEffect(() => {
    if (textonShadow.current) {
      textonShadow.current.innerHTML = text;
    }
  }, [visited]);

  return (
    <section className={`home-page ${visited ? "show-bg" : ""}`}>
      <div className="wall wall-mobile"></div>
      <div className="svg-container">
        {visited ? (
          <div className="shadow-text" ref={textonShadow}></div>
        ) : (
          <>
            <button className="skip-btn" onClick={() => setVisited(true)}>
              Skip
            </button>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(text)
                  .callFunction(() => setVisited(checkVisited(true)))
                  .start();
              }}
              options={options}
            />
          </>
        )}

        <img
          className={`shadow ${visited ? "show-shadow" : ""}`}
          src={shadow}
          alt=""
        />
        {visited && (
          <div className="table">
            <svg
              className="tabletop"
              height="200px"
              width="200px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <g id="cashier">
                <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                  <stop className="main-stop" offset="0%" />
                  <stop className="alt-stop" offset="5%" />
                  <stop className="alt-stop" offset="92%" />
                  <stop className="main-stop" offset="100%" />
                </linearGradient>
                <linearGradient id="gradient-2" x1="0" x2="0" y1="0.9" y2="0">
                  <stop className="main-stop" offset="0%" />
                  <stop className="alt-stop" offset="25%" />
                </linearGradient>
                <rect
                  className="receipt"
                  x="300"
                  y="170"
                  width="100"
                  height="150"
                />
                <rect
                  x="40"
                  y="200"
                  rx="5"
                  ry="5"
                  width="410"
                  height="200"
                  fill="url(#gradient-1)"
                />
                <rect
                  x="20"
                  y="400"
                  rx="10"
                  ry="10"
                  width="450"
                  height="100"
                  fill="url(#gradient-2)"
                />
                <rect x="130" y="160" width="30" height="40" fill="#959CB5" />
                <rect
                  x="40"
                  y="70"
                  rx="10"
                  ry="10"
                  width="200"
                  height="90"
                  fill="url(#gradient-1)"
                />
                <rect
                  x="58"
                  y="90"
                  rx="10"
                  ry="10"
                  width="160"
                  height="50"
                  fill="#191919"
                />
                <text x="65" y="125" className="cashier-display">
                  Welcome
                </text>
              </g>
            </svg>
            <div className="business-card-wrapper">
              <div
                className={`business-card text-center ${
                  minCard ? "" : "shrink-card"
                }`}
                aria-label="Enlarge card"
                onClick={() => setMinCard(true)}
              >
                {minCard && (
                  <button
                    className="icon-btn card__return-btn"
                    aria-label="Minimize card"
                    onClick={handleMinCard}
                  >
                    <TbArrowBackUp />
                  </button>
                )}
                <h2>Rita Tang</h2>
                <h3>Full Stack Developer</h3>
                <ul className="card__status">
                  <li>Looking for an Employer</li>
                  <li>Markham. ON. Canada</li>
                </ul>
                <ul aria-label="social media list" className="social-list">
                  <li className="social-item">
                    <a
                      href="https://www.linkedin.com/in/ritatanght/"
                      aria-label="LinkedIn"
                    >
                      <TbBrandLinkedin />
                    </a>
                  </li>
                  <li className="social-item">
                    <a href="https://github.com/ritatanght" aria-label="GitHub">
                      <TbBrandGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img className="table__plant" src={plant} alt="" />
          </div>
        )}
      </div>
      <div className="wall wall-right"></div>
    </section>
  );
};

export default Home;
