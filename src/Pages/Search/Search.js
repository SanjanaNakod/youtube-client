import React from "react";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
// import './Search.css'
// import vid from '../../Components/Video/vid.mp4'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Search() {
const {searchQuary}=useParams();
  const vids=useSelector(state=>state.videoReducers)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuary.toUpperCase())).reverse();

  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
      <div className="container2_Pages_App"> 
      <h2 style={{color:"white" , margin:"12px"}}>Search Results for {searchQuary}... </h2>      
        <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Search;
