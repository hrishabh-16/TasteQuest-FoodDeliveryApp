import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="footer"
      id="footer"
      style={{
        color: "#fff",
        backgroundColor: "#1f1f1f",
        padding: "40px 8vw",
        marginTop: "100px",
      }}
    >
      <div
        className="footer-content"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
          width: "100%",
        }}
      >
        <div className="footer-content-left" style={{ gap: "20px" }}>
          <div to="/" style={{ textDecoration: "none", color: "#ff6347" }}>
            <strong style={{ fontSize: "1.5rem" }}>TasteQuest</strong>
          </div>
          <p style={{ color: "#b3b3b3", fontSize: "14px", lineHeight: "1.8" }}>
            TasteQuest is your ultimate destination for premium packaged food
            items. From fresh vegetables to delightful snacks, we bring the best
            to your doorstep.
          </p>
          <div
            className="footer-social-icons"
            style={{ display: "flex", gap: "15px" }}
          >
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              style={{ width: "30px", cursor: "pointer" }}
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              style={{ width: "30px", cursor: "pointer" }}
            />
            <img
              src={assets.linkedin_icon}
              alt="LinkedIn"
              style={{ width: "30px", cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="footer-content-center">
          <h2
            style={{ color: "#ff6347", fontSize: "18px", marginBottom: "20px" }}
          >
            COMPANY
          </h2>
          <ul style={{ listStyle: "none", padding: 0, color: "#b3b3b3" }}>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>Home</li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              About Us
            </li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              Delivery
            </li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2
            style={{ color: "#ff6347", fontSize: "18px", marginBottom: "20px" }}
          >
            GET IN TOUCH
          </h2>
          <ul style={{ listStyle: "none", padding: 0, color: "#b3b3b3" }}>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              +94 765489545
            </li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>
              contact@tastequest.com
            </li>
          </ul>
        </div>
      </div>
      <hr
        style={{
          width: "100%",
          height: "2px",
          margin: "30px 0",
          backgroundColor: "#666",
          border: "none",
        }}
      />
      <p
        className="footer-copyright"
        style={{ textAlign: "center", fontSize: "14px", color: "#b3b3b3" }}
      >
        Copyright 2024 &copy; TasteQuest - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
