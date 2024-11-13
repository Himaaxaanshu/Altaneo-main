import React from 'react'


const imgUrl = import.meta.env.VITE_IMAGE_URL
const Connect = () => {
    return (
        <div
            className="relative w-3/4  mb-4 h-96 bg-cover bg-center rounded-xl mx-auto overflow-hidden"
            style={{ backgroundImage: `url(${imgUrl + '/img/others/connect.png'})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                <h1 className="text-white text-4xl font-bold mb-2">Unlock Exceptional Financial Gains</h1>
                <p className="text-white text-lg mb-6">Boost your financial potential with our helpful insights and trusted advice.</p>
                <a href="/login" className='' target="_blank">
                    <button className="bg-blue-600 text-white mt-2 py-2 px-6  rounded-full hover:bg-blue-700 transition duration-300">
                        Connect
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Connect