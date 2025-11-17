import React, { useState } from "react";
import "../src/css/login.css"
import { Link} from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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


    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Sign Up</h1>
          <p>Welcome back! Please sign up to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
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
            <label htmlFor="Name">Email address</label>
            <span className="input-border"></span>
          </div>
          <div className="input-group">
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

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              autoComplete="current-password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              <svg
                className="eye-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 3C4.5 3 1.6 5.6 1 8c.6 2.4 3.5 5 7 5s6.4-2.6 7-5c-.6-2.4-3.5-5-7-5zm0 8.5A3.5 3.5 0 118 4.5a3.5 3.5 0 010 7zm0-5.5a2 2 0 100 4 2 2 0 000-4z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <span className="input-border"></span>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" id="remember" name="remember" />
              <span className="checkmark">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4l2.5 2.5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {!loading ? (
              <span className="btn-text">Sign Up</span>
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

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="#4285F4"
                d="M14.9 8.161c0-.476-.039-.954-.118-1.421H8.021v2.681h3.833a3.321 3.321 0 01-1.431 2.161v1.785h2.3c1.349-1.25 2.177-3.103 2.177-5.206z"
              />
              <path
                fill="#34A853"
                d="M8.021 15c1.951 0 3.57-.65 4.761-1.754l-2.3-1.785c-.653.447-1.477.707-2.461.707-1.887 0-3.487-1.274-4.057-2.991H1.617V11.1C2.8 13.481 5.282 15 8.021 15z"
              />
              <path
                fill="#FBBC05"
                d="M3.964 9.177a4.97 4.97 0 010-2.354V4.9H1.617a8.284 8.284 0 000 7.623l2.347-1.346z"
              />
              <path
                fill="#EA4335"
                d="M8.021 3.177c1.064 0 2.02.375 2.75 1.111l2.041-2.041C11.616 1.016 9.97.446 8.021.446c-2.739 0-5.221 1.519-6.404 3.9l2.347 1.346c.57-1.717 2.17-2.515 4.057-2.515z"
              />
            </svg>
            Google
          </button>

          <button type="button" className="social-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#000000">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </button>
        </div>

        <div className="signup-link">
          <span>Already have an account? </span>
          <Link to="signin">Start your free trial</Link>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default SignUp
