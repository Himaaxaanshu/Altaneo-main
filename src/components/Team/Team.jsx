import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const imgUrl = import.meta.env.VITE_IMAGE_URL

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: window.innerWidth <= 768,
    pauseOnFocus: window.innerWidth <= 768,
  }


  return (
    <Slider {...settings} className='w-full overflow-hidden box-border sm:px-2'>
      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-hidden rounded lg:overflow-hidden">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={imgUrl + '/img/team/ceo.png'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 overflow-scroll ">
              <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-800 uppercase">
                Meenakshi
              </h6>
              <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Chairperson
              </h4>
              <hr />
              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 overflow-scroll text-justify">
                I'm delighted to introduce you to Altaneo, where innovation meets efficiency in the realm of supply chain finance. As the Chairperson, I'm immensely proud of the transformative solutions we offer to businesses worldwide, redefining how they manage their financial operations within intricate supply chains.
                <br />
                <br />
                At Altaneo, we understand the pivotal role that supply chains play in the success of modern enterprises. Yet, we also recognize the inherent complexities and challenges they entail, from cash flow management to risk mitigation. That's why we've dedicated ourselves to crafting cutting-edge fintech solutions tailored to meet the diverse needs of our clients.
                <br />
                <br />
                Our commitment extends beyond mere financial transactions. We're passionate about fostering sustainability, resilience, and ethical practices within supply chains. By prioritizing environmental, social, and governance (ESG) principles, we're not just driving profitability but also catalysing positive change in communities and ecosystems worldwide.
                <br />
                <br />
                As we embark on this journey of innovation and transformation, I invite you to join us in shaping the future of supply chain finance. Together, let's unlock new possibilities, forge lasting partnerships, and pave the way for a more connected, sustainable, and prosperous global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-scroll rounded-lg lg:overflow-visible">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={imgUrl + '/img/team/team1.png'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            
          </div>
        </div>
      </div>

      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-scroll rounded-lg lg:overflow-visible">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={imgUrl + '/img/team/team2.png'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            
          </div>
        </div>
      </div>

      <div className='px-3'>
        <div className="grid max-h-[400px] w-full place-items-center overflow-scroll rounded-lg lg:overflow-visible">
          <div className="relative max-h-[400px] flex w-full max-w-[50rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
              <img
                src={imgUrl + '/img/team/team3.png'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
            
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Team;
