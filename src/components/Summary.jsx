import React from 'react'

const Summary = ({ employees }) => {
    const total = employees.length;
    const active = employees.filter(emp => emp.active).length;
    const inactive = total - active;

    return (
        <div className='grid grid-cols-3 gap-4 mb-6'>
            <div className="bg-white p-4 rounded shadow text-center lg:text-left">
                <h3 className='text-sm font-semibold lg:text-lg'>Total Employees</h3>
                <p className='text-sm lg:text-2xl'>{total}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center lg:text-left">
                <h3 className='text-sm font-semibold lg:text-lg'>Active</h3>
                <p className='text-sm lg:text-2xl'>{active}</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center lg:text-left">
                <h3 className='text-sm font-semibold lg:text-lg'>Inactive</h3>
                <p className='text-sm lg:text-2xl'>{inactive}</p>
            </div>
        </div>
    )
}

export default Summary