import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.lineOne}>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>About Us</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>DMCA</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>Privacy Policy</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>Terms of Service</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>Disclaimer</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>Contact Us</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>Sitemap</li>
        </Link>
        <Link href={"/"} className={styles.link}>
            <li className={styles.listItems}>99reel</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
