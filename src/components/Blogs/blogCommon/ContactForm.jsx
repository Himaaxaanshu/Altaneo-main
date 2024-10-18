import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`${name}: ${value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        setTimeout(() => {
            setLoading(false);
            console.log("Form submitted:", formData);
        },1000)
        toast.success("Detail's sent Successfully!")
        setFormData({
            name:'',
            email:'',
            phone:''
        })
    };

    return (
        <div className="bg-blue-100 rounded-md mx-auto sm:w-80 md:w-96 p-6 text-white relative mt-6">
            <h5 className="font-serif text-center mb-4 text-black font-bold text-lg md:text-xl">START YOUR JOURNEY</h5>

            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser color="black" />
                </div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 p-2.5 border rounded-3xl placeholder-gray-400 text-black text-sm md:text-base"
                    placeholder="Full Name"
                />
            </div>

            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MdEmail color="black" />
                </div>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-2.5 border rounded-3xl placeholder-gray-400 text-black text-sm md:text-base"
                    placeholder="Email"
                />
            </div>

            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPhoneAlt color="black" />
                </div>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 p-2.5 border rounded-3xl placeholder-gray-400 text-black text-sm md:text-base"
                    placeholder="Phone Number"
                />
            </div>

            <div className="flex justify-center">
                <span className="text-center text-black text-xs md:text-sm font-bold">Our team will contact you soon!</span>
            </div>


            <div className="flex justify-center">
                <button
                    className="flex justify-center items-center font-serif w-48 md:w-60 max-w-xs mb-4 mt-3 bg-black font-semibold text-white text-lg md:text-xl rounded-full py-2 px-6 hover:bg-gray-800"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? (
                        <FaSpinner className="animate-spin text-white" />
                    ) : (
                        "Let's go"
                    )}
                </button>
            </div>

        </div>
    );
}

export default ContactForm;
