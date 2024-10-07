import { BG_URL, GPT_MODE_IMG } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

import {  useSelector } from "react-redux";



const GPTSearch = () => {
  // const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  const movieResults = useSelector((store) => store?.gpt?.movieResults);
  


  return (
      <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen bg-cover bg-no-repeat" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  
  );
};

export default GPTSearch;
