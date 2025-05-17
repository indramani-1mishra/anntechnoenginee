import React from 'react'
import './getuserrequrment.css'
export default function Getuserrequirement() {
  return (
    <>
  <form className="custom-form"  action="https://formsubmit.co/info@anntechno.in" method="POST" >
  <div className="form-group">
   <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://anntechnobyraj.netlify.app/thankyou" />

    <label htmlFor="requirement">Describe Your Requirement</label>
    <textarea
      id="requirement"
      name="Requirement"
      rows="4"
      placeholder="I would like to..."
      required
    ></textarea>
  </div>

  <div className="form-group">
    <input
      type="number"
      name="Contact"
      placeholder="Enter Your Number"
      className="input-field"
      required
    />
  </div>

  <div className="form-group">
    <input
      type="text"
      name="Name"
      placeholder="Enter your name"
      className="input-field"
      required
    />
  </div>

  <button className="submit-button">Submit</button>
</form>
    </>
      
    
  )
}
