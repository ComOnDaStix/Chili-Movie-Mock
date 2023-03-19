import Link from "next/link";
import Image from "next/image";
import styles from "../styles/TopRatedMovieCard.module.css";

const TopRatedTvCard = ({ tvShow }) => {
  return (
    <Link href={`/TvShow/${tvShow.id}`} className={styles.link}>
      <div className={styles.CardContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
          width={200}
          height={300}
          className={styles.movieImage}
          alt="tv show"
        />
        <h4 className={styles.title}>{tvShow.name}</h4>
        <p className={styles.date}>{tvShow.first_air_date}</p>
      </div>
    </Link>
  );
};

export default TopRatedTvCard;