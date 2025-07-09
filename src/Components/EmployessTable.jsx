import { Link } from "react-router-dom"


const EmployessTable = ({ employees , deleteEmployee}) => {

  const handleDelete = (id) => {
    deleteEmployee(id)
  }

  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-md text-white bg-[#172b6ff0]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  employees.map((emp, idx) => {
                    return <tr key={emp.id} className="odd:bg-white  even:bg-gray-50  border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {idx + 1}
                      </th>
                      <td className="px-6 py-4 text-gray-900">
                        {emp.name}
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        $ {emp.salary}
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                        {emp.department == 1 ? "Designing" : emp.department == 2 ? "Development" : emp.department == 3 ? "Finance" : "Sales and Marketing"}
                      </td>
                      <td className="px-6 py-4 text-gray-900 flex text-xl gap-7">
                        <Link to={`/edit-employee/${emp.id}`} className="font-medium text-green-600">
                          <i class="ri-edit-box-line"></i>
                        </Link>
                        <button className="font-medium text-red-600" onClick={() =>handleDelete(emp.id)}>
                            <i class="ri-delete-bin-line"></i>
                        </button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmployessTable