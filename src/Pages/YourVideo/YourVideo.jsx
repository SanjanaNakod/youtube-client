import React from 'react'
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
import vid from '../../Components/Video/vid.mp4'
import './yourvideo.css'
import { useSelector } from 'react-redux';
function YourVideo() {

  const CurrentUser = useSelector((state) => state?.CurrentUserReducer);
  const vids=useSelector(state=>state.videoReducers)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result?._id).reverse();

  // const vids = [
  //   {
  //     _id:1,
  //     video_src: vid ,
  //     Chanel:"62bafe6752cea35a6c30685f",
  //     title:"video_1",
  //     Uploader:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     Chanel:"cdd",
  //     title:"video_2",
  //     Uploader:"abc",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id:3,
  //     video_src:vid,
  //     Chanel:"add",
  //     title:"video_3",
  //     Uploader:"abc",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id:4,
  //     video_src:vid,
  //     Chanel:"add",
  //     title:"video_3",
  //     Uploader:"abc",
  //     description:"description of video 3"
  //   },
  // ];
  return (
    <div className="container_Pages_App">
    <Leftsidebar/>
  <div className="container2_Pages_App">
    <div className="container_yourvideo">
   <h1>Your Videos</h1>      
   {
    CurrentUser ?(<>
    <ShowVideoGrid vids={vids}/>    
    </>):(<>
    <h3>Plz login to see your Uplaoded videolist</h3></>)
   }
    </div>
    </div>
</div>
  )
}

export default YourVideo
