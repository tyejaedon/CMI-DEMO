import React from "react";
import { Link } from "react-router-dom";


const SignupSection = () => {
  return (
    <div className="signup-container">
      {/* Left Side - Image Section */}
   

      {/* Right Side - Form Section */}
      <div className="signup-form">
        <h2>Join the Change</h2>
        <p className="signup-text">
          Sign up to track your donations, see impact stories, and earn contribution badges.
        </p>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupSection;
