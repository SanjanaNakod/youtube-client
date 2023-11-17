import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import vid from "../../Components/Video/vid.mp4";
import "./videoPage.css";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import Comments from "../../Components/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addToHistory } from "../../actions/History";
import { viewsVideo } from "../../actions/Video";

function VideoPage() {
  const { vid } = useParams();
  // console.log(vid)

  // const channels=useSelector(state=>state?.channelReducers)

  // const currentChannel=channels.filter(c=>c._id=== vid)[0];

  const vids = useSelector((state) => state.videoReducers);
  const vv = vids?.data.filter((q) => q._id === vid)[0];
  const CurrentUser = useSelector((state) => state?.CurrentUserReducer);
  const dispatch = useDispatch();

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    );
  };
  const handleViews = () => {
    dispatch(
      viewsVideo({
        id: vid,
      })
    );
  };
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  }, []);
  return (
    <>
      <div className="Container_VideoPage">
        <div className="Container2_VideoPage">
          <div className="video_display_screen_VideoPage">
            <video
              src={`http://localhost:5500/${vv?.filePath}`}
              className={"video_Showvideo_videoPage"}
              controls
              // autoPlay
            ></video>
            <div className="video_details_videoPage">
              <div
                className="video_btns_title_videoPage
                _cont"
              >
                <p className="video_title_videoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_videopage">
                  <div className="views_videoPage">
                    {vv?.Views} views <div className="dot"></div>
                    {moment(vv?.CreatedAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>
              <Link
                to={`/channel/${vv?.videoChannel}`}
                className="channel_details_videopage"
              >
                <b className="channel_logo_videopage">
                  <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="channel_name_videopage">{vv?.Uploader}</p>
              </Link>
              <div className="comments_videopage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments 
                videoId={vv._id}
                />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More Video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
