import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchBar() {
  const [searchQuary, setSearchQuary] = useState("");
  const [searchListA, setSearchList] = useState(false);
  // const TitleArray=["Video1","video2","Animation Video", "Movies"].filter(q=>q.toUpperCase().includes(searchQuary.toUpperCase()))
const TitleArray= useSelector(s=>s.videoReducers)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuary.toUpperCase())).map(m=>m.videoTitle)
  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="Search_div">
            <input
              className="iBox_searchbar"
              type="text"
              placeholder="Search.."
              onChange={e => setSearchQuary(e.target.value)}
              value={searchQuary}
              onClick={e=>setSearchList(true)}
            />
            <Link to={`/search/${searchQuary}`}>
            <FaSearch
              className="searchIcon_SearchBar"
              onClick={e=>setSearchList(false)}
            />
            </Link>

            <BsMicFill className="Mic_SearchBar" />
            {searchQuary && searchListA&&
            <SearchList
            setSearchQuary={setSearchQuary}
            TitleArray={TitleArray}
            />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
