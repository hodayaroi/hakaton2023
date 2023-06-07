import React from "react";
import "./Input.css";
import UserIcon from "../assets/user.svg";
import LockIcon from "../assets/lock.svg";

export function Input(props) {
  const { iconName, placeholder, width, type, value, onChange } = props;
  const getIcon = (iconName) => {
    switch (iconName) {
      case "user":
        return <img src={UserIcon} alt="user-icon" />;
      case "lock":
        return <img src={LockIcon} alt="lock-icon" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="input"
      style={{
        minWidth: "100px",
        width: width || "fit-content",
      }}
    >
      {!!getIcon(iconName) && getIcon(iconName)}
      <input
        className="input-field"
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
