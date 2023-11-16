import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';

function WatchLater() {

  const watchLaterList= useSelector(state=>state.watchLaterReducer);
  // console.log(watchLaterList)
  // const watchLater = [
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
    <div>
      <WHL page={"watchLater"} videoList={watchLaterList}/>
    </div>
  )
}

export default WatchLater
