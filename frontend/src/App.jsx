import React from "react";
import ResumeCard from "./components/ResumeCard";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Resume Builder</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <ResumeCard name="John Doe" jobTitle="Software Engineer" experience={5} skills={["JavaScript", "React", "Node.js"]} />
        <ResumeCard name="Jane Smith" jobTitle="Product Manager" experience={3} skills={["Agile", "Scrum", "UX/UI"]} />
      </div>
    </div>
  );
}
