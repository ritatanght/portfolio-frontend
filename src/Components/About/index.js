import "./about.scss";import { traits, tools, photos } from "../../data";

const About = () => {
  const traitsElement = traits.map((trait) => <li key={trait}>{trait}</li>);
  const toolsElement = tools.map((tool, ind) => (
    <li
      className="icon"
      key={tool.label === "Python" ? `Python_${ind}` : tool.label}
      title={tool.label}
      style={{ color: tool.color }}
      aria-label={tool.label}
      aria-hidden={tool.label === "Python" && tool.color === "#ffde57"}
    >
      {tool.icon}
    </li>
  ));
  // randomly show one of two photos
  const photosSrc = Math.random() < 0.5 ? photos[0] : photos[1];
  return (
    <section className="about-page">
      <h2 className="text-center">About Me</h2>
      <div className="about-content">
        <div className="about__form-list">
          <h3 className="heading">Name</h3>
          <span>Rita Tang</span>
          <h3 className="heading">Location</h3>
          <span>Markham, Ontario, Canada</span>
          <h3 className="heading">Language</h3>
          <span>English, Chinese (Cantonese & Mandarin)</span>
        </div>
        <div className="photo-container">
          <img className="photo" src={photosSrc} alt="Rita Tang smiling" />
        </div>
        <div className="content__paragraphs-container">
          <p>
            Thanks for taking the time to learn a little bit about me! I
            graduated from the University of Toronto and have a background as a
            risk and compliance assistant manager in the banking industry, where
            I developed my skills in analytical thinking, attention to detail,
            and problem-solving. After moving back to Canada due to some family
            circumstances, I decided to pursue a new career in technology. I'm
            thrilled by the endless possibilities that coding and web
            development offer, and I enjoy bringing ideas to life through code.
          </p>
          <p>
            Aside from coding, I'm a foodie and coffee enthusiast, always
            seeking out new culinary experiences and recipes to create
            mouthwatering cuisines. I also love travelling to explore different
            cultures. In my free time, you'll find me solving jigsaw puzzles,
            playing the piano, creating crafts, and enjoying video games -
            especially co-op games.
          </p>
          <p>
            With a strong passion for learning, a keen eye for detail, and the
            ability to collaborate, I believe I can make a valuable contribution
            to any team. Feel free to reach out if you'd like to work together
            on your next project.
          </p>

          <ul className="about__adjective-list">{traitsElement}</ul>
        </div>
        <div className="about__tools-container">
          <h3 className="text-center">ToolKit</h3>
          <ul className="tool-list">{toolsElement}</ul>
        </div>
      </div>
    </section>
  );
};

export default About;
