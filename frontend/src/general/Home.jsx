import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [reels, setreels] = useState([]);
  const videoRefs = useRef(new Map());

  useEffect(() => {
    axios.get("http://localhost:3000/api/food/", { withCredentials: true }).then((response) => {
      setreels(response.data.fooditem);
    });
  }, []);

  useEffect(() => {
    if (!reels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!video) return;

          if (entry.intersectionRatio >= 0.75) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: [0.75],
      },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, [reels]);

  const setVideoRef = (id) => (element) => {
    if (element) {
      videoRefs.current.set(id, element);
    } else {
      videoRefs.current.delete(id);
    }
  };

  return (
    <main className="reels-page">
      <div className="reels-list">
        {reels.map((reel) => (
          <section className="reel-item" key={reel._id}>
            <video
              ref={setVideoRef(reel._id)}
              className="reel-video"
              src={reel.video}
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="reel-overlay">
              <div className="reel-copy">
                <p className="reel-description">{reel.description}</p>
                <Link className="reel-cta" to={`/foodpartner/${reel.foodpartner}`}>
                  Visit store
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;
