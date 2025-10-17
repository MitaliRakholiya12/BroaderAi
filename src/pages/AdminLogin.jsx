import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Eye, EyeOff, Loader } from 'lucide-react';
import '../styles/AdminLogin.css';
import logo from "../assets/broader ai.png";


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAdmin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-content">
        <div className="admin-login-left">
          <div className="admin-login-logo">
            <img src={logo} alt="BROADER AI" className="admin-logo-img " />

           
          </div>

          <form className="admin-login-form" onSubmit={handleSubmit}>
            <h2 className="admin-login-title">Login</h2>

            {error && (
              <div className="admin-login-error">
                {error}
              </div>
            )}

            <div className="admin-form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@broaderai.com"
                required
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="password">Password *</label>
              <div className="admin-password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="admin-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="admin-login-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="admin-spinner" size={20} />
                  Wait
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>

        <div className="admin-login-right">
          <div className="admin-illustration">
            <div className="admin-illustration-content">
              <div className="admin-lock-icon">
                <div className="lock-body"></div>
                <div className="lock-keyhole"></div>
              </div>
              <div className="admin-phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">LOGIN</div>
                  <div className="phone-user-icon"></div>
                  <div className="phone-input"></div>
                  <div className="phone-input"></div>
                  <div className="phone-button">LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
