import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imgUrl = import.meta.env.VITE_IMAGE_URL;

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4 sm:px-8 md:py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="bg-white rounded-lg shadow-lg border p-6 max-w-xs mx-auto lg:mx-0" style={{ height: 400 }}>
            <div className="flex items-center mb-4">
              <img src={`${imgUrl}/img/others/DeepakGoal.png`} alt="Deepak Goel" className="w-16 h-16 sm:w-14 sm:h-14 rounded-full border-4 border-blue-800 mr-4" />
              <div>
                <h3 className="text-blue-800 font-serif text-lg font-semibold">CA Deepak Goel</h3>
                <span className="text-gray-500 font-serif text-sm">Sahil International PNP</span>
              </div>
            </div>
            <hr className="mb-2" />
            <p className="text-gray-700 font-serif text-base text-justify  h-48 sm:h-40">
              Our experience with Altaneo has been nothing short of fantastic. Their invoice discounting platform is straightforward and transparent, allowing us to access funds quickly and easily. The team is knowledgeable, responsive, and always goes above and beyond to meet our needs. Thanks to them, we've been able to overcome cash flow challenges.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border p-6 max-w-xs mx-auto lg:mx-0" style={{ height: 400 }}>
            <div className="flex items-center mb-4">
              <img src={`${imgUrl}/img/others/GouravDhmija.png`} alt="Gaurav Dhamija" className="w-16 h-16 sm:w-14 sm:h-14 rounded-full border-4 border-blue-800 mr-4" />
              <div>
                <h3 className="text-blue-800 text-lg font-serif font-semibold">CA Gaurav Dhamija</h3>
                <span className="text-gray-500 font-serif text-sm"></span>
              </div>
            </div>
            <hr className="mb-2" />
            <p className="text-gray-700 font-serif text-base text-justify  h-56 sm:h-40">
              Altaneo has been instrumental in helping us meet our working capital requirements. I, for one, would definitely recommend all vendors in the textile space who are facing working capital problems to give Altaneo a shot.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg border p-6 max-w-xs mx-auto lg:mx-0" style={{ height: 400 }}>
            <div className="flex items-center mb-4">
              <img src={`${imgUrl}/img/others/YogeshSingla.png`} alt="Yogesh Singla" className="w-16 h-16 sm:w-14 sm:h-14 rounded-full border-4 border-blue-800 mr-4" />
              <div>
                <h3 className="text-blue-800 text-lg font-serif font-semibold">Yogesh Singla</h3>
                <span className="text-gray-500 font-serif text-sm">Xieone Lifesciences Limited</span>
              </div>
            </div>
            <hr className="mb-2" />
            <p className="text-gray-700 text-base font-serif text-justify  h-48 sm:h-40">
              Altaneo has been pivotal in our life sciences venture, providing essential assistance with our working capital needs. Their expertise and support have made a significant impact on our operations, and I wholeheartedly recommend their services to others in the industry facing similar challenges.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
