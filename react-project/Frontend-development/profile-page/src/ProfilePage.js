// src/ProfilePage.js
import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";
import profileImage from './assets/profile.jpg'; // Import the local image


function ProfilePage() {
  // Sample user data
  const user = {
    name: "Anushka Patil",
    email: "anushkapatil240@gmail.com",
    bio: "A passionate developer who loves coding and learning new technologies.",
    profilePictureUrl: "profileImage",
  };

  return (
    <div className="profile-page">
      {/* <ProfilePicture profilePictureUrl={user.profilePictureUrl} /> */}
      <img class="profile" src={profileImage} alt="profile"/>
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
}

export default ProfilePage;
