import React, { useState } from "react";
import BgImage from "../assets/BG.png";
import ShopIcon from "../assets/shop.svg";
import "./Login.css";
import { Input } from "./Input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",
        backgroundColor: "#2148C0",
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="form">
          <img src={ShopIcon} alt="shop-icon" className="mb-5" />
          <div className="d-flex flex-column " style={{ gap: "20px" }}>
            <Input
              iconName="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              width="100%"
            />
            <Input
              iconName="lock"
              placeholder="PASSWORD"
              width="100%"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex flex-column w-100" style={{ gap: "10px" }}>
            <button
              style={{
                padding: "10px  20px",
                width: "100%",
                backgroundColor: "white",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                borderRadius: "4px",
                color: "#2148C0",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                border: "none",
              }}
              onClick={() =>
                alert(`User name: ${username}, password: ${password}`)
              }
            >
              LOGIN
            </button>
            <div className="d-flex w-100 justify-content-end ">
              <h5
                style={{
                  cursor: "pointer",
                }}
                onClick={() => alert("Not implemented yet")}
              >
                Forgot password?
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
