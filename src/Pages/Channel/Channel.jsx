import React from 'react'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';

import vid from '../../Components/Video/vid.mp4';
import DescribeChannel from './DescribeChannel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

      function Channel({  setEditCreateChannelBtn ,setVidUploadPage}) {

    const {Cid}= useParams();
    const vids=useSelector(state=>state.videoReducers)?.data?.filter(q=>q?.videoChannel === Cid).reverse();

    // const vids = [
    //     {
    //       _id:1,
    //       video_src: vid ,
    //       Chanel:"62bafe6752cea35a6c30685f",
    //       title:"video_1",
    //       Uploader:"abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id:2,
    //       video_src:vid,
    //       Chanel:"cdd",
    //       title:"video_2",
    //       Uploader:"abc",
    //       description:"description of video 2"
    //     },
    //     {
    //       _id:3,
    //       video_src:vid,
    //       Chanel:"add",
    //       title:"video_3",
    //       Uploader:"abc",
    //       description:"description of video 3"
    //     },
    //     {
    //       _id:4,
    //       video_src:vid,
    //       Chanel:"add",
    //       title:"video_3",
    //       Uploader:"abc",
    //       description:"description of video 3"
    //     },
    //   ];
    return (
        <div className="container_Pages_App">
            <Leftsidebar/>
          <div className="container2_Pages_App">
            <DescribeChannel           
              setVidUploadPage={setVidUploadPage}
              Cid={Cid}
              setEditCreateChannelBtn={setEditCreateChannelBtn}
            />
            <ShowVideoGrid vids={vids}/>
            </div>
        </div>
      );
}

export default Channel
