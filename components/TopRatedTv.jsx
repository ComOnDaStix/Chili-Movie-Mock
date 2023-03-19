import styles from "../styles/TopRatedMovies.module.css";
import TopRatedTvCard from "../components/TopRatedTvCard";

const TopRatedTv = ({ tvShows }) => {
  console.log('tvShows:', tvShows)
  return (
    <div className={styles.container}>
      <h1 className={styles.TopRatedH1}>Top Rated TV Shows</h1>
      <div className={styles.moviesContainer}>
        {tvShows.map(tvShow => (
          <TopRatedTvCard tvShow={tvShow} key={tvShow.id} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedTv;