import React, { useState } from 'react';
import { ArrowLeft, Mail, Eye, EyeOff, Loader2 } from 'lucide-react';

const UserLoginPage = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'verify'
  const [verificationCode, setVerificationCode] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !acceptedTerms) {
      setError('Please fill all fields and accept terms');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulated API call - replace with actual axios call
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStep('verify');
      } else {
        setError('Failed to send verification code');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    if (!verificationCode) {
      setError('Please enter verification code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulated verification - replace with actual axios call
      const response = await fetch('/api/user/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      if (response.ok) {
        // Handle successful login
        alert('Login successful!');
      } else {
        setError('Invalid verification code');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth login
    console.log('Google login clicked');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-red-600 via-red-500 to-red-600 flex flex-col justify-between p-8 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-white"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full border-2 border-white"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full border-2 border-white"></div>
        </div>

        {/* Back Button */}
        <button 
          onClick={() => step === 'verify' ? setStep('email') : window.history.back()}
          className="flex items-center text-white hover:text-red-200 transition-colors z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Logo and Branding */}
        <div className="flex-1 flex flex-col justify-center items-center z-10">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">NP</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">THE NEWS PORTAL</h1>
          <p className="text-red-100 text-center">Stay informed with the latest news and updates</p>
        </div>

        {/* Footer */}
        <div className="text-center text-red-200 z-10">
          <p>&copy; 2025 NEWS PORTAL. All rights reserved.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {step === 'email' ? (
            <>
              {/* Welcome Message */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome!</h2>
                <p className="text-gray-600">Sign in to continue to your account</p>
              </div>

              {/* Google Sign In */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors mb-6"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </button>

              {/* Divider */}
              <div className="flex items-center mb-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">Or sign in with your email</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Email Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 mr-3"
                  />
                  <label className="text-sm text-gray-600">
                    I have read and accepted the{' '}
                    <a href="#" className="text-blue-600 hover:underline">T&C</a>
                    {' '}and the{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    {' '}for use of the News Portal Website.
                  </label>
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}

                <button
                  onClick={handleEmailSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-medium hover:from-red-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Verification Step */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
                <p className="text-gray-600">We've sent a verification code to</p>
                <p className="text-red-600 font-medium">{email}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-center text-lg tracking-widest"
                    placeholder="Enter 6-digit code"
                    maxLength="6"
                  />
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}

                <button
                  onClick={handleVerifySubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-medium hover:from-red-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Verify & Sign In'
                  )}
                </button>

                <button
                  onClick={() => setStep('email')}
                  className="w-full text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Resend Code
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;