import React, { useRef, useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Partners from '../../Partners/Partners';
import Footer from '../../Footer/Footer';
import Topbar from '../../common/Topbar';
import Numbers from '../../common/Numbers';
import { useHistory } from 'react-router-dom';

const imgUrl = import.meta.env.VITE_IMAGE_URL



const testimonials = [
    {
        quote: "“Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.”",
        author: "CA Deepak Goel",
        position: "Sahil international PNP",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
        quote: "“Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.”",
        author: "CA Gaurav Dhamija",
        position: "",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
        quote: "“Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.”",
        author: "Yogesh Singla",
        position: "Xieone Lifesciences Limited",
        logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    }
]

const InvoiceDiscountingPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const history = useHistory()

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    }
    const handleNavigation = (path) => {
        history.push(path)
        window.scrollTo(0, 0)
    }
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-16 p-6 sm:p-0">
                <Topbar
                    title="Invoice Discounting"
                    desc="Structured B2B marketplace for trade facilitation along with supply chain financing and trade intermediation."
                    from="Home &gt; Products"
                    to="Invoice Discounting"
                />
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                    <h1 className="text-4xl font-bold text-black text-center mb-10">Optimize Your Working Capital</h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="md:w-1/2">
                            <h2 className="text-xl text-black font-semibold mb-6">Optimize your working capital with Altaneo's innovative bill discounting services.</h2>
                            <p className="text-gray-700 text-base mb-4">
                                At Altaneo, we offer unparalleled solutions to help you monetize your accounts receivable efficiently. By leveraging our services, you gain immediate access to funds, empowering you to seize growth opportunities, meet operational expenses, and enhance liquidity with ease.
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
                            <img className="w-full h-80 object-cover" src={imgUrl + '/img/blogs/invoiceDiscounting.png'} alt="Gartner Magic Quadrant" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-2xl font-bold text-black mb-2">Benefits of Altaneo's Invoice Discounting</h1>
                            <p className="text-gray-700 text-base mb-6"></p>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                        Enhanced Purchasing Power
                                        <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                    </summary>
                                    <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                        <p className="text-gray-600 mt-2 text-sm ml-4">With Altaneo's corporate credit card solutions, you can enjoy enhanced purchasing power, enabling you to make necessary business purchases conveniently and efficiently.</p>
                                    </div>
                                </details>

                                <details className="group">
                                    <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                        Tailored Rewards and Benefits
                                        <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                    </summary>
                                    <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                        <p className="text-gray-600 mt-2 text-sm ml-4">Our corporate credit card solutions come with tailored rewards and benefits designed to meet the unique needs of your business. Earn rewards on your everyday business expenses and enjoy exclusive perks.</p>
                                    </div>
                                </details>

                                <details className="group">
                                    <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer transition duration-300 ease-in-out">
                                        Expense Management Insights
                                        <span className="text-blue-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">▾</span>
                                    </summary>
                                    <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 group-open:max-h-96">
                                        <p className="text-gray-600 text-sm mt-2 ml-4">Gain insights and control over your expenses with Altaneo's corporate credit card solutions. Track spending, monitor transactions, and optimize cash flow with advanced expense management tools.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <img className='w-full h-80 object-cover' src={imgUrl + '/img/others/benifits.png'} alt="AI Search" />
                        </div>
                    </div>

                </div>
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-2xl text-black font-bold mb-4">Enterprises, delight your customers</h1>
                            <p className="text-gray-700 text-base mb-4">
                                Grow your customer satisfaction - and sales. Because when your customers feel understood, they click and they come back.
                            </p>
                            <p className="text-gray-700 text-base mb-6">Get help from our experts to start fast and run efficiently.</p>
                        </div>
                        <div className="md:w-3/5 flex justify-center items-center p-6">
                        <div className="md:w-3/5 flex justify-center items-center p-6">
    <div className="relative w-full bg-white rounded-lg shadow-md overflow-hidden p-8 h-[300px]"> {/* Fixed height */}
        <div
            key={currentSlide}
            className="flex flex-col items-center text-center transition-opacity duration-700 opacity-100 h-full justify-center"
        >
            <blockquote className="text-gray-700 text-lg font-light italic leading-relaxed mb-6">
                {testimonials[currentSlide].quote}
            </blockquote>
            <p className="text-gray-900 font-semibold text-lg">
                {testimonials[currentSlide].author}
            </p>
            <p className="text-gray-500 text-sm">
                {testimonials[currentSlide].position}
            </p>
        </div>
    </div>
</div>

</div>

                    </div>
                </div>


                <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
                    <h1 class="text-4xl md:text-4xl text-black font-bold mb-4">Our Partners</h1>
                    <div class="flex justify-center items-center space-x-4 mb-8 overflow-hidden w-full">
                        <Partners />
                    </div>
                </div>

                <Numbers />
                <div className="flex items-center justify-center h-112 md:h-128 lg:h-144 mb-4 mt-10 w-full px-2 md:px-4 lg:px-0">
                    <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 bg-white">
                        <video
                            ref={videoRef}
                            className="w-full h-full rounded-2xl object-cover"
                            controls
                            onClick={handlePlayPause}
                        >
                            <source src={imgUrl + '/img/others/invoicediscounting.mp4'} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="py-8 bg-gray-100 text-center w-full">
                    <h2 className="text-5xl font-bold mt-4 mb-2">Products</h2>
                    <p className="max-w-md mx-auto text-base mb-4">
                        Take a moment to browse our additional products          </p>
                    <div className="flex flex-wrap justify-center space-x-2">
                        <button
                            onClick={() => handleNavigation('/products')}
                            className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
                        >
                            See All
                        </button>
                        <button
                            onClick={() => handleNavigation('/products/vendor-financing')}
                            className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
                        >
                            Vendor Financing
                        </button>
                        <button
                            onClick={() => handleNavigation('/products/export-credits')}
                            className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
                        >
                            Export Credits
                        </button>
                        <button
                            onClick={() => handleNavigation('/products/credit-card')}
                            className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
                        >
                            Credit Card
                        </button>
                        <button
                            onClick={() => handleNavigation('/products/edquery-solutions')}
                            className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
                        >
                            Ed Query
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InvoiceDiscountingPage;