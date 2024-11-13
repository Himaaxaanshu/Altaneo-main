import React from 'react';
import Footer from '../../Footer/Footer';
import Bot from '../../Bot/bot';
import Topbar from '../../common/Topbar';

const Privacypolicy = () => {
  return (
    <div>
      <Topbar
        title="Privacy Policy"
        desc="We prioritize the privacy of our users' personal information. We use data responsibly ensuring compliance with relevant laws and regulations."
        from="Home"
        to="Privacy Policy"
      />

      <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div role="alert" className="relative w-full text-base font-regular px-4 py-4 rounded-lg">
          <h2 className='mt-3 text-2xl font-semibold'>Privacy Policy for Altaneo’s Website</h2>
          <p className='text-base italic'>Date of Effectiveness: [Date]</p>
          <hr className='mb-1' />

          <p className='  text-base text-justify'>
            Your privacy is our top priority at Altaneo Finance Private Limited. When you visit our <a href='/' className='text-blue-400'> website </a>and make use of our services, we gather, utilise, disclose, and safeguard your personal information as described in this Privacy Policy. You accept the terms of our privacy policy by using our services or by visiting our website.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>Data We Gather</h2>
          <hr />
          <p className='  text-base text-justify'>
            When you use our website and services, we gather several kinds of personal data, which could include:
          </p>
          <p className='  text-base text-justify'>
            <strong>1.1 Individually Identifiable Data (PID)</strong><br />
            i. When creating an account, you must provide your name, email address, phone number, mailing address, birthdate, and other information.<br />
            ii. Financial Information: Credit/debit card numbers, bank account information, and payment transaction information used to offer financial services.
          </p>

          <p className='  text-base text-justify'>
            <strong>1.2 Information That Is Not Personal</strong><br />
            i. Technical details include device information, operating system, IP address, browser type, and website usage statistics.<br />
            ii. Cookies and Tracking Technologies: Data about how you navigate our website is gathered through cookies and related technologies.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>How We Utilise Your Data</h2>
          <hr />
          <p className='  text-base text-justify'>
            We employ the data gathered for a number of objectives, such as:
          </p>
          <p className='  text-base text-justify'>
            <strong>2.1 Offering Services</strong><br />
            i. To handle your account, process transactions, and offer financial services.<br />
            ii. To address your questions, requests, or grievances.<br />
            iii. To confirm your identity and stop fraud or other unlawful activity.
          </p>

          <p className='  text-base text-justify'>
            <strong>2.2 Enhancing Our Offerings</strong><br />
            i. To analyse usage patterns and preferences in order to enhance user experience and website operation.<br />
            ii. To carry out data analysis, product creation, and market research.
          </p>

          <p className='  text-base text-justify'>
            <strong>2.3 Promotion and Interaction</strong><br />
            i. To provide you with newsletters, promotional materials, and service updates. By clicking the unsubscribe link in our emails, you may choose to stop receiving marketing communications at any time.
          </p>

          <p className='  text-base text-justify'>
            <strong>2.4 Legal Requirements</strong><br />
            i. Must adhere to legal and regulatory obligations, such as know-your-customer (KYC) and anti-money laundering (AML) regulations.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>How Your Information Is Shared</h2>
          <hr />
          <p className='  text-base text-justify'>
            In the following situations, we might disclose your personal information to outside parties:
          </p>
          <p className='  text-base text-justify'>
            <strong>3.1 Service Companies</strong><br />
            i. Your information might be disclosed to reputable outside service providers who assist us in running our company, handling transactions, or carrying out tasks on our behalf. These service providers are obligated to safeguard your data and use it just for the uses that we designate.
          </p>

          <p className='  text-base text-justify'>
            <strong>3.2 Legal Conditions</strong><br />
            If mandated by law or to safeguard our rights, privacy, safety, property, or that of others, we may divulge your information to law enforcement, regulatory bodies, or other parties.
          </p>
          <p className='font-bold mt-3 text-base text-justify'>
            • Transfers of Businesses
          </p>
          <p className='  text-base text-justify'>
            Your personal information might be transferred as part of a merger, acquisition, or asset sale involving AltaneoFin. Any such modifications and their effect on your data will be communicated to you.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>Tracking Technologies and Cookies</h2>
          <hr />
          <p className='  text-base text-justify'>
            Cookies and related technologies are used by us to improve your online experience. These technologies benefit us by:
            <br />
            i. Analysing user behaviour and website traffic.<br />
            ii. Remembering your settings and preferences.<br />
            iii. Providing promotions and advertisements that are relevant.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>Security of Data</h2>
          <hr />
          <p className='  text-base text-justify'>
            We take appropriate precautions to guard against unauthorised access, disclosure, alteration, and destruction of your personal data. These precautions consist of secure server technologies, firewalls, and encryption.
          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>Your Choices and Rights</h2>
          <hr />
          <p className='  text-base text-justify'>
            You are entitled to:<br />
            i. Access: Ask for a copy of the data we have on file about you.<br />
            ii. Request that any information that is erroneous or lacking be corrected.<br />
            iii. Deletion: Subject to legal requirements, request that your personal data be deleted.<br />
            iv. Restriction: Ask to have the processing of your personal data restricted.<br />
            v. Opt-Out: At any point, you can choose not to receive marketing materials.
          </p>

          <p className='font-bold mt-3 text-base text-justify'>
            • Information Retention
          </p>
          <p className='  text-base text-justify'>
            For the duration required to accomplish the goals specified in this Privacy Policy, adhere to legal
            requirements, settle disputes, and uphold our agreements, we keep your personal information on file.
            Your information will be anonymised or safely deleted as soon as it is no longer required.
          </p>

          <p className='font-bold mt-3 text-base text-justify'>
            • Transfers of Data Internationally
          </p>
          <p className='  text-base text-justify'>
            Countries outside of your jurisdiction, including those with different data protection regulations
            than your own, may receive, store, or handle your personal information. We take the necessary
            precautions to guarantee your information is protected in accordance with applicable laws when
            we move it abroad.
          </p>

          <p className='font-bold mt-3 text-base text-justify'>
            • Privacy of Children
          </p>
          <p className='  text-base text-justify'>
            People under the age of eighteen are not eligible to use our services. We don't intentionally gather
            children's personal data. We will take action to remove any personal information that we may have
            unintentionally gathered from a youngster.

          </p>

          <p className='font-bold mt-3 text-base text-justify'>
            • Modifications to This Privacy Statement
          </p>
          <p className='  text-base text-justify'>
            This Privacy Policy may be updated from time to time. We will update the "Effective Date" at the top
            of the policy if we make changes, and we'll let you know if they're big. To stay up to date on how we
            are safeguarding your information, we invite you to periodically review this policy.

          </p>

          <h2 className=' mt-3 text-2xl font-semibold'>Contact Us</h2>
          <hr />
          <p className='  text-base text-justify'>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br />
            Email: info@altaneofin.in<br />
            Phone: 9817741345<br />
            Address: Unit no 934, Tower B3 Spaze ITech Park, Sohna Road, Sector 49, Gurugram, Haryana, India.
          </p>
        </div>
      </div>
      <Footer />
      <Bot />
    </div>
  );
};

export default Privacypolicy;
