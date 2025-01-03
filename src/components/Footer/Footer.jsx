import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const imgUrl = import.meta.env.VITE_IMAGE_URL


const Footer = () => {
  const onAcceptCookiee = () => {
    let testimonials = 'CA Gaurav Dhaneja, CA Deepak Goal, Yogesh Singhla'
    let team = 'Meenakshi,Joytika,Sonali'
    let businessPartners = 'axis bank, kotak Mahindra bank, cisco'
    let Investor = 'axis bank, kotak Mahindra bank ,yes bank  ICICI bank,HDFC bank'
    let Useful = 'Invoice Discounting,Export Credits,Vendor Financing,Corp. Credit Cards'

    let q1 = 'What is supply chain lending?'
    let ans1 = 'Supply chain lending is a financial solution that provides working capital to businesses by leveraging their supply chain transactions, such as invoices, purchase orders, or inventory.'

    let q2 = 'What are the benefits of supply chain lending?'
    let ans2 = 'Supply chain lending offers businesses improved cash flow, better working capital management, access to quick funding, and the ability to negotiate better terms with suppliers.'

    let q3 = 'Who can benefit from supply chain lending?'
    let ans3 = ' Small and medium-sized businesses (SMBs), suppliers, distributors, manufacturers, and other entities involved in the supply chain can benefit from supply chain lending.'

    let q4 = 'How fast can I get funding through supply chain lending?'
    let ans4 = 'Supply chain lending is a financial solution that provides working capital to businesses by leveraging their supply chain transactions, such as invoices, purchase orders, or inventory.'

    let q5 = 'What types of transactions are eligible for supply chain lending?'
    let ans5 = 'Typically, invoices, purchase orders, and inventory can be used as collateral for supply chain lending. The specific eligibility criteria may vary depending on the platform.'

    let q6 = 'How does supply chain lending differ from traditional financing options?'
    let ans6 = 'Unlike traditional bank loans, which may require extensive paperwork and have stringent eligibility criteria, supply chain lending often offers faster approval times, more flexible terms, and the ability to leverage existing transactions.'

    let q7 = ' Is my data secure when using your platform?'
    let ans7 = 'Our platforms prioritize the security of user data and employ advanced encryption methods to protect sensitive information.'

    let q8 = 'How do I get started with supply chain lending?'
    let ans8 = 'To get started with supply chain lending, you can typically apply through our platforms website by providing information about your business, transactions, and financing needs. From there, the platform will assess your eligibility and guide you through the process.'

    let q9 = 'Can startups and small businesses secure business loans?'
    let ans9 = 'Yes. They can. There are specific types of business loans specially tailored for startups and SMEs to help them grow and compete with legacy players.'

    let q10 = 'What is the maximum business loan offered by AltaNeo?'
    let ans10 = 'The business loan limit in AltaNeo depends on the eligibility, your requirement, and viability of the project.'

    document.cookie = `testimonials=${testimonials}`
    document.cookie = `team=${team}`
    document.cookie = `BUSINESS PARTNERS=${businessPartners}`
    document.cookie = `Investor=${Investor}`
    document.cookie = `Useful Links=${Useful}`

    document.cookie = `${q1}=${ans1}`
    document.cookie = `${q2}=${ans2}`
    document.cookie = `${q3}=${ans3}`
    document.cookie = `${q4}=${ans4}`
    document.cookie = `${q5}=${ans5}`
    document.cookie = `${q6}=${ans6}`
    document.cookie = `${q7}=${ans7}`
    document.cookie = `${q8}=${ans8}`
    document.cookie = `${q9}=${ans9}`
    document.cookie = `${q10}=${ans10}`
  }

  return (<>
    <footer class="bg-gradient-to-r from-blue-950 to-black" aria-labelledby="footer-heading">
      {/* <footer class="bg-black" aria-labelledby="footer-heading"> */}
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-4">
            <img src={imgUrl + '/icon/name.png'} alt="AltaNeo" height={100} width={200} />
            <p class="text-sm leading-6 text-gray-400">Empowering Supply Chain, Fuelling Success</p>
            <div class="flex space-x-6">
              <a target="_blank" href="https://www.facebook.com/share/1x5SMtKzBUShnod2/?mibextid=LQQJ4d" class="text-white hover:text-gray-500">
                <FaFacebookF />
              </a>
              <a target="_blank" href="https://x.com/AltaneoFin" class="text-white hover:text-blue-4    00">
                <RiTwitterXFill />
              </a>
              <a target="_blank" href="https://youtube.com/@altaneofin?si=oYQH2WO4iXDAqLeK" class="text-white hover:text-gray-500">
                <FaYoutube size={20} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/altaneofin/" class="text-white hover:text-gray-500">
                <FaLinkedinIn />
              </a>
              <a target="_blank" href="https://www.instagram.com/altaneo_fin/" class="text-white hover:text-gray-500">
                <GrInstagram />
              </a>
            </div>
          </div>

          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h2 class="font-bold leading-6 text-white">Useful Links</h2>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/products/invoice-discounting" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Invoice Discounting</a>
                  </li>
                  <li>
                    <a href="/products/export-credits" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Export Credits</a>
                  </li>
                  <li>
                    <a href="/products/vendor-financing" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Vendor financing</a>
                  </li>
                  <li>
                    <a href="/products/credit-card" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Corp. Credit Cards</a>
                  </li>
                  <li>
                    <a href="/products/edquery-solutions" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Ed Query Soln.</a>
                  </li>                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-bold leading-6 text-white"></h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/contact-us" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Contact Us</a>
                  </li>
                  <li>
                    <a href="/about-us" class="text-sm leading-6 text-gray-400 hover:text-blue-900">About Us</a>
                  </li>
                  <li>
                    <a href="/blogs" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Blogs</a>
                  </li>
                  <li>
                    <a href="/team" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Team</a>
                  </li>
                  <li>
                    <a href="/si-caclucator" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Calculator</a>
                  </li>
                  <li>
                    <a href="/careers" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="font-bold leading-6 text-white">Others</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/products" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Products</a>
                  </li>
                  <li>
                    <a href="/terms" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Terms</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/refund-policy" class="text-sm leading-6 text-gray-400 hover:text-blue-900">Refund Policy</a>
                  </li>
                  <li>
                    <a href="https://dlaidoc.s3.ap-south-1.amazonaws.com/DLAI-CODE-OF-CONDUCT+(1).pdf" target='_blank' class="text-sm leading-6 text-gray-400 hover:text-blue-900">DLAI (Code of Conduct)</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="font-bold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <h6 class="text-sm leading-6 text-gray-400">Nodal Officer:-</h6>
                  </li>
                  <li>
                    <h6 href="#" class="text-sm leading-6 text-gray-400 ">Sonia Verma</h6>
                  </li>
                  <li>
                    <h6 class="text-sm leading-6 text-gray-400 ">+91 9817741345</h6>
                  </li>
                  <li>
                    <a href="mailto:Email@gmail.com" class="text-sm leading-6 text-gray-400 hover:text-blue-900">info@altaneofin.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-sm leading-5 text-gray-400">Copyright &copy; 2024 All rights reserved <a href="" class='text-blue-400'> Altaneo</a></p>
        </div>

        <CookieConsent
          debug={true}
          location="bottom"
          buttonText="I Accept"
          onAccept={onAcceptCookiee}
          cookieName="myAwesomeCookieName2"
          style={{ background: "#000", textAlign: 'left', paddingLeft: 60 }}
          buttonStyle={{ color: "#000", background: '#fff', fontSize: "16px", marginRight: 120, paddingInline: 10 }}
          expires={365}
        >
          This website uses cookies to ensure you get the best experience on our website.
        </CookieConsent>
      </div>
    </footer>
  </>
  )
}

export default Footer;
