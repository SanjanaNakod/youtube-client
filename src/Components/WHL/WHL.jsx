import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import './whl.css'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux'
import { ClearHistory } from '../../actions/History'

function WHL({page, videoList}) {
  const CurrentUser = useSelector(state=>state?.CurrentUserReducer) 
  const dispatch=useDispatch()   
  const handleClearHistory=()=>{
    if(CurrentUser){
      dispatch(ClearHistory({
        userId:CurrentUser?.result._id
      }))
    }
  }                      
  return (
    <div className="container_Pages_App">
    <Leftsidebar/>
  <div className="container2_Pages_App">
    <p className="container_whl">
        <div className="box_whl leftside_whl">
            <b>Your {page} Shown Here</b>
            {
              page==="History" &&
            <div className="clear_History_btn" onClick={handleClearHistory}>
                Clear History
            </div>
            }
        </div>
        <div className="rightside_whl">
            <h1>{page}</h1>
            <div className="whl_list">
                
            <WHLVideoList page={page}
            CurrentUser={CurrentUser?.result?._id}
            videoList={videoList}
            />
            </div>
        </div>
    </p>
  </div>
  </div>
  
  )
}

export default WHL
