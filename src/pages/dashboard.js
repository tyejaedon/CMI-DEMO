import React, { useState } from "react";
import pfp from "../assets/pfp.png";

const Dashboard = () => {
  // Example user details
  const [user, setUser] = useState({
    name: "John Doe",
    profilePhoto: pfp,
    contact: "johndoe@email.com",
  });

  // Example donations
  const donations = [
    { id: 1, cause: "Education Fund", amount: 500 },
    { id: 2, cause: "Medical Aid", amount: 1000 },
    { id: 3, cause: "Food Drive", amount: 750 },
  ];

  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);

  // Achievements system
  const achievements = [
    { title: "Welcome!", description: "Signed up successfully", earned: true, icon: "🎉" },
    { title: "First Donation", description: "Donated for the first time", earned: true, icon: "💰" },
    { title: "Generous Giver", description: "Donated over KES 1000", earned: true, icon: "🏆" },
    { title: "Community Hero", description: "Donated to 5+ causes", earned: false, icon: "🌟" },
    { title: "Super Donor", description: "Donated over KES 5000", earned: false, icon: "🔥" }
  ];

  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
        <h2>{user.name}</h2>
        <p>{user.contact}</p>
        <button className="edit-btn">Edit Profile</button>
      </div>

      {/* Donations Section */}
      <div className="donations-section">
        <h2>Your Donations</h2>
        {donations.map((donation) => (
          <div key={donation.id} className="donation-item">
            <span>{donation.cause}</span>
            <span>KES {donation.amount}</span>
          </div>
        ))}
        <h3>Total Donated: KES {totalDonations}</h3>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h2>Your Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className={`achievement-card ${ach.earned ? "earned" : "locked"}`}
            >
              <span className="achievement-icon">{ach.icon}</span>
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
