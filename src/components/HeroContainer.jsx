import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const HeroContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const loading =useSelector((store)=>store?.movies?.loading)
  
  if (!movies) return;
  const mainMovie = movies[2];
  console.log(mainMovie);

  const {original_title,overview,id }=mainMovie
  return (
    <>
    <div className="pt-[10%] md:py-0 md:-mt-24 bg-black">
     <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
      
    </>
  )
}

export default HeroContainer;
