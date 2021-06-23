import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>

      <span className="phoneticText">{props.phonetic.text}</span>
    </div>
  );
}
