// src/ProfilePicture.js
import React from "react";

function ProfilePicture({ profilePictureUrl }) {
  return (
    <div className="profile-picture">
      <img src={profilePictureUrl} alt="Profile" />
    </div>
  );
}

export default ProfilePicture;