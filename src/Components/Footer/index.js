import "./footer.scss";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        Copyright © 2023 Rita Tang. All rights reserved.
      </p>
      <FooterMenu />
    </footer>
  );
};

export default Footer;
