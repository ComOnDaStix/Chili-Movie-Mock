import axios from "axios";
import { server } from "@/confing";
import TopRatedTv from "../components/TopRatedTv";

const tvShows = ({ tvShows }) => {
  return <TopRatedTv tvShows={tvShows} />;
};

export default tvShows;

export async function getStaticProps() {
  const res = await axios(`${server}/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const tvShows = res.data;

  return {
    props: { tvShows: tvShows.results } 
  }
}
