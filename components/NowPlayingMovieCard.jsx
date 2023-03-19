import Link from "next/link";
import Image from "next/image";
import styles from "../styles/TopRatedMovieCard.module.css";

const NowPlayingMovieCard = ({ movie }) => {
  return (
    <Link href={`/NowPlaying/${movie.id}`} className={styles.link}>
      <div className={styles.CardContainer}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={200}
          height={300}
          className={styles.movieImage}
          alt="movie"
        />
        <h4 className={styles.title}>{movie.title}</h4>
        <p className={styles.date}>{movie.release_date}</p>
      </div>
    </Link>
  );
};

export default NowPlayingMovieCard;