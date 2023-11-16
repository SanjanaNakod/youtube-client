import React from "react";
import './Home.css'
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid";
// import vid from '../../Components/Video/vid.mp4'
import { useSelector } from "react-redux";
function Home() {

  const vids=useSelector(state=>state.videoReducers)?.data?.filter(q=>q).reverse();
//  console.log(videosFile)

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
  const NavList=[
    "All",
    "Python",
    "Java",
    "Movies",
    "Science",
    "animation",
    "Gaming",
    "Comedy",
    "music",
    "News",
    "Sports",
    "Recently Uploaded"
  ]
  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {
            NavList.map(m=>{
              return(
              <p key={m} className="btn_nav_home">
                {m}
              </p>)
            })
          }
        </div>
        <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  );
}

export default Home;
