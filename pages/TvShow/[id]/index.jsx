import styles from "../../../styles/TopRatedDetails.module.css";
import axios from "axios";
import Image from "next/image";
import { server } from "@/confing";
import ReactPlayer from "react-player";

const TvShowDetail = ({ tvShow, videoKey }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <div className={styles.image}>
          <div className={styles.h1Wrapper}>
            <h1 className={styles.h1}>{tvShow.name}</h1>
          </div>
          <div className={styles.overviewContainer}>
            <h3 className={styles.overview}>{tvShow.overview}</h3>
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
              <>
                <Image
                  src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
                  width="100"
                  height="auto"
                  className={styles.image2}
                  alt={tvShow.name}
                />
               
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.date}>
          First Air Date: <span>{tvShow.first_air_date}</span>
        </h4>
        <h4 className={styles.genres}>
          Genres:{' '}
          <span>{tvShow.genres.map((genre) => genre.name).join(', ')}</span>
        </h4>

        <h4 className={styles.runtime}>
          Runtime: <span>{tvShow.episode_run_time[0]}</span> minutes
        </h4>
      </div>
    </div>
  );
};


export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`);
  const tvShow = res.data;

  const videoRes = await axios(`${server}/tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`);
  const videoKey = videoRes.data.results?.[0]?.key;

  return {
    props: { tvShow, videoKey },
  };
}

export async function getStaticPaths() {
  const res = await axios(`${server}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tvShows = res.data.results;

  const ids = tvShows.map((tvShow) => tvShow.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default TvShowDetail;