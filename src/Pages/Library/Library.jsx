import React from "react";
import "./Library.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import vid from "../../Components/Video/vid.mp4";
import { FaHistory } from "react-icons/fa";
import WHLVideoList from "../../Components/WHL/WHLVideoList";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { useSelector } from "react-redux";

function Library() {
  const CurrentUser = useSelector(state=>state?.CurrentUserReducer) 
  
  const watchLaterList= useSelector(state=>state.watchLaterReducer);  
  const likedVideoList= useSelector(state=>state.likedVideoReducer);
  const historyList= useSelector(state=>state.HistoryReducer);
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video_1",
  //     Uploader: "abc",
  //     description: "description of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video_2",
  //     Uploader: "abc",
  //     description: "description of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video_3",
  //     Uploader: "abc",
  //     description: "description of video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video_3",
  //     Uploader: "abc",
  //     description: "description of video 3",
  //   },
  //   {
  //     _id: 5,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video_3",
  //     Uploader: "abc",
  //     description: "description of video 3",
  //   },
  //   {
  //     _id: 6,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video_3",
  //     Uploader: "abc",
  //     description: "description of video 3",
  //   },
  // ];
  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"History"} 
            CurrentUser={CurrentUser?.result?._id} 
            videoList={historyList} />
          </div>
        </div>
        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"Watch Later"} 
            CurrentUser={CurrentUser?.result?._id}
            videoList={watchLaterList} />
          </div>
        </div>
        <div className="container_librarypage">
          <h1 className="title_container_librarypage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videolist_librarypage">
            <WHLVideoList page={"Liked Videos"}
            CurrentUser={CurrentUser?.result?._id}
             videoList={likedVideoList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
