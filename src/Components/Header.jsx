import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


const Header = ({ isLoggedin, setIsLoggedin }) => {
     const [menu, setMenu] = useState(false)
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const handleClick = () => {
        setIsLoggedin(false);
        localStorage.setItem("isLoggedin", JSON.stringify(false))
        toast.success("Logged Out Succesfully..")
        navigate("/");
    }

    function handleLogin() {
        navigate("/Login")
    }

    console.log(isLoggedin);

    return (
        <>
            <nav className="bg-[#D9F1FF] ">
                <div className="container max-mx-auto flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/Images/logo.svg" alt="icon" className="w-40 pt-3" />
                    </Link>

                    <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className={`${pathname == "/" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/services" className={`${pathname == "/services" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`${pathname == "/contact" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Contact</Link>
                            </li>
                            {
                                isLoggedin && (
                                    <li>
                                        <Link to="/employees" className={`${pathname === "/employees" || pathname === "/add-employees" || pathname.includes("/edit-employee") ? "text-[#214ebe]" : "text-[#010e37]"}`}>Employees</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="md:hidden">
                            <button onClick={() => setMenu(!menu)} className="text-black text-2xl">
                                {menu ? '✕' : '☰'}
                            </button>
                        </div>
                        {
                            isLoggedin ? (
                                <button onClick={handleClick}
                                    type="button" className="flex items-center justify-between gap-4 px-3 py-2 bg-[#010e37] text-white font-semibold rounded-2xl border border-blue-500 shadow-md hover:shadow-lg transition duration-300">
                                    <span>Logout</span>
                                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                                        <i className="ri-arrow-right-up-line text-white text-lg"></i>
                                    </div>
                                </button>
                            ) : (
                                <button onClick={handleLogin}
                                    type="button" className="flex items-center justify-between gap-4 px-3 py-2 bg-[#010e37] text-white font-semibold rounded-2xl border border-blue-500 shadow-md hover:shadow-lg transition duration-300">
                                    <span>Login</span>
                                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700">
                                        <i className="ri-arrow-right-up-line text-white text-lg"></i>
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </nav>
            
            {menu && (
                <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 p-6 overflow-y-auto">
                    <ul className="flex flex-col space-y-4 p-2 font-semibold">
                        <li>
                            <Link to={"/"} onClick={() => setMenu(false)} className={`${pathname == "/" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/services"} onClick={() => setMenu(false)} className={`${pathname == "/services" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Services</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={() => setMenu(false)} className={`${pathname == "/contact" ? "text-[#214ebe]" : "text-[#010e37]"}`}>Contact</Link>
                        </li>
                        {isLoggedin && (<Link to={"/employees"} onClick={() => setMenu(false)} className={`${pathname == "/employees" || pathname == "/add-employee" || pathname.includes("/edit-employee") ? "text-[#214ebe]" : "text-[#010e37]"}`}>Employees</Link>)}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Header