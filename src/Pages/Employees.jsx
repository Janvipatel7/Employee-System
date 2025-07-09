import React, { useEffect, useState } from 'react'
import EmployessTable from '../Components/EmployessTable'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Employees = () => {
    const navigate = useNavigate();
    const [employees , setEmployees] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
    }, [])

    const deleteEmployee = (id) => {
        const updatedEmployees = employees.filter((emp) => {
            return emp.id != id;
        })
       setEmployees(updatedEmployees);
       localStorage.setItem("employees" , JSON.stringify(updatedEmployees));
       toast.success("Employee Deleted Successfully.....");
    }
    return (
        <>
            <section className='bg-[#D9F1FF] h-screen p-[100px]'>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between pb-7">
                        <h1 className="text-3xl font-semibold text-[#010e37]">Employees Details</h1>
                        <button onClick={() => navigate("/add-employees")} type="button" className="text-white bg-gradient-to-br from-blue-600 to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                            <i className="ri-add-fill"></i>Add Employess
                        </button>
                    </div>
                    <div>
                        <EmployessTable employees={employees} deleteEmployee={deleteEmployee}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employees