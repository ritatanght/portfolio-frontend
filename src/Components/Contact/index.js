import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  const [notification, setNotification] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
      try {
        const result = await emailjs.sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        );
        if (result.text === "OK") {
          form.current.reset();
          setMsgSent(true);
        }
      } catch (error) {
        console.log(error.text);
      }
    } else {
      setNotification("All fields are required.");
      setTimeout(() => setNotification(""), 4000);
    }
  };

  return (
    <section className="contact-page">
      <h2 className="text-center">Contact</h2>
      <div className="contact__content">
        <div className="contact__text">
          <p>
            Thank you for visiting my portfolio! Whether you have any inquiries,
            project ideas, or simply want to discuss common interests we share,
            please feel free to reach out through social media or by filling out
            the contact form. I look forward to hearing from you!
          </p>
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
        {msgSent ? (
          <p className="contact__sent text-center">
            Message Sent <RiMailSendLine />
          </p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div
              className={`notification text-center ${
                notification ? "notify" : ""
              }`}
            >
              {notification}
            </div>

            <label htmlFor="name" className="label">
              Name
            </label>
            <input id="name" name="name" required />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea id="message" name="message" required />
            <input type="submit" value="Send" />
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
