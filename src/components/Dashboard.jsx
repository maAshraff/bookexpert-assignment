import React, { use, useEffect, useState } from 'react'
import Summary from './Summary'
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import dummyDp from '../assets/dummy-profile.png'
import dummyDp1 from '../assets/dummy-profile-1.png'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    if(storedEmployees.length === 0){
      const mockData = [
      {id: 1, name: 'Mohammad', gender: 'Male', dob: '1947-08-15', image: dummyDp, state: 'Telangana' , active: true},
      {id: 2, name: 'Abdul', gender: 'Male', dob: '1948-01-26', image: dummyDp1, state: 'Delhi' , active: false},
      {id: 3, name: 'Ashraf', gender: 'Male', dob: '1947-08-15', image: dummyDp, state: 'Madhya Pradesh' , active: true},
      {id: 4, name: 'Ali', gender: 'Male', dob: '1948-01-26', image: dummyDp1, state: 'Bihar' , active: false},
      {id: 5, name: 'Iza', gender: 'Female', dob: '2000-05-23', image: '', state: 'Telangana' , active: true},
    ];
    localStorage.setItem('employees', JSON.stringify(mockData));
    setEmployees(mockData);
    }else{
      setEmployees(storedEmployees);
    }
    setLoading(false);

  }, []);

  useEffect(() => {
localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

const printList = () => {
  window.print();

}

const addEmployee = (employee) => {
  const newId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;

  const newEmployee = {
    ...employee, id : newId,
  }
  setEmployees([...employees, newEmployee]);
  setShowForm(false);


}
const updateEmployee = (updatedEmployee) => {
setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
setShowForm(false);
setEditingEmployee(null);
}
const handleEdit = (employee) => {
setEditingEmployee(employee);
setShowForm(true);
}
const deleteEmployee = (id) => {
  if(window.confirm('Are you Sure you want to delete this employee?')){
    setEmployees(employees.filter(emp => emp.id !== id));
  }

}
const toggleActive = (id) => {
  setEmployees(employees.map(emp => emp.id === id ? {...emp, active: !emp.active} : emp))

}
const handleCancel = () => {
setShowForm(false);
setEditingEmployee(null)
}

const navigate = useNavigate();
const handleLogut = () => {
   localStorage.removeItem('authToken', 'mock-token');
navigate('/login');
}


  const handleAddClick = () => {
    setShowForm(true);
    setEditingEmployee(null);

  }


  const filteredEmployees = employees.filter(emp => {
    return(
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) && (genderFilter ? emp.gender === genderFilter : true) && (statusFilter !== '' ? emp.active === (statusFilter === 'active') : true)
    );
  });

  if(loading){
    return <div className='text-center py-10'>Loading....</div>
  }
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className=' relative text-xl lg:text-3xl font-bold mb-6 pr-20'>Employee Management Dashboard <span onClick={handleLogut} className='absolute border p-2 hover:scale-90 transition-all right-0 top-0 text-sm text-red-300 cursor-pointer'>Logout</span></h1>
      <Summary employees={employees}/>
      <div className="mb-6 flex justify-between items-center">
        <button onClick={printList} className='bg-green-500 text-white p-3 rounded cursor-pointer hover:bg-green-600'>Print List</button>
       {
        !showForm && (
           <button onClick={handleAddClick} className='bg-blue-600 text-white p-3 cursor-pointer rounded hover:bg-blue-700 font-medium'>+ Add Employee</button>
        )
       }
      </div>

      {showForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <EmployeeForm onSubmit={editingEmployee ? updateEmployee : addEmployee} initialData={editingEmployee} onCancel={handleCancel} />
        </div>
      )}

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search by name...' className='flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
        <select name="gender" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className='p-3 border rounded-lg'>
          <option value="">All Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} name="status" className='p-3 border rounded-lg'>
           <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>

      </div>
      <EmployeeList employees={filteredEmployees}
      onEdit={handleEdit}
      onDelete={deleteEmployee}
      onToggleActive={toggleActive}
       />
       {
        filteredEmployees.length === 0 && !loading && (
          <p className='text-center py-2 text-gray-500 text-lg'>
            No Employees Found Matching Your Filters
          </p>
        )
       }
      
    </div>
  )
}

export default Dashboard