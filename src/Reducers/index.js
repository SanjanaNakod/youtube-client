import {combineReducers} from "redux"

import authReducer from "./auth";
import channelReducers from "./channel"
import CurrentUserReducer from './currentUser'

import likedVideoReducer from "./likedVideo";
import videoReducers from './video'
import watchLaterReducer from './watchLater'
import HistoryReducer from './history'
import commentReducer from './comments'
    
export default combineReducers({
    authReducer,
    CurrentUserReducer,
    channelReducers,
    videoReducers,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer
});



