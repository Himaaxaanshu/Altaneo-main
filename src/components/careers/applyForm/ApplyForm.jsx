import React, { useState } from 'react';

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-lg mx-auto p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Job Application</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="education">Education</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="text" 
            id="education" 
            name="education" 
            value={formData.education} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="experience">Work Experience</label>
          <textarea 
            className="w-full px-3 py-2 border rounded" 
            id="experience" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="resume">Resume</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="file" 
            id="resume" 
            name="resume" 
            onChange={handleFileChange} 
            required 
          />
        </div>

        <button 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" 
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
