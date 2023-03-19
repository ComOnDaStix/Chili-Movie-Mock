import axios from "axios";
import { server } from "@/confing";
import NowPlayingMovies from "../components/NowPlayingMovies";

const NowPlaying = ({ movies }) => {
  return <NowPlayingMovies movies={movies} />;
};

export default NowPlaying;

export async function getStaticProps() {
  const res = await axios(`${server}/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies: movies.results }
  };
}