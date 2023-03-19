import styles from "../styles/TopRatedMovies.module.css";
import NowPlayingMovieCard from "./NowPlayingMovieCard";

const NowPlayingMovies = ({ movies }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.TopRatedH1}>Now Playing Movies</h1>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => (
          <NowPlayingMovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingMovies;