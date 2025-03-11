import React, { useState, useEffect } from "react";

const DonationProgress = () => {
  const goalAmount = 10000; // Example: $10,000 Goal
  const [donatedAmount, setDonatedAmount] = useState(3500); // Example: $3,500 donated

  // Calculate the percentage of the goal reached
  const donationPercentage = Math.min((donatedAmount / goalAmount) * 100, 100);

  // Simulate live donation updates (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      setDonatedAmount((prev) => (prev < goalAmount ? prev + 100 : prev));
    }, 5000); // Every 2 seconds, add $100 (simulate donations)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donation-progress-container">
      <h2 className="progress-title">Live Donation Progress</h2>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${donationPercentage}%` }}
        ></div>
      </div>
      <p className="progress-text">
        KES {donatedAmount.toLocaleString()} raised out of KES {goalAmount.toLocaleString()}
      </p>
    </div>
  );
};

export default DonationProgress;
