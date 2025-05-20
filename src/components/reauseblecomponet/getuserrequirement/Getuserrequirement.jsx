import React from 'react';
import './getuserrequrment.css'; // Updated file name

export default function Getuserrequirement() {
  return (
    <form
      className="requirement-form"
      action="https://formsubmit.co/info@anntechno.in"
      method="POST"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://anntechnobyraj.netlify.app/thankyou"
      />

      <div className="requirement-group">
        <label htmlFor="requirement" className="requirement-label">
          Describe Your Requirement
        </label>
        <textarea
          id="requirement"
          name="Requirement"
          rows="4"
          placeholder="I would like to..."
          className="requirement-textarea"
          required
        ></textarea>
      </div>

      <div className="requirement-group">
        <input
          type="number"
          name="Contact"
          placeholder="Enter Your Number"
          className="requirement-input"
          required
        />
      </div>

      <div className="requirement-group">
        <input
          type="text"
          name="Name"
          placeholder="Enter your name"
          className="requirement-input"
          required
        />
      </div>

      <button className="requirement-submit">Submit</button>
    </form>
  );
}
