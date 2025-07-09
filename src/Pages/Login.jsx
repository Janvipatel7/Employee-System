import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = ({ setIsLoggedin }) => {
    const [input, setInput] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            localStorage.setItem("isLoggedin", JSON.stringify(true))
            setIsLoggedin(true)
            navigate("/employees")
            toast.success("Logged In Succesfully..")
        } else {
            toast.error("Email Or Password Not Valid!!!!")
        }
    }

    return (
        <>
            <section className="bg-[#d4eeff] min-h-screen flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="px-8 py-10">
                        <h1 className="text-2xl font-extrabold text-[#081d45] mb-6 text-center">
                            Sign in
                        </h1>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-[#081d45] mb-2">
                                    Your email
                                </label>
                                <input onChange={handleChange}
                                    type="email"  name="email"  id="email"  placeholder="name@company.com"   required
                                    className="w-full px-4 py-3 text-sm border border-blue-300 rounded-xl focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-[#081d45] mb-2">
                                    Password
                                </label>
                                <input onChange={handleChange}
                                    type="password"  name="password" id="password"  placeholder="••••••••"   required
                                    className="w-full px-4 py-3 text-sm border border-blue-300 rounded-xl focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div className="text-left">
                                <a href="#" className="text-sm font-medium text-blue-500 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition">
                                <span className="tracking-wider">SIGN IN</span>
                                <div className="w-12 h-8 flex items-center justify-center rounded-xl bg-[#020c39]">
                                    <i className="ri-arrow-right-up-line text-white text-lg"></i>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login