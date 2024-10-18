import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Topbar from '../../common/Topbar';
import supplyChainFinance from '../../../../public/assets/img/supplyChainFinance.png';
import dynamicDiscounting from '../../../../public/assets/img/dynamicDiscounting.png';
import sustainableSCF from '../../../../public/assets/img/sustainableSCF.png';
import AnLogo from '../../../../public/assets/logo/AnLogo.png';

const Altaneo = () => {
    const blogData = [
        {
            id: 1,
            title: 'Supply Chain Finance - A Catalyst for Business Growth.',
            img: supplyChainFinance,
            route: 'supplyChainFinance',
            oneLine: "In today's fast-paced business environment, managing cash flow and maintaining ...'",
            author: 'Altaneo'
        },
        {
            id: 5,
            title: 'Dynamic Discounting: A Game-Changer for Supply Chain Finance',
            img: dynamicDiscounting,
            route: 'dynamicDiscounting',
            oneLine: "A business needs efficient cash flow management to maintain a competitive edge...",
            author: 'Altaneo'
        },
        {
            id: 6,
            title: 'Sustainable Supply Chain Finance - Green Financing and ESG Integration',
            img: sustainableSCF,
            route: 'sustainableSupplyChain',
            oneLine: "Sustainability is no longer a buzzword in today’s era, it’s a business imperative. In an...",
            author: 'Altaneo'
        }
    ];

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClickReadMore = (route) => {
        history.push(`/blogs/${route}`);
    };

    const onClickAuthor = (author) => {
        if (author === 'Altaneo') {
            history.push(`/blogs/Altaneo`);
        }
    };

    return (
        <div>
            <Topbar
                title='Blogs'
                desc='Stay updated with the latest trends and insights in supply chain finance. Explore expert articles and industry news to help your business thrive.'
                from='Blogs'
                to='author' />
            <div className="min-h-screen bg-white mb-4 flex flex-col justify-center py-8 overflow-x-hidden">
                <section className="text-gray-400 bg-white body-font">
                    <div className="container mx-auto px-4 py-12 lg:py-24">
                        <h1 className="text-2xl lg:text-2xl font-bold title-font text-center text-black mb-6 lg:mb-6 underline italic font-arial">
                            About Company
                        </h1>

                        <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row mt-4 mb-4 max-w-full">
                            <div className="p-8 mb-4 w-full md:w-2/3">
                                <h2 className="text-gray-500 text-xl font-semibold">
                                    Altaneo Finance
                                    <br />
                                </h2 >
                                <p className="text-gray-600 text-base mt-4">
                                    We are Providing Supply Chain Finance for Your Business
                                    Enhance your cash flow and streamline operations with our tailored Supply Chain Finance solutions. Benefit from early payments, increased working capital, and strengthened supplier relationships. Contact us today to elevate your business efficiency!
                                </p>
                            </div>
                            <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                                <img
                                    src={AnLogo}
                                    alt="Img"
                                    className="w-full  h-90 object-cover"
                                />
                            </div>
                        </div>
                        <h2 className="text-gray-700 text-2xl text-center font-arial italic underline font-semibold mt-20">More Blogs by Altaneo Finance</h2 >
                        <hr className='bg-black h-1 border-black mt-4 w-full' />
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
                                                            className="text-blue-500 text-base cursor-pointer mt-1 "
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

export default Altaneo;
