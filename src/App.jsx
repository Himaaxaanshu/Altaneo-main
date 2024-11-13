import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners/Partners';
import Investors from './components/Investors/Investors';
import Team from './components/Team/Team'
import Login from './components/Login/login'
import RefundPolicy from './components/policies/RefundPolicy/RefundPolicy'
import Bot from './components/Bot/bot'
import Blogs from './components/Blogs/Blogs'
import TeamPage from './components/Team/TeamPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Faqs from './components/faq\'s/Faqs'
import Dashboard from './components/Dashboard/Dashboard'
import SiCalculator from './components/calculator/SiCalculator'
import InvoiceDiscountingPage from './components/products/invoiceDiscounting/InvoiceDiscountingPage'
import VendorFinancingPage from './components/products/vendorFinancing/VendorFinancingPage'
import ExportCreditPage from './components/products/exportCredit/ExportCreditPage'
import CreditCardPage from './components/products/creditCard/CreditCardPage'
import SupplyChainFinanceBlog from './components/Blogs/blogPages/SupplyChainFinanceBlog'
import InvoiceDiscountingBlog from './components/Blogs/blogPages/InvoiceDiscountingBlog'
import FutureOfSCFBlog from './components/Blogs/blogPages/FutureOfSCFBlog'
import MachineLearningBlog from './components/Blogs/blogPages/MachineLearningBlog'
import WorkingCapitalBlog from './components/Blogs/blogPages/WorkingCapitalBlog'
import BlockChainTechBlog from './components/Blogs/blogPages/BlockChainTechBlog'
import DynamicDiscountingBlog from './components/Blogs/blogPages/DynamicDiscountingBlog'
import InventoryManagementBlog from './components/Blogs/blogPages/InventoryManagementBlog'
import CreditRiskAssessmentBlog from './components/Blogs/blogPages/CreditRiskAssessmentBlog'
import Terms from './components/policies/Terms/Terms'
import Privacypolicy from './components/policies/PrivacyPolicy/Privacypolicy'
import SustainableSupplyChainBlog from './components/Blogs/blogPages/SustainableSupplyChainBlog';
import OptimisedSupplyBlog from './components/Blogs/blogPages/OptimisedSupplyBlog';
import InvoiceFactoringBlog from './components/Blogs/blogPages/InvoiceFactoringBlog';
import EarlyPaymentsBlog from './components/Blogs/blogPages/EarlyPaymentsBlog';
import RoboAdvisorBlog from './components/Blogs/blogPages/RoboAdvisorBlog';

import ContactUs from './components/ContectUs/ContactUs';
import GreenFinancingBlog from './components/Blogs/blogPages/GreenFinancingBlog';
import SmallAndMediumEntBlog from './components/Blogs/blogPages/SmallAndMediumEntBlog';
import Vision from './components/vision/Vision';
import ContactUsPage from './components/ContectUs/ContactUsPage';
import AboutUsPage from './components/About/AboutUsPage';
import ProductPage from './components/products/ProductPage';
import Products from './components/products/Products';
import CareerPage from './components/careers/CareerPage';
import EdQueryPage from './components/products/EDQuery/EdQueryPage';
import Numbers from './components/common/Numbers';
import RoleofFintechBlog from './components/Blogs/blogPages/RoleOfFintechBlog';
import FintechManageBlog from './components/Blogs/blogPages/FintechManageBlog';
import AuthorProfile from './components/Blogs/blogAuthor/AuthorProfile';
import BlogContext from './components/Blogs/BlogContext'


const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes for pages without Navbar */}
        <Route path={['/login', '/register']} component={Login} />
        <Route path="/dashboard/*" render={Dashboard} />
        {/* Routes for pages with Navbar */}
        <Route>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/si-caclucator" component={SiCalculator} />
            <Route exact path='/privacy-policy' component={Privacypolicy} />
            <Route exact path='/refund-policy' component={RefundPolicy} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/vision' component={Vision} />
            <Route exact path='/contact-us' component={ContactUsPage} />
            <Route exact path='/about-us' component={AboutUsPage} />
            <Route exact path='/careers' component={CareerPage} />
            <Route exact path='/team' component={TeamPage} />

            <Route exact path='/products' component={ProductPage} />
            <Route exact path='/products/invoice-discounting' component={InvoiceDiscountingPage} />
            <Route exact path='/products/vendor-financing' component={VendorFinancingPage} />
            <Route exact path='/products/export-credits' component={ExportCreditPage} />
            <Route exact path='/products/credit-card' component={CreditCardPage} />
            <Route exact path='/products/edquery-solutions' component={EdQueryPage} />


            <Route exact path='/blogs' component={Blogs} />
            <Route exact path='/blogs/*' component={BlogContext} />
            

          </Switch>
        </Route>
      </Switch>
    </Router>
  )
}


const Home = () => {
  const Title = ({ subTitle, title }) => {
    return (
      <div className='text-center my-5 text-2xl font-semibold'>
        <h2 className='text-blue-800 font-serif font'>{subTitle}</h2> {/* Change color as needed */}
        <h1 className='text-black mt-2 text-3xl font-serif font-bold'>{title}</h1>     {/* Change color as needed */}
      </div>
    );
  };

  return (<>
    <Hero />
    <div className=''>
      <Title subTitle='' title='' />
      <Products />
      <About />
      <Numbers />
      <Title subTitle='Valued From leading brands' title='Leading Investors' />
      <Investors />
      <Title subTitle='Meet our team' title='Team' />
      <Team />
      <Title subTitle='Testimonials' title='What Customers Says' />
      <Testimonials />
      <Title subTitle='Business Partners' title='Altaneofied' />
      <Partners />
      <Title subTitle='' title='' />
      <ContactUs />
      <Faqs />
      <Footer />
    </div>
  </>
  )
}
export default App