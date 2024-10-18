import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import machineLearning from '../../../../public/assets/img/machineLearning.png';
import blockchainTechnology from '../../../../public/assets/img/blockchainTechnology.png';
import Topbar from '../../common/Topbar';
import ayushi from '../../../../public/assets/img/ayushi.png'

const Jyotika = () => {
  const blogData = [
    {
        id: 9,
        title: 'The Hidden Marketing Power of Optimised Supply Chain Finance',
        img: fintech,
        route: 'OptimisedSupply',
        oneLine: "In the competitive market, We often focus on customer-facing strategies to build brand loyalty. But what if I...",
        author: 'Ayushi',
        designation: 'Digital Marketing Executive'
     },
  ];

  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickReadMore = (route) => {
    history.push(`/blogs/${route}`);
  };

  const onClickAuthor = (author) => {
    if (author === 'Ayushi') {
      history.push(`/blogs/Ayushi`);
    }
  };

  return (
    <div>
      <Topbar
        title='Blogs'
        desc='Stay updated with the latest trends and insights in supply chain finance. Explore expert articles and industry news to help your business thrive.'
        from='Blogs'
        to='author'
      />
      <div className="min-h-screen bg-white mb-4 flex flex-col justify-center py-8 overflow-x-hidden">
        <section className="text-gray-400 bg-white body-font">
          <div className="container mx-auto px-4 py-12 lg:py-24">
            <h1 className="text-2xl lg:text-2xl font-bold title-font text-center text-black mb-6 lg:mb-6 underline italic font-arial">
              About Author
            </h1>

            <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-4 mb-4 max-w-full">
              <div className="p-8 mb-4 w-full md:w-2/3">
                <h2 className="text-gray-500 text-xl font-semibold">
                  Ayushi Bansal
                  <br />
                  <span className="text-gray-400 text-sm">CTA</span>
                </h2>
                <p className="text-gray-600 text-base mt-4">
                A dynamic digital marketing expert with over two years of experience in creating impactful marketing strategies. I have Completed MBA with a dual specialization in Marketing and Finance, equipping with a robust understanding of market analytics and financial insights. I have successfully executed a range of digital campaigns, from social media marketing to content creation and email marketing.
                </p>
              </div>
              <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                <img
                  src={ayushi}
                  alt="Img"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-gray-700 text-2xl text-center font-arial italic underline font-semibold mt-20">More Blogs by Jyotika</h2>
            <hr className='bg-black h-1 border-black mt-8 w-full' />
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {blogData.map((data, index) => (
                    <div key={index} className="p-4 md:w-1/3">
                      <div className="h-full flex flex-col rounded-xl shadow-black shadow-lg bg-white overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                          src={data.img}
                          alt="blog"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                          <h1 className="title-font leading-relaxed text-xl font-medium text-black mb-3">
                            {data.title}
                          </h1>
                          <p className="leading-relaxed text-sm mb-1 text-gray-600">
                            {data.oneLine}
                          </p>
                          <div className="mt-auto mb-1">
                            <button
                              onClick={() => onClickReadMore(data.route)}
                              className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            >
                              Read More
                            </button>
                            <hr className="my-2" />
                            <p
                              className="text-blue-500 text-base cursor-pointer mt-1"
                              onClick={() => onClickAuthor(data.author)}
                            >
                              Blog by {data.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Jyotika;
