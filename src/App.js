import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Drawersidbar from './Components/Leftsidebar/Drawersidbar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import CreateEditChanel from './Pages/Channel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo} from './actions/Video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';

function App() {
const dispatch=useDispatch();
  useEffect(() => {
  dispatch(fetchAllChannel());
  dispatch(getAllVideo());
  dispatch(getAlllikedVideo())
  dispatch(getAllwatchLater());
  dispatch(getAllHistory())
  }, [dispatch])

const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
  display:"none",
})
 const toggleDrawer=()=>{
  if(toggleDrawerSidebar.display==="none"){
    setToggleDrawerSidebar({
      display:"flex"
    })
  }else{
    setToggleDrawerSidebar({
      display:"none"
    })
  }
 }

 const [vidUploadPage, setVidUploadPage] = useState(false)
 const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
  return (
    <Router>
      {
        vidUploadPage &&
      <VideoUpload
      setVidUploadPage={setVidUploadPage}
      />
      }
      {
        EditCreateChannelBtn &&      
      <CreateEditChanel
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      />
      }
    <Navbar
        setEditCreateChannelBtn={setEditCreateChannelBtn}
        toggleDrawer={toggleDrawer}
    />  
    {
      <Drawersidbar 
      toggleDrawer={toggleDrawer}
      toggleDrawerSidebar={toggleDrawerSidebar}
      />
    } 
    <AllRoutes
      setEditCreateChannelBtn={setEditCreateChannelBtn}
      setVidUploadPage={setVidUploadPage}

      />
    </Router>
  );
}

export default App;
