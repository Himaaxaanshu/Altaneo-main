import React from 'react';
import Footer from '../Footer/Footer';
import { FaHandshake, FaLightbulb, FaBookOpen, FaHandHolding, FaQuestionCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Topbar from '../common/Topbar';
import ContactUs from '../ContectUs/ContactUs';
import Faqs from '../faq\'s/Faqs';
import Numbers from '../common/Numbers';
import { PiHandshakeLight } from "react-icons/pi";
import { FaRegFileLines } from "react-icons/fa6";
import { TbFileExport } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { SiGooglebigquery } from "react-icons/si";


const imgUrl = import.meta.env.VITE_IMAGE_URL;

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-800 text-center my-8">{title}</h2>
);


const visionArray = [
  { id: 1, icon: <FaLightbulb size={22} color='white' />, title: 'Innovation and Excellence', desc: 'Continuously innovate to stay at the forefront of financial technology, delivering top-tier quality and security across products.' },
  { id: 2, icon: <SiTicktick size={22} color='white' />, title: 'Inclusivity and Accessibility', desc: 'Bridge traditional banking gaps to serve underbanked populations through intuitive digital platforms for everyone.' },
  { id: 3, icon: <FaHandshake size={25} color='white' />, title: 'Transparency and Trust', desc: 'Foster transparency and ethical practices to earn trust, with robust security and responsive customer support.' },
  { id: 4, icon: <FaBookOpen size={22} color='white' />, title: 'Empowerment and Education', desc: 'Empower users with resources to make informed financial decisions and promote financial literacy across communities.' },
  { id: 5, icon: <FaHandHolding size={25} color='white' />, title: 'Sustainability and Responsibility', desc: 'Commit to sustainable practices that positively impact society and advocate for economic growth.' },
];

const VisionArraySection = () => (
  <section className="py-16 bg-gray-100">
    <SectionTitle title="Our Values" />
    <div className="container mx-auto grid gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {visionArray.map((data, index) => (
        <div key={data.id} className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex-shrink-0 p-4 bg-blue-500 rounded-full mr-4">
            {data.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
            <p className="text-gray-600">{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const products = [
  { id: 1, icon: <PiHandshakeLight size={22} color="white" />, title: 'Vendor Financing', description: 'At Altaneo, we empower your business with seamless vendor financing solutions to enhance cash flow and drive growth', link: '/products/vendor-financing' },
  { id: 2, icon: <FaRegFileLines size={22} color="white" />, title: 'Invoice Discounting', description: 'At Altaneo, we offer unparalleled solutions to help you monetize your accounts receivable efficiently.', link: '/products/invoice-discounting' },
  { id: 3, icon: <TbFileExport size={22} color="white" />, title: 'Export Credits', description: 'At Altaneo, we understand the pivotal role of smooth international trade transactions in propelling your business forward.', link: '/products/export-credits' },
  { id: 4, icon: < CiCreditCard1 size={22} color="white" />, title: 'Corporate Credit Card', description: 'At Altaneo, we understand the importance of simplifying business expenses and managing cash flow efficiently.', link: '/products/credit-card' },
  { id: 5, icon: <SiGooglebigquery size={22} color="white" />, title: 'ED Query Solutions', description: 'At Altaneo, we provide streamlined ED solutions to simplify compliance and mitigate risk for your business.', link: '/products/edquery-solutions' },
];


const ProductsSection = () => (
  <section className="mb-4 py-16 bg-gradient-to-b from-blue-800 to-gray-900">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Our Products</h2>
    <div className="container mx-auto grid gap-6 px-4 sm:gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 
            ${index % 2 === 0 ? 'lg:mt-12 sm:mt-4' : 'lg:mb-12 sm:mb-4'}`}
        >
          {/* Icon Container */}
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-b from-blue-800 to-gray-900">
            <span className="text-pink-500">{product.icon}</span>
          </div>
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.title}</h3>
          {/* Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>
          {/* More Link */}
          <a href={product.link} className="text-blue-500 font-semibold underline">MORE</a>
        </div>
      ))}
    </div>
  </section>
);

const Vision = () => {
  return (
    <>
      <Topbar
        title="Our Vision"
        desc="To revolutionize the supply chain industry with innovative financial solutions, 
      empowering businesses worldwide to achieve sustainable growth and efficiency."
        from="Home"
        to="Vision" />
      <VisionArraySection />
      <ProductsSection />
      <Numbers />
      <Faqs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Vision;
