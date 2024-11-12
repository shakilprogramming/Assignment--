import { useContext, useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Login = () => {
    useEffect(() => {
       
        document.title = "LoginCai";
      }, []);
  const { signIn, googleLogin, setUser, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("Login failed. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => setUser(result.user))
      .catch(error => {
        console.error("Error with Google sign-in:", error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => setUser(result.user))
      .catch(error => {
        console.error("Error with GitHub sign-in:", error);
        toast.error("GitHub login failed. Please try again.");
      });
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-3xl my-10 text-center">This is login</h2>

      <div>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="w-full input input-bordered"
                required
              />
              <span
                className="absolute top-3 right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">New User? <Link className="text-blue-400" to="/register"> Please Register</Link></p>

        <div className="text-center mt-5 flex gap-5 justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-secondary">Google Login</button>
          <button onClick={handleGithubLogin} className="btn btn-secondary">GitHub Login</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
