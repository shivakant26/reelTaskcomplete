import React, { useState, useRef, useEffect } from "react";
import "./Video.css";
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoVolume } from "react-icons/go";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Video = ({ data, isMuted, setIsMuted }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    toggleMute();
    if (!hasInteracted) {
      setHasInteracted(true);
      setVideoLoaded(true);
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  useEffect(() => {
    toggleMute();
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isPlaying && hasInteracted) {
            video.play().catch((error) => {
              console.error("Error playing video:", error);
            });
            setIsPlaying(true);
          }
        } else {
          if (isPlaying) {
            video.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [isPlaying, hasInteracted]);

  return (
    <div className={"video-cards"}>
      {videoLoaded && <Header />}
      <video
        ref={videoRef}
        src={data?.media_url}
        loop
        muted={isMuted}
        className="video-player"
        onClick={handleVideoClick}
        onLoadedData={() => setVideoLoaded(true)}
      />
      <div className="mute-button" onClick={() => toggleMute()}>
        {isMuted && videoLoaded && <BiSolidVolumeMute />}
      </div>
      {videoLoaded && <Footer data={data} />}
    </div>
  );
};

export default Video;
