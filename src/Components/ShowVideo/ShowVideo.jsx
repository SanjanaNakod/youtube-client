import React from 'react'
import { Link } from 'react-router-dom'
import './ShowVideo.css'
import moment from 'moment'

function ShowVideo({vid}) {
  // console.log(vid.filePath)
  // console.log(vid)
  return (
    <>
      <Link to={`/VideoPage/${vid?._id}`}>
        
        <video
          src={`http://localhost:5500/${vid.filePath}`}
          // src={`${vid?.video_src}`}
          className='video_ShowVideo'
        ></video>
      </Link>
      <div className="video_desc">
        <div className="Channel_logo_App">
          <div className="firstChar_logo_App">
            <>{vid?.Uploader.charAt(0).toUpperCase()}</>
          </div>
        </div>
        <div className="video_details">
          <p className='title_vid_showvideo'>{vid?.videoTitle}</p>
          <pre className='vid_view_UploadTime'>{vid?.Uploader
}</pre>
          <pre className='vid_view_UploadTime'>
            {vid?.Views} views <div className="dot"></div> {moment(vid?.CreatedAt).fromNow()}
          </pre>
        </div>
      </div>
    </>
  )
}

export default ShowVideo
