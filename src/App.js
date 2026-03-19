
import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Hero Section */}
      <div style={{ background: "#0a2540", color: "white", padding: "40px", textAlign: "center" }}>
        <h1>IT Talent Hub</h1>
        <p>Connecting Top IT Talent with Leading Companies</p>
        <button style={{ margin: "10px", padding: "10px 20px" }}>Hire Talent</button>
        <button style={{ margin: "10px", padding: "10px 20px" }}>Submit Requirement</button>
      </div>

      {/* About */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>
          IT Talent Hub is a specialized IT recruitment partner with 12+ years of experience 
          in US IT staffing. We connect companies with top talent in Cloud, DevOps, Data, QA, and Full Stack.
        </p>
      </div>

      {/* Services */}
      <div style={{ background: "#f4f4f4", padding: "40px", textAlign: "center" }}>
        <h2>Services</h2>
        <p>✔ IT Contract Staffing</p>
        <p>✔ Full-Time Hiring</p>
        <p>✔ C2C / W2 Hiring</p>
        <p>✔ Niche Talent Hiring</p>
      </div>

      {/* Contact */}
      <div style={{ background: "#0a2540", color: "white", padding: "40px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Email: ittalenthub@gmail.com</p>
        <p>Phone: +91 7036727081</p>
      </div>

    </div>
  );
}