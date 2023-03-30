import styles from "../../../styles/TopRatedDetails.module.css";
import axios from "axios";
import Image from "next/image";
import { server } from "@/confing";
import ReactPlayer from "react-player"; // Import react-player

const NowPlayingDetails = ({ movie, videoKey }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.image}>
          <div className={styles.h1Wrapper}>
            <h1 className={styles.h1}>{movie.title}</h1>
          </div>
          <div className={styles.overviewContainer}>
            <h3 className={styles.overview}>{movie.overview}</h3>
          </div>
          <div className={styles.imageWrapper}>
            {videoKey ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoKey}`}
                width={1000}
                height={600}
                className={styles.image}
                controls
              />
            ) : (
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={1000}
                height={600}
                className={styles.image}
                alt={movie.title}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.date}>
          Release Date: <span>{movie.release_date}</span>
        </h4>
        <h4 className={styles.genres}>
          Genres:{' '}
          <span>{movie.genres.map((genre) => genre.name).join(', ')}</span>
        </h4>

        <h4 className={styles.runtime}>
          Runtime: <span>{movie.runtime}</span>
        </h4>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`);
  const movie = res.data;

  const videoRes = await axios(`${server}/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`);
  const videoKey = videoRes.data.results?.[0]?.key || null; 

  return {
    props: { movie, videoKey },
  };
}

export async function getStaticPaths() {
  const res = await axios(`${server}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default NowPlayingDetails;
