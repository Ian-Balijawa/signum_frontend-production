import { useState } from "react";

export default function ApplicationForm() {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, including the resume file
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
        />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
}
