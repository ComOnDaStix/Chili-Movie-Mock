import styles from "../styles/TopRatedMovies.module.css"
import TopRatedMovieCard from "../components/TopRatedMovieCard"

const TopRatedMovies = ({ movies }) => {
    return (  
      <div className={styles.container}>
        <h1 className={styles.TopRatedH1}>Top Rated Movies</h1>
        <div className={styles.moviesContainer}>
        {movies.map(movie => <TopRatedMovieCard movie={movie} key={movie.id}/>)}
        </div>
       
      </div>
    );
  }
   
  export default TopRatedMovies;