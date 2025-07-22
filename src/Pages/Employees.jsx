import React, { useEffect, useState } from 'react'
import EmployessTable from '../Components/EmployessTable'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchEmp, setSearchEmp] = useState([]);
    const [search, setSearch] = useState({ name: '', dept: '' })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setSearchEmp(data);
    }, [])

    const deleteEmployee = (id) => {
        const updatedEmployees = employees.filter((emp) => {
            return emp.id != id;
        })
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        toast.success("Employee Deleted Successfully.....");
    }

    let newArr = [...employees]
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch({ ...search, [e.target.id]: e.target.value })
        let searchedArr = value.trim() == '' ? searchEmp : searchEmp.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        setEmployees(searchedArr)

    }


    const handleChange = (e) => {
        const value = e.target.value;

        setSearch({ ...search, [e.target.id]: e.target.value })
        let searchedArr = value.trim() == '' ? searchEmp : searchEmp.filter((item) => {
            console.log(item.department);

            return item.department == value;
        })
        setEmployees(searchedArr)
    }


    return (
        <>
            <section className="bg-[#D9F1FF] min-h-screen p-5 md:p-[100px]">
                <div className="container mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#010e37] mb-7 text-center md:text-left">
                        Employees Details
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 my-5">
                        <input type="text" placeholder="Search Name" value={search.name} id="name"  onChange={handleSearch}
                            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2 w-full md:w-[350px]"/>

                        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full md:w-auto">
                            <select onChange={handleChange} value={search.department} id="dept"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full sm:w-[250px] p-2.5">
                                <option value="">Choose a Department</option>
                                <option value="1">Designing</option>
                                <option value="2">Development</option>
                                <option value="3">Finance</option>
                                <option value="4">Sales And Marketing</option>
                            </select>

                            <button onClick={() => navigate("/add-employees")} type="button"
                                className="text-white bg-gradient-to-br from-blue-600 to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 w-full sm:w-auto">
                                <i className="ri-add-fill"></i> Add Employees
                            </button>
                        </div>
                    </div>


                    <div className="overflow-x-auto">
                        <EmployessTable  employees={employees}  setEmployees={setEmployees}  deleteEmployee={deleteEmployee}/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Employees