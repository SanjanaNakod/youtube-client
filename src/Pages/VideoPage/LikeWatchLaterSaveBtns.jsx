import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  AiFillDislike,
  AiOutlineDislike,
  AiFillLike,
  AiOutlineLike,
} from "react-icons/ai";

import { MdPlaylistAddCheck } from "react-icons/md";
import {
  RiHeartAddFill,
  RiPlayListAddFill,  
  RiShareForwardLine,
} from "react-icons/ri";

import "./LikeWatchLaterSaveBtns.css";
import { useDispatch, useSelector } from "react-redux";
import { likeVideo } from "../../actions/Video";
import { addToLikedVideo, deletelikedVideo } from "../../actions/likedVideo";
import { addTowatchLater, deleteWatchLater } from "../../actions/watchLater";

function LikeWatchLaterSaveBtns({vv,vid}) {
  const CurrentUser = useSelector(state=>state?.CurrentUserReducer)
  const dispatch=useDispatch()
  const [SaveVideo, setSaveVideo] = useState(false);
  const [DislikeBtn, setDislike] = useState(false);
  const [LikeBtn, setLikeBtn] = useState(false);
  
  const likedVideoList= useSelector(state=>state.likedVideoReducer);
  const watchLaterList= useSelector(state=>state.watchLaterReducer);

  useEffect(()=>{
likedVideoList?.data.filter(q=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id ).map(m=> setLikeBtn(true))
    watchLaterList?.data.filter(q=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id ).map(m=> setSaveVideo(true))
  },[])


  const toggleSavedVideo=()=>{
    if(CurrentUser){
    if(SaveVideo){
        setSaveVideo(false);
        dispatch(deleteWatchLater({
          videoId:vid,
          Viewer:CurrentUser?.result._id,
        }))
      }else{
        setSaveVideo(true);
        dispatch(addTowatchLater({
          videoId:vid,
          Viewer:CurrentUser?.result._id,
        })
        )
    }
  }else{
      alert("plz login to save the video!")
    }
  }
  const togglelikeBtn=(e,lk)=>{
    if(CurrentUser){
    if(LikeBtn){
        setLikeBtn(false);  
        dispatch(
          likeVideo({
            id:vid,
            Like: lk - 1,
          })
        );     
        dispatch(deletelikedVideo({
          videoId:vid,
          Viewer:CurrentUser?.result._id,
        }))
    }else{
        setLikeBtn(true);
        dispatch(
          likeVideo({
            id:vid,
            Like: lk+1,
          })
        );
        dispatch(addToLikedVideo({
          videoId:vid,
          Viewer:CurrentUser?.result._id,
        }))
        setDislike(false);
    }
  }else{
    alert("plz login to give like")
  }
  }
  const toggleDislikeBtn=(e,lk)=>{
    if(CurrentUser){
    if(DislikeBtn){
        setDislike(false);
    }else{
        setDislike(true);
        if(LikeBtn){
          dispatch(
            likeVideo({
              id:vid,
              Like: lk - 1,
            })
          );
          dispatch(deletelikedVideo({
            videoId:vid,
            Viewer:CurrentUser?.result._id,
          }))
        }
        setLikeBtn(false);
    }
  }else{
    alert("plz login to give like")
  }
  }
  return (
    <div className="btns_cont_videopage">
      <div className="btn_videopage">
        <BsThreeDots />
      </div>
      <div className="btn_videopage">
        <div className="like_videopage" onClick={(e)=>togglelikeBtn(e,vv.Like)}>
          {LikeBtn ? (
            <>
              <AiFillLike size={22} className="btns_videopage" />
            </>
          ) : (
            <>
              <AiOutlineLike size={22} className="btns_videopage" />
            </>
          )}
          <b>{vv?.Like}</b>
        </div>
        <div className="like_videopage" onClick={(e)=>toggleDislikeBtn(e , vv.Like)}>
          {DislikeBtn ? (
            <>
              <AiFillDislike size={22} className="btns_videopage" />
            </>
          ) : (
            <>
              <AiOutlineDislike size={22} className="btns_videopage" />
            </>
          )}
          <b>Dislike</b>
        </div>
        <div className="like_videopage" onClick={toggleSavedVideo}>
          {SaveVideo ? (
            <>
              <MdPlaylistAddCheck size={22} className="btns_videopage" />
              <b>Saved</b>
            </>
          ) : (
            <>
            <RiPlayListAddFill size={22} className="btns_videopage" />
            <b>Save</b>
            </>
          )}
        </div>
        <div className="like_videopage">
          <>
            <RiHeartAddFill size={22} className="btns_videopage" />
            <b>Thanks</b>
          </>
        </div>
        <div className="like_videopage">
          <>
            <RiShareForwardLine size={22} className="btns_videopage" />
            <b>Share</b>
          </>
        </div>
      </div>
    </div>
  );
}

export default LikeWatchLaterSaveBtns;
