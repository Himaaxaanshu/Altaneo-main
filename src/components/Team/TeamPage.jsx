import React from 'react';
import Topbar from '../common/Topbar';
import Footer from '../Footer/Footer';
import Bot from '../Bot/bot';

const imgUrl = import.meta.env.VITE_IMAGE_URL


const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Meenakshi Pawar',
      role: 'Chairperson',
      photo: `${imgUrl}/img/team/ceoImg.png`,
      description: 'With a robust academic background and extensive professional experience, Meenakshi brings a wealth of knowledge and expertise to our organization. She embarked on their academic journey at Miranda House, Delhi University, where they laid a strong foundation in Mathematics and Science. Further honing their skills, they attended London Business School, an institution renowned for shaping global business leaders.In their professional career, she has demonstrated remarkable leadership and strategic acumen. They have previously served as a Team Lead at the State Bank of India, where they managed and executed high-impact financial projects, driving growth and innovation.'
    },
    {
      name: 'Jyotika B.',
      role: 'CTA',
      photo: `${imgUrl}/img/team/ctaImg.png`,
      description: 'As Chief Technology Advisor, I am proud to lead a team of dedicated professionals who are passionate about driving innovation and delivering exceptional value to our clients. We are committed to staying at the forefront of technological advancements, continuously refining and enhancing our offerings to meet the evolving needs of the market.'
    },
    {
      name: 'Sonia',
      role: 'Director',
      photo: `${imgUrl}/img/team/directorImg.png`,
      description: 'As the Director of Altaneo, Im thrilled to extend a warm welcome to you, introducing fintech poised to redefine the landscape of financial services. At Altaneo, we are not just in the business of lending we arre in the business of empowering dreams, fuelling growth, and fostering financial inclusion.'
    },
    {
      name: 'Shanuj Yadav',
      role: 'Jr.Software Developer',
      photo: `${imgUrl}/img/team/shanuj.png`,
      description: 'A dedicated full stack software developer with 1 year of experience. I have completed B.Tech, and possesses strong skills in JavaScript, Excellent in building complex projects using react, redux, node JS, and mongo DB.'
    },
    {
      name: 'Ayushi Bansal',
      role: 'Digital Marketing Executive',
      photo: `${imgUrl}/img/team/ayushi.png`,
      description: 'A dynamic digital marketing expert with over two years of experience in creating impactful marketing strategies. I have Completed MBA with a dual specialization in Marketing and Finance, equipping with a robust understanding of market analytics and financial insights. I have successfully executed a range of digital campaigns, from social media marketing to content creation and email marketing.'
    },
    {
      name: 'Himanshu Narwal',
      role: 'Jr. Software Engineer',
      photo: `${imgUrl}/img/team/himanshu.png`,
      description: 'As a Junior Software Engineer, I have transitioned from a successful internship where I developed a range of valuable skills, gained practical experience, and built a strong understanding of industry practices. This experience has provided me with a solid foundation, allowing me to take on greater responsibilities and contribute effectively to projects as I grow in my career as a software developer.'
    },
    {
      name: 'Sanskruti Ghosh',
      role: 'Accounts and HR Executive',
      photo: `${imgUrl}/img/team/sanskruti.png`,
      description: 'I hold a Bachelor degree in Commerce (Hons) from the University of Delhi, where I built a robust foundation in financial accounting, management accounting, and financial data management. My passion for numbers and meticulous attention to detail have motivated me to pursue practical experience in accounting and finance. I am eager to leverage my academic knowledge and analytical skills in real-world applications and look forward to contributing to the teams success while gaining valuable insights and experience.'
    },
  ]

  return (
    <div>
      <Topbar
        title='Our Team'
        desc='Meet our dedicated team of experts committed to driving your success.Together, we bring innovative solutions to enhance your supply chain.'
        from='Home'
        to='Team' />

      <div className="team-container lg:mx-20 my-5 sm:mx-1 my-5 ">
        <ul role="list" class="grid gap-6 p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((item, index) => (
            <li key={index} class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <div class="flex flex-1 mb-0 flex-col w-full md:w-full h-96 p-4">
                <img class="mx-auto mb-1 h-48 w-48 flex-shrink-0 border-black rounded-full" src={item.photo} alt="" />
                <h3 class="mt-2 text-md font-semibold text-gray-900">{item.name}</h3>
                <dl class="mt-1 flex flex-grow flex-col justify-between">
                  <dd class="mt-0">
                    <span class="inline-flex items-center rounded-full bg-blue-400 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">{item.role}</span>
                  </dd>
                  <hr class="mt-2" />
                  <dd class="mt-1 flex-grow overflow-y-auto h-32 text-justify">
                    {item.description}
                  </dd>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}
export default TeamPage