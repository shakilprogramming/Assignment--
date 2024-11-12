import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    useEffect(() => {
       
        document.title = "Register -Boss";
      }, []);
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        // Validation
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            toast.error("Password must be at least 6 characters long");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError("Password must contain both uppercase and lowercase characters");
            toast.error("Password must contain both uppercase and lowercase characters");
            return;
        }

       
        setError("");

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Registration successful!");
            })
            .catch((error) => {
                console.error(error);
                toast.error("Registration failed. Please try again.");
            });
    };

    return (
        <div className="">
            <Navbar />
            <h2 className="text-3xl my-10 text-center">Registration</h2>
            <div className="w-[70%] mx-auto min-h[600px] pb-5 p-2 border-2 border-red-500 rounded-xl">
                <form onSubmit={handleRegister} className="mx-auto md:w-3/4 lg:w-1/1 mx-auto">
                    <div className="form-control">
                        <input type="text" placeholder="Name" name="name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" name="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
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
                    {error && <small className="text-red-600">{error}</small>}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already Registered? <Link className="text-blue-400" to="/login">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
