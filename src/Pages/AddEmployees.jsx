import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployees = () => {
    const [input, setInput] = useState({
        name: "", salary: "", department: ""
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};
        if (input.name.trim() === "") {
            tempObj.name = "Please Enter the Name";
        }
        setError(tempObj);

        if (Object.keys(tempObj).length > 0) {
            return;
        }

        const employeeDetail = { id: Date.now(), ...input };
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employeeDetail);

        localStorage.setItem("employees", JSON.stringify(employees));
        setInput({ name: "", salary: "", department: "" });
        navigate("/employees");
        console.log(employees);
    };

    return (
        <>
            <div className="bg-[#D9F1FF] h-screen flex items-center justify-center px-4 py-10">
                <div className="container mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden h-[80vh]">

                        <div className="md:w-5/12  bg-[#0d47a1] flex items-center justify-center">
                            <img
                                src="/Images/img-3.png"
                                alt="Form Illustration"
                                className=" max-w-lg object-contain"/>
                        </div>

                        <div className="md:w-7/12 w-full flex items-center justify-center p-6 md:p-10">
                            <div className="w-full">
                                <h1 className="text-3xl font-semibold text-[#010e37] mb-8">Add Employee Here......</h1>

                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-3">
                                        <div className="w-full md:w-6/12 px-3 mb-6">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                                            <input  type="text"  id="name"  onChange={handleChange}  value={input.name}
                                                className={`bg-gray-50  text-gray-900 text-sm  border border-blue-400 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md ${error.name ? "border-red-300" : "border-blue-300"}`}
                                                placeholder="John" required/>
                                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                                        </div>

                                        <div className="w-full md:w-6/12 px-3 mb-6">
                                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                                            <input type="number" id="salary" onChange={handleChange} value={input.salary}
                                                className="bg-gray-50   text-gray-900 text-sm  border border-blue-400 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md"
                                                placeholder="Enter salary amount" required />
                                        </div>

                                        <div className="w-full md:w-6/12 px-3 mb-6">
                                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                                            <select id="department" onChange={handleChange} value={input.department}
                                                className="bg-gray-50  text-gray-900 text-sm  border border-blue-400 rounded-lg focus:ring-1 focus:ring-blue-500 focus:outline-none w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md">
                                                <option value="">Choose a Department</option>
                                                <option value="1">Designing</option>
                                                <option value="2">Development</option>
                                                <option value="3">Finance</option>
                                                <option value="4">Sales And Marketing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-6/12 px-3 mt-7">
                                        <button type="submit"
                                            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddEmployees;
