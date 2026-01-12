import React, { useEffect, useState } from 'react'

const EmployeeForm = ({onSubmit, initialData, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        image: '',
        state: '',
        active: true,
    });
    const [error, setError] = useState({});
    const [preview, setPreview] = useState('');

    useEffect(() => {
        if(initialData){
            setFormData(initialData);
            setPreview(initialData.image);
        }

    }, [initialData])


const handleChange = (e) => {
     const {name, value } = e.target;
        setFormData({...formData, [name]: value})
}

const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({...formData, image: reader.result});
            setPreview(reader.result);
        }
        reader.readAsDataURL(file);
    }
}

 const validate = () => {
    const newErrors = {};
    if(!formData.name) newErrors.name = 'Name is required';
    if(!formData.gender) newErrors.gender = 'Gender is required';
    if(!formData.dob) newErrors.dob = 'DOB is required';
    if(!formData.state) newErrors.state = 'State is required';
    setError(newErrors);
    return Object.keys(newErrors).length === 0
 }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()) {
            onSubmit(formData);
            setFormData({
                 name: '',
        gender: '',
        dob: '',
        image: '',
        state: '',
        active: true,
            });
            setPreview('');
        }
       
    }
  return (
    <div className='bg-white p-6 rounded shadow mb-6'>
        <h2 className='text-xl font-bold mb-4 relative'>{initialData ? 'Edit Employee' : 'Add Employee'} <span onClick={onCancel} className='absolute right-0 top-0 cursor-pointer text-2xl text-bold text-black'>x</span></h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            onChange={handleChange} value={formData.name}
          />
          {error.name && <p className='text-red-500 text-sm'>{error.name}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium mb-1">Gender</label>
                <select name="gender" id="gender" className='w-full p-2 border rounded' onChange={handleChange} value={formData.gender}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {error.gender && <p className='text-red-500 text-sm'>{error.gender}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-medium mb-1">Date of Birth</label>
                <input onChange={handleChange} value={formData.dob} type="date" name='dob' id='dob' className='w-full p-2 border rounded'/>
                {error.dob && <p className='text-red-500 text-sm'>{error.dob}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="dp" className="block text-sm font-medium mb-1">Profile Image</label>
                <input name='image' onChange={handleImageChange}  type="file" accept='image/*' className='w-full p-2 border rounded' />
                {preview && <img src={preview} alt='preview' className='mt-2 w-20 h-20 rounded'/>}

            </div>
            <div className="mb-4">
                <label htmlFor='state' className="block text-sm font-medium mb-1">State</label>
                 <select onChange={handleChange} value={formData.state} id='state' name="state" className="w-full p-2 border rounded">
            <option value="">State</option>
            <option value="Telangana">Telangana</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
          </select>
          {error.state && <p className='text-red-500 text-sm'>{error.state}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="status" className='inline-flex items-center'>
                    <input type="checkbox" name='active' checked={formData.active} className='mr-2' onChange={(e) => setFormData({...formData, active: e.target.checked})} value={formData.active} />
                    Active
                </label>
                
            </div>
            <div className="flex space-x-2">
                <button type='submit' className='bg-blue-500 text-white py-3 px-5 cursor-pointer rounded hover:bg-blue-600'>{initialData ? 'update' : 'Add'}</button>
                {initialData && (
                    <button type='button' onClick={onCancel} className='bg-gray-500 text-white py-3 px-2 cursor-pointer rounded hover:bg-gray-600'>Cancel</button>
                )}
            </div>

        </form>

        
    </div>
  )
}

export default EmployeeForm