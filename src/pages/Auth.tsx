import { useState, type FormEvent } from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImage from "../assets/bgImage.jpg";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center bg-white min-h-screen">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden">
          {/* left side */}
          <div className="lg:w-1/2 w-full p-12">
            <div className="flex flex-col">
              <h3 className="text-3xl text-gray-700 mb-2 font-bold">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h3>
              <p className="text-gray-600">
                {isLogin
                  ? "Login to your forever account"
                  : "Create a forever account"}
              </p>
            </div>

            {/* Social button */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded cursor-pointer">
                <img className="w-5" src={facebook} alt="facebook" />
                Facebook
              </button>
              <button className="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded cursor-pointer">
                <img className="w-5" src={google} alt="google" />
                Google
              </button>
            </div>

            {/* line */}
            <div className="flex items-center gap-4 mt-6">
              <div className="grow border-t border-gray-300"></div>
              <span className="text-gray-700">or</span>
              <div className="grow border-t border-gray-300"></div>
            </div>

            {/* Authentication Form */}
            <form onSubmit={handleSubmit}>
              {/*First Name and Last Name field*/}
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                    />
                  </div>
                </div>
              )}
              {/* Email Field */}
              <div className="mb-4 mt-6">
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                />
              </div>
              {/* Password Field */}
              <div className="mb-4 mt-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password field */}

              {!isLogin && (
                <div className="mb-4 mt-6">
                  <label className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder:text-sm placeholder:text-gray-600"
                    />
                    <button
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-3 right-3 text-gray-600 hover:text-gray-700 cursor-pointer"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              )}
              {/* Remember checkbox */}
              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input className="w-4 h-4" type="checkbox" name="" id="" />
                    <span className="text-sm text-gray-700 font-semibold">
                      Remember Me
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-amber-600 text-sm font-semibold hover:underline"
                  >
                    Forget Password
                  </a>
                </div>
              )}

              {/* Login & SignUp Button */}
              <div className="mt-6 mb-2">
                <button className="w-full bg-amber-600 text-white font-bold rounded cursor-pointer py-2">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
              <p className="text-sm text-center text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-amber-600 hover:underline ml-2 cursor-pointer"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </p>
            </form>
          </div>
          {/* right side */}
          <div
            className="relative w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative text-center">
              <h3 className="text-3xl font-bold">
                Login your account and explore it.
              </h3>
              <p className="max-w-sm mx-auto">
                Login your account and save orders, carts, items and enjoy
                offers
              </p>
              <button className="mt-6 px-6 py-2 border-2 border-white rounded cursor-pointer font-bold hover:bg-amber-600 transition-all">
                Create an Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
