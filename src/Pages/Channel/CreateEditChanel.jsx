import React, { useState } from "react";
import "./CreateEditChanel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { updateChannelData } from "../../actions/channelUser";

function CreateEditChanel({ setEditCreateChannelBtn }) {
  //   const CurrentUser = {
  //     result: {
  //       email: "Sanjana@mail.com",
  //       joinedOn: "2222-07-15T09:57:23.489Z",
  //     },
  //   };
  const CurrentUser = useSelector((state) => state.CurrentUserReducer);
  const [name, setName] = useState(CurrentUser?.result.name);
  const [desc, setDesc] = useState(CurrentUser?.result.desc);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name) {
      alert("Plz Enter Name !");
    } else if (!desc) {
      alert("Plz Enter description !");
    } else {
      dispatch(
        updateChannelData(CurrentUser?.result._id, {
          name: name,
          desc: desc,
        })
      );
      setEditCreateChannelBtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className="container_createeditchannel">
      <input
        type="submit"
        name="text"
        value={"x"}
        className="ibtn_x"
        onClick={() => setEditCreateChannelBtn(false)}
      />
      <div className="container2_createeditchannel">
        <h1>
          {CurrentUser?.result.name ? <>Edit</> : <>Create</>}
          Your Channel
        </h1>
        <input
          type="text"
          placeholder="Enter Your/Channel Name"
          className="ibox"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          rows="15"
          placeholder="Enter Channel Description"
          className="ibox"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          onClick={handleSubmit}
          className="ibtn"
        />
      </div>
    </div>
  );
}

export default CreateEditChanel;
