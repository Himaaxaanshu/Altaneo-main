import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Captcha from './Captcha';
import Footer from '../Footer/Footer';
import Topbar from '../common/Topbar';
import { RiCoupon3Fill } from 'react-icons/ri';
import ContactUs from './ContactUs';

const imgUrl = import.meta.env.VITE_IMAGE_URL



const ContactUsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isCaptchaCorrect, setIsCaptchaCorrect] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    console.log('isCaptchaCorrect--', isCaptchaCorrect)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('isCaptchaCorrect:----', isCaptchaCorrect)

        return
        try {
            const response = await sendRequest({
                method: 'POST',
                url: 'http://localhost:8080/submitContactForm',
                data: formData
            })
            console.log(response.data);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            })
            setFormKey(Date.now())
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div className='bg-slate-200'>
            <Topbar
                title='Contact Us'
                desc='  Our team at Altaneofin is here to help! Reach out to us anytime,and we will ensure you get the support you need. Contact us today..'
                from='Home'
                to='Contact' />

            <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0">
                <div class="container xl:max-w-6xl mx-auto px-4">
                    <div class="flex flex-wrap flex-row -mx-4 text-center mt-5">
                        <div className="flex-shrink h-full px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-2 bg-blue-700 rounded-full p-3">
                                    <FaLocationDot color='white' size={20} />
                                </div>
                                <p className="text-sm leading-normal mb-2 font-normal text-black">934, Block-3, Spaze I tech park sector 49, Sohna Road, Gurugram</p>
                            </div>

                        </div>
                        <div className="flex-shrink px-4 h-full max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4 bg-blue-700 rounded-full p-3">
                                    <FaPhoneAlt color='white' size={20} />
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-normal text-black">+91 9817741345</h3>
                            </div>
                        </div>

                        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
                            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                                <div className="inline-block text-gray-900 mb-4 bg-blue-700 rounded-full p-3">
                                    <IoMdMail color='white' size={20} />
                                </div>
                                <h3 className="text-lg leading-normal mb-2 font-normal text-black">info@altaneofin.in</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <ContactUs />            
            <Footer />
        </div>
    )
}

export default ContactUsPage