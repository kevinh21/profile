import React from "react";
import "./LandingPage.css";

function ChangeItem() {
  function changeItem(e) {
    e.target.style.background = "red";
  }

  return (
    <div className="changeImage">
      <button onMouseOver={changeItem}>Hover over me!</button>
    </div>
  );
}

export default ChangeItem;
