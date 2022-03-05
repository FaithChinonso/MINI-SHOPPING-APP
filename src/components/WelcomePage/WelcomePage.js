import classes from "./WelcomePage.module.css";
import hero from "../../assets/image/hero.png";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const WelcomePage = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.heroImage}>
      <div className={classes.heroTitle}>
        <div className={classes.heroTitleText}>ShopFay</div>
        <div className={classes.socailIcons}>
          <FaTwitter />
          <FaWhatsapp />
          <FaFacebook />
          <FaLinkedin />
        </div>
      </div>

      <img src={hero} alt="Beautiful Woman with Afro" />
      <div className={classes.heroButtons}>
        <div className={classes.heroButtonGroupOne}>
          <button className={classes.heroButtonShop} onClick={props.onShopOpen}>
            SHOP NOW
          </button>
        </div>
        <div className={classes.heroButtonGroupTwo}>
          <button
            className={classes.heroButtonAbout}
            onClick={props.onAboutOpen}
          >
            ABOUT US
          </button>
        </div>
      </div>
      <div className={classes.heroFooter}>
        <div className={classes.footerCopyright}>
          © ShopFay <span>{year}</span>, All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
