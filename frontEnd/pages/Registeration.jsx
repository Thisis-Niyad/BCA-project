import React, { useState } from "react";
import "../src/css/login.css"

function Registeration() {
     const [email, setEmail] = useState("");
        const [Name, setName] = useState("");
      const [phoneNo, setphoneNo] = useState("");
      const [TextArea, setTextArea] = useState("");
      const [DOB, setDOB] = useState("");
      const [loading, setLoading] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
          alert("Welcome back!");
          setLoading(false);
        }, 1500);
      };
  return (
  <div className="loginBody">


    <div className="login-container2">
      <div className="login-card">
        <div className="login-header">
          <h1>Registeration</h1>
          <p>Welcome back! Please fill up the form to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
              <div className="input-group my-2">
            <input
              type="text"
              id="Name"
              name="Name"
              required
              autoComplete="Name"
              placeholder=" "
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Name">Name</label>
            <span className="input-border"></span>
          </div>
        
          <div className="input-group my-3">
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
            <span className="input-border"></span>
          </div>
          <div className='row2 my-2'>  
        <div className="input-group m-0 col-7">
            <input
              type="date"
              id="date"
              name="dob"
              required
              placeholder="DOB"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <label htmlFor="dob">Date of birth</label>
            <span className="input-border"></span>
          </div>
          <select class="form-select col-4" aria-label="Default select example" label="Gender">
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
</div>
          <div className="input-group my-2">
            <input
              type="number"
              id="Phone.no"
              name="phone.no"
              required
              autoComplete="current-password"
              placeholder="phone.no"
              value={phoneNo}
              onChange={(e) => setphoneNo(e.target.value)}
            />
            <label htmlFor="Phone.no">Phone.no</label>
            <span className="input-border"></span>
          </div>
        <div className='row'>
        <div class="col-md-6">
                    <div className="input-group my-2">
            <input
              type="text"
              id="Name"
              name="Name"
              required
              autoComplete="Name"
              placeholder=" "
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Name">State</label>
            <span className="input-border"></span>
          </div>
        </div>
        <div class="col-md-4">
                    <div className="input-group my-2">
            <input
              type="text"
              id="Name"
              name="Name"
              required
              autoComplete="Name"
              placeholder=" "
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Name">Town</label>
            <span className="input-border"></span>
          </div>
        </div>
        <div class="col-md-2">
                    <div className="input-group my-2">
            <input
              type="text"
              id="Name"
              name="Name"
              required
              autoComplete="Name"
              placeholder=" "
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="Name">pin</label>
            <span className="input-border"></span>
          </div>
        </div>
            </div>
          <div class="form-floating">
        <textarea class=" txtarea2  my-2"
           name="Address"
            placeholder="Address"
            id="floatingTextarea2 textarea"
            value={TextArea}
            onChange={(e) => setTextArea(e.target.value)}
         ></textarea>
        </div>
        <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Certificates</label>
        <input accept='.pdf' class="custom-file-input2" type="file" id="formFileMultiple" multiple />
        </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {!loading ? (
              <span className="btn-text">SUBMIT</span>
            ) : (
              <div className="btn-loader">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.25"
                  />
                  <path
                    d="M16 9a7 7 0 01-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="1s"
                      values="0 9 9;360 9 9"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            )}
          </button>
        </form>

      
     
        
      </div>
    </div>
    
    </div>
  )
}

export default Registeration
