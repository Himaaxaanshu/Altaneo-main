import React, { useRef } from 'react';
import Footer from '../../Footer/Footer';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Partners from '../../Partners/Partners';
import Topbar from '../../common/Topbar';
import Numbers from '../../common/Numbers';
import { useHistory } from 'react-router-dom';

const imgUrl = import.meta.env.VITE_IMAGE_URL


const CreditCardPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = [
    {
      quote: "“Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.”",
      author: "CA Deepak Goel",
      position: "Sahil international PNP",
      // logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
      quote: "“Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.”",
      author: "CA Gaurav Dhamija",
      position: "",
      // logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    },
    {
      quote: "“Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.”",
      author: "Yogesh Singla",
      position: "Xieone Lifesciences Limited",
      // logo: "https://via.placeholder.com/100x40?text=THE+TIMES"
    }
  ]


  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  }
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
          title="Credit Card"
          desc="We have designed our Corporate Credit Cards for businesses of all sizes, which offer streamlined expense tracking, flexible spending limits, and comprehensive reporting tools."
          from="Home &gt; Products"
          to="Credit Card"
        />
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl  text-center mt-6">
          <h1 className="text-4xl font-bold text-black text-center mb-6">Simplify Your Business Expenses</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2">
              <h2 className="text-xl text-black font-semibold mb-4">With Altaneo's corporate credit cards, you can enjoy enhanced purchasing power, rewards, and benefits, all while gaining insights and control over your expenses.
              </h2>
              <p className="text-gray-700 text-base mb-4">
                At Altaneo, we understand the importance of simplifying business expenses and managing cash flow efficiently. That's why we offer comprehensive corporate credit card solutions tailored to meet the unique needs of your business.
              </p>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
              <img className="w-full h-60 object-cover" src={imgUrl + '/img/others/productcredit.png'} />
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-8xl text-center mt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl font-bold text-black mb-2">Benefits of Altaneo's Corporate Credit Cards</h1>
              <p className="text-gray-700 text-base mb-6">AltaNeo's Credit Card's have unique benefit's</p>
              <div className="space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
                    Enhanced Purchasing Power
                    <span className="text-blue-600 group-open:rotate-180">▾</span>
                  </summary>
                  <p className="text-gray-600 mt-2 text-sm ml-4"> Altaneo's corporate credit cards provide your business with increased spending flexibility, allowing you to make necessary purchases without liquidity constraints.</p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
                    Rewards and Benefits
                    <span className="text-blue-600 group-open:rotate-180">▾</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-2 ml-4">Take advantage of rewards programs and benefits tailored to suit your business needs, including cashback, travel rewards, and discounts on business-related expenses.</p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
                    Expense Management
                    <span className="text-blue-600 group-open:rotate-180">▾</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-2 ml-4">Gain insights and control over your expenses with detailed transaction reporting and expense management tools. Monitor spending patterns, track individual card usage, and streamline expense reimbursement processes.</p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
                    Improved Cash Flow
                    <span className="text-blue-600 group-open:rotate-180">▾</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-2 ml-4">Altaneo's corporate credit cards help improve cash flow by providing access to revolving credit lines. This enables you to manage short-term cash needs and optimize working capital.</p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center w-full py-2 text-left font-semibold text-lg text-gray-800 cursor-pointer">
                    Security and Fraud Protection
                    <span className="text-blue-600 group-open:rotate-180">▾</span>
                  </summary>
                  <p className="text-gray-600 text-sm mt-2 ml-4">Protect your business against unauthorized transactions and fraudulent activity with advanced security features, including fraud monitoring, purchase protection, and liability protection.</p>
                </details>
              </div>
            </div>
            <div className="md:w-1/2">
              <img className='w-full h-96 object-cover' src={imgUrl + '/img/others/benifits.png'} alt="AI Search" />
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
            <div className="md:w-2/4 flex justify-center items-center">
              <div className="relative w-full">
                <SwitchTransition>
                  <CSSTransition
                    key={currentSlide}
                    addEndListener={(node, done) => {
                      node.addEventListener('transitionend', done, false);
                    }}
                    classNames={{
                      enter: 'transition-opacity duration-1000 ease-in-out',
                      enterActive: 'opacity-100',
                      exit: 'transition-opacity duration-1000 ease-in-out',
                      exitActive: 'opacity-0'
                    }}
                  >
                    <div className="flex flex-col p-8 items-center text-center">
                      <blockquote className="text-black mt-12 italic">{testimonials[currentSlide].quote}</blockquote>
                      <p className="text-black font-bold text-md p-2 mt-4">{testimonials[currentSlide].author}</p>
                      <p className="text-black  text-sm mb-4">{testimonials[currentSlide].position}</p>
                      {/* <img src={testimonials[currentSlide].logo} alt="Logo" className="mt-4 w-24 h-auto" /> */}
                    </div>
                  </CSSTransition>
                </SwitchTransition>
                <div className="flex justify-between mt-4">
                  <button className="w-10 h-10 bg-gray-200 text-black rounded-full hover:bg-gray-400 transition-all flex items-center justify-center" onClick={previousSlide}>
                    &lt;
                  </button>
                  <button className="w-10 h-10 bg-gray-200 text-black rounded-full hover:bg-gray-400 transition-all flex items-center justify-center" onClick={nextSlide}>
                    &gt;
                  </button>
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

        <div className="flex items-center justify-center h-112 md:h-128 lg:h-144 mb-4 mt-20 w-full overflow-x-hidden">
          <div className="w-full max-w-full px-2 sm:px-4 md:px-0 md:w-3/4 lg:w-2/3 bg-white">
            <video
              ref={videoRef}
              className="w-full h-full max-w-full rounded-2xl object-cover"
              controls
              onClick={handlePlayPause}
            >
              <source src={imgUrl + '/img/others/corporatecreditcard.mp4'} type="video/mp4" />
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
              onClick={() => handleNavigation('/products/invoice-discounting')}
              className="bg-gray-200 border border-blue-500 text-blue-500 rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white m-1"
            >
              Invoice Discounting
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
  )
}

export default CreditCardPage;