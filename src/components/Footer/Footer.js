import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { FaHeart, FaRegComment, FaRegHeart, FaMusic } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import ProfileImage from "../../assets/images/download.jpeg";
import Comment from "../comments/Comment";
import Share from "../share/Share";

export default function Footer({ data }) {
  const [showLike, setShowLike] = useState(true);
  const [like, setLikes] = useState(data?.likes);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const modalRef = useRef(null);
  const handleLike = () => {
    if (showLike) {
      setLikes(like + 1);
    } else {
      setLikes(like - 1);
    }
    setShowLike(!showLike);
  };

  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowComments(false);
        setShowShare(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      <div className="reels-footer">
        <div className="reels-footer-left w-80">
          <div className="user-profile">
            <div className="user-profile-info">
              <img src={ProfileImage} alt="profile_image" />
              <p>{data?.user?.username}</p>
              <button className="follow">follow</button>
            </div>
          </div>
          <div className="reels_title">
            <p>{data?.caption}</p>
          </div>
          <div className="songs">
            <span>
              <FaMusic />
            </span>
            <marquee>{data?.song}</marquee>
          </div>
        </div>
        <div className="reels-footer-right w-20">
          <div className="reel-actions">
            <div className="reels-action d-flex" onClick={handleLike}>
              {showLike ? <FaRegHeart /> : <FaHeart style={{ color: "red" }} />}
              {like}
            </div>
            <div className="reels-action d-flex" onClick={toggleComments}>
              <FaRegComment />
              {data?.comments?.length}
            </div>
            <div className="reels-action d-flex" onClick={toggleShare}>
              <FiSend />
              {data?.shares}
            </div>
            <div className="reels-action d-flex">
              <BsThreeDotsVertical />
            </div>
            <div className="reels-action profile-img">
              <img src={ProfileImage} alt="profile_image" />
            </div>
          </div>
        </div>
      </div>

      {showComments && (
        <Comment
          className="k-drawer"
          comment={data?.comments}
          toggleComments={toggleComments}
          modalRef={modalRef}
        />
      )}

      {showShare && (
        <Share
          className="k-drawer"
          comment={data?.comments}
          toggleShare={toggleShare}
          modalRef={modalRef}
        />
      )}
    </>
  );
}
