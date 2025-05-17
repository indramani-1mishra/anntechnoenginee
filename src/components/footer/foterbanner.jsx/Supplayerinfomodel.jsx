import React, { useContext, useState } from 'react';
import SearchContext from '../../../context/context';
import './footerbanner.css'

const SupplierInfoModal = () => {
  //const [isOpen, setIsOpen] = useState(true);
 const {setshowemail,showemail}= useContext(SearchContext);

 
  const closeModal = () => setshowemail(false);

  return (
    <>
      {/* Button to open modal */}
     

      {/* Modal */}
      { showemail && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button onClick={closeModal} style={styles.closeButton}>×</button>

            <div style={styles.logo} className='imgco'>
              <img src="https://5.imimg.com/data5/SELLER/Logo/2023/5/310355896/WD/VB/HG/108774879/dp-120x120.png" alt="Company Logo" width="120" />
              <h3>ANN Techno Engineer</h3>
            </div>

            <h3 className='h33'>Supplier wants to know more about you</h3>

        <form style={styles.form} action="https://formsubmit.co/info@anntechno.in" method="POST">
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://anntechnobyraj.netlify.app/thankyous" />

  <input
    type="text"
    name="Name"
    placeholder="Enter your name"
    required
    className="inputboxc"
  />
  <input
    type="email"
    name="Email"
    placeholder="Enter your email"
    required
    className="inputboxc"
  />
  <input
    type="text"
    name="Company"
    placeholder="Company / Business Name"
    className="inputboxc"
  />
  <input
    type="text"
    name="Address"
    placeholder="Your Address"
    className="inputboxc"
  />
  <input
    type="tel"
    name="Contact"
    placeholder="Contact Number"
    required
    className="inputboxc"
  />

  {/* ✅ Textarea for user requirement */}
  <textarea
    name="requirement"
    placeholder="Tell us about your requirement"
    rows="4"
    className="inputboxc"
    style={{ resize: 'vertical', padding: '10px' }}
  ></textarea>

  <button type="submit" style={styles.submitButton}>Submit</button>
  <p style={styles.note}>You are just a click away from getting quotes</p>
</form>



          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  openButton: {
    padding: '10px 20px',
    backgroundColor: '#a24100',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    background: 'white',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  logo: {
    textAlign: 'center',
    marginBottom: '15px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#009688',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  note: {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px'
  }
};

export default SupplierInfoModal;
