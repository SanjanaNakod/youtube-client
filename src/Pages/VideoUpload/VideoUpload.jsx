import React, { useState } from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/Video';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'

function VideoUpload({setVidUploadPage}) {
  const dispatch = useDispatch();
  const CurrentUser = useSelector(state=>state?.CurrentUserReducer)
  const [title, setTitle] = useState(" ")
  const [videoFile, setVideoFile] = useState(" ")

  const handlesetVideoFile=(e)=>{
    setVideoFile(e.target.files[0]);
  }

  const [progress, setProgress] = useState(0);

  const fileOptions ={
    onUploadProgess:(ProgressEvent)=>{
      const { loaded , total}=ProgressEvent;
      const percentage = Math.floor(((loaded/1000)*100)/(total/1000));
      setProgress(percentage)
      if(percentage === 100){
        setTimeout(function(){},3000);
        setVidUploadPage(false)

      }
    },
  };
  const uploadVideoFile=()=>{
if(!title){
  alert("Plz Enter the title of the video")
}else if(!videoFile){
  alert("plz attach a video file")
}else if(videoFile.size > 1000000){
alert("Plz attach videofile less than 1 kb ")
}else{
  const fileData=new FormData();
 fileData.append("file", videoFile);
 fileData.append("title", title);
 fileData.append("channel", CurrentUser?.result._id);
 fileData.append("Uploader", CurrentUser?.result.name);
//  console.log(videoFile)
 dispatch(uploadVideo({
  fileData:fileData , fileOptions:fileOptions
 }))
}
  }
  return (
    <div className='container_Vidupload'>
       <input
        type="submit"
        onClick={()=>setVidUploadPage(false)}
        name="text"
        value={"x"}
        className="ibtn_x"
      />
      <div className="container2_Vidupload">
        <div className="ibox_div_vidupload">       
        <input type="text"
        onChange={(e)=>{setTitle(e.target.value)}}
        className='ibox_vidupload'
        maxLength={30}
        placeholder='Enter Title of your video'
                />
      <label htmlFor="file" className='ibox_vidupload btn_vidupload'>
        <input 
        type="file" 
        name='file' 
        className='ibox_vidupload'
        style={{fontSize:"1rem"}}
        onChange={e=>{handlesetVideoFile(e)}}
        />
      </label>
        </div>
        <div className="ibox_div_vidupload">
          <input type="submit"
          onClick={uploadVideoFile} value="Upload"
          className='ibox_vidupload btn_vidupload'
          />
          </div>   
          <div className="loader ibox_div_vidupload">
            <CircularProgressbar
            value={progress}
            text={`${progress}`}
            styles={buildStyles({
              rotation:0.25,
              strokeLinecap:"butt",
              textSize:"20px",
              pathTransitionDuration:0.5,
              pathColor:`rgba(255,255,255,${progress/100})`,
              textColor:"#f88",
              trailColor:"#adff2f",
              backgroundColor:"#3e9837"
            })}
            />
          </div>
       </div>
    </div>
  )
}

export default VideoUpload
