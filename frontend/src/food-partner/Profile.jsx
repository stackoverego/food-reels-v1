import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [profile, setprofile] = useState(null);
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
    .then((res) => {
      setprofile(res.data.foodpartner);
      setvideos(res.data.foodpartner.food);
      console.log(res.data.foodpartner.food)
    });
  }, [id]);

  const [businessData, setBusinessData] = useState({
    businessName: "Business Name",
    address: "Address",
    totalMeals: 43,
    customersServed: "15K",
  });

  // Mock video data - replace with actual data

  return (
    <div className="profile-container">
      {/* Profile Header Card */}
      <div className="profile-card">
        <div className="profile-header">
          {/* Avatar Circle */}
          <div className="avatar-circle">
            <img src="/" alt="Business" className="avatar-image" />
          </div>

          {/* Business Info */}
          <div className="business-info">
            <div className="info-field business-name-input">{profile?.name}</div>
            <div className="info-field address-input">{profile?.address}</div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-label">total meals</div>
            <div className="stat-value">{businessData.totalMeals}</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">customer served</div>
            <div className="stat-value">{businessData.customersServed}</div>
          </div>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video._id} className="video-item">
            <div className="video-placeholder">
              <span>
                <video src={video.video} muted></video>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
