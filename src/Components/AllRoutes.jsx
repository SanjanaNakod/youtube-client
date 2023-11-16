import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideo from '../Pages/YourVideo/YourVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';

      function AllRoutes({setEditCreateChannelBtn , setVidUploadPage}) {
  return (
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/Library' element={<Library/>}/>
      <Route path ='/WatchHistory' element={<WatchHistory/>}/>
      <Route path ='/WatchLater' element={<WatchLater/>}/>
      <Route path ='/LikedVideo' element={<LikedVideo/>}/>
      <Route path ='/YourVideo' element={<YourVideo/>}/>
      <Route path ='/VideoPage/:vid' element={<VideoPage/>}/>
      <Route path ='/search/:searchQuary' element={<Search/>}/>
      <Route path ='/Channel/:Cid'
      element={<Channel 
        setVidUploadPage={setVidUploadPage}
        setEditCreateChannelBtn={setEditCreateChannelBtn} />}/>
      
    </Routes>
  )
}

export default AllRoutes
