import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const EmployeeList = ({employees, onEdit, onDelete, onToggleActive}) => {
  return (
    <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border rounded'>
            <thead>
                <tr>
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Gender</th>
                    <th className="p-2 border">DOB</th>
                    <th className="p-2 border">State</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>(
                        <tr key={emp.id}>
                            <td className="p-2 border">{emp.id}</td>
                            <td className="p-2 border">
                                {emp.image ? <img src={emp.image} alt='Profile' className='w-10 h-10 rounded-full' /> : 'No Image'}
                            </td>
                            <td className="p-2 border">{emp.name}</td>
                            <td className="p-2 border">{emp.gender}</td>
                            <td className="p-2 border">{emp.dob}</td>
                            <td className="p-2 border">{emp.state}</td>
                            <td className="p-2 border">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emp.active}
                    onChange={() => onToggleActive(emp.id)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium">{emp.active ? 'Active' : 'Inactive'}</span>
                </label>
              </td>
                            <td className="p-2 border tabel-cell space-x-2" style={{textAlignLast: 'center'}} >
                                <button className="text-blue-500 hover:text-blue-700 cursor-pointer" onClick={() => onEdit(emp)}><FaEdit /></button>
                                <button onClick={() => onDelete(emp.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer"><FaTrash /> </button>
                            </td>
                            
                        </tr>
                    ))
                }

            </tbody>

        </table>
        
    </div>
  )
}

export default EmployeeList