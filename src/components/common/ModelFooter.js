import React from "react";
import profileImage from "../../assets/images/download.jpeg";
import { MdSend } from "react-icons/md";

const ModelFooter = () => {
  return (
    <div className="comment_input">
      <img src={profileImage} />
      <input type="text" placeholder="write comment" />
      <MdSend />
    </div>
  );
};

export default ModelFooter;
