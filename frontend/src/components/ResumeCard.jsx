import React from "react";
import "./ResumeCard.css";

const ResumeCard = ({ name, jobTitle, experience, skills }) => {
  return (
    <div className="resume-card">
      <h2>{name}</h2>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Skills:</strong> {skills.join(", ")}</p>
    </div>
  );
};

export default ResumeCard;
