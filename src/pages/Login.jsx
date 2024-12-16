import React, { useState } from "react";
import backgreen from "../assets/backgreen.svg";
import emailIcon from "../assets/email.svg";
import passwordIcon from "../assets/password.svg";
import loginillus from "../assets/loginillus.png";
import illusback from "../assets/illusback.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${backgreen})` }}
    >
      <div className="loginWrapper bg-white shadow-2xl rounded-xl flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-6 text-center">
            Welcome Back, Eco-Warrior! 🌿
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm sm:text-lg">
            The Earth appreciates your efforts. Let’s calculate, track, and save our home, one footprint at a time.
          </p>
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-3 pl-14 pr-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
              </span>
            </div>
            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full py-3 pl-14 pr-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <img src={passwordIcon} alt="Password Icon" className="w-6 h-6" />
              </span>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white text-lg sm:text-xl font-bold rounded-lg hover:bg-green-700 transition duration-300"
            >
              Let’s Dive In 🌏
            </button>
          </form>
        </div>

        {/* Right Side: Motivational Content */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-green-100 to-green-200 flex flex-col justify-between items-center p-6 sm:p-10 text-center">
          {/* Top Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4">
              Act Today for a Greener Tomorrow
            </h3>
            <p className="text-gray-700 text-sm sm:text-lg">
              Reducing your carbon footprint is not just about numbers—it’s about taking responsibility for the world we leave behind. Every effort, big or small, counts.
            </p>
          </div>

          {/* Illustration */}
          <div
            className="my-8 relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] mx-auto"
            style={{
              backgroundImage: `url(${illusback})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={loginillus}
              alt="Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bottom Content */}
          <div>
            <p className="text-gray-800 text-sm sm:text-lg">
              🌳 Let’s make conscious choices and leave a positive mark on our planet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
