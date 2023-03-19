import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.imageContainer}>
        <Link href="/">
        <Image src={"/movielogo.png"} width={223} height={58} />
        </Link>
      </div>

      <ul className={styles.list}>
        <Link className={styles.link} href="/">
          <li className={styles.listItems}>Home</li>
        </Link>
        <Link className={styles.link} href="/tvShows">
          <li className={styles.listItems}>TV Shows</li>
        </Link>
        <Link className={styles.link} href="/NowPlaying">
          <li className={styles.listItems}>Now Playing</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
