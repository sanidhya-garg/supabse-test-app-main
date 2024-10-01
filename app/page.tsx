"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
// import img1 from "../../public/hero.svg" 
import Loop from "@/components/loop.js"
import { IoIosArrowDroprightCircle, IoIosArrowDropdownCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaW, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Router } from 'next/router';



interface SlidesProps {
  studentName_College: string;
  desc: string;
  source:string;
}
interface BenifitProps {
  title: string;
  desc: string;
}




const Home = () => {

  const des = "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus qui, vitae eum repudiandae ex nihil ad accusamus suscipit natus ut officiis! Iusto eius velit quam quia architecto officia eligendi iure quae mollitia facere maxime placeat soluta, voluptatem laboriosam reprehenderit.\""
  const des1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus qui, vitae eum repudiandae ex nihil ad accusamus "

  const faqQuestion = [
    "What is the Campus Ambassador Program ?",
    "Who can apply ?",
    "What are the responsibilities of a Campus Ambassador ?",
    "What benefits do Campus Ambassadors receive ?",
    " What skills are required ?",

  ]
  const faqAnswer = [
    "The CAP is a student-driven initiative by eDC IIT Delhi, aimed at promoting entrepreneurship across campuses. Ambassadors act as the face of eDC, organizing events and engaging students in entrepreneurial activities.",
    "The program is open to students from colleges outside of IIT Delhi. IIT Delhi students have other opportunities like volunteering for BECon.",
    "What are the responsibilities of a Campus Ambassador ? Ambassadors promote eDC events, manage workshops, handle social media outreach, and help build a network of entrepreneurial minds at their campus.",
    "Ambassadors receive certificates, exclusive mentorship opportunities, access to internships, event participation, and networking with industry professionals.",
    "Leadership, communication, event management, and networking skills are essential to effectively promote entrepreneurship and engage students.",

  ]

  const testimonials = [
    "The CAP was very amazing. Connected to amazing people of edc iit delhi. Even got my letter of recommendation which helped me get my job at an iit delhi alumni startup. THANKS EDC TEAM",
    " So happy that i participated in this campus ambassador program, got access to all the entrepreneurship events in iit delhi during becon. ",

    "CAP was such a great experience for me. Had so much fun in the meets, discussed startup ideas with like minded people across India and even got goodies. Grateful to the edc team for choosing me to be a part of it.",
    "Got so much benefit from this, loved this program. Letter of recommendation was the main attraction but participating in this helped me get to the last round of moonshot where i could pitch my ideas to vc’s. ",

    "Participated in other CAP programs also but CAP EDC IIT DELHI  is definitely the best one. Such amazing people, such an amazing fest , great opportunities. Would definitely recommend everyone to try and be a part of it.",


  ]

  const CA = [
    ["Abhijit Saha,IIT-Mandi","/img/testimonials/abhijit-saha.webp"],
    ["Sarfaraz,NIT-Delhi","/img/testimonials/sarfaraz.webp"],
  ]






  return (
    <div>
      <video
        autoPlay
        loop
        muted
        id="myVideo"
        style={{
          position: "fixed",
          right: "0px",
          bottom: "0px",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",  // Ensures the video covers the entire background while maintaining aspect ratio
          zIndex: "-1"
        }}
      >
        <source src="/neonback.webm" type="video/webm" />
      </video>



      {/* Navbar */}
      <div className='w-screen bg-black bg-opacity-80 flex flex-row items-center justify-between px-4'
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "5000"
        }}
      >
        <img src="https://edciitd.com/images_2022-2023/eDCLogo.png" alt="logo"
          className='h-[70px] w-[100px]'
        />

        <div className='flex flex-row justify-between p-2 text-white font-medium md:w-1/3 gap-2'> {/* Corrected 'text-whitte' to 'text-white' */}
          <a className='cursor-pointer hover:underline hidden md:block' href='#home'>Home</a>
          <a className='cursor-pointer hover:underline hidden md:block' href='#about'>About</a>
          <a className='cursor-pointer hover:underline hidden md:block' href='#benifit'>Benefits</a> {/* Corrected 'Benifits' to 'Benefits' */}
          <a className='cursor-pointer hover:underline hidden md:block' href='#faq'>FAQ's</a>
          <a className='cursor-pointer hover:underline ' href='/sign-in'>SignIn</a>
        </div>
      </div>
      <div className='h-fit overflow-y-hidden'>
        {/* Hero Section */}
        <section id="home" className='lg:h-[90vh] md:h-screen px-10 w-full flex py-5'
        >
          <div className='h-full w-screen lg:w-2/3 flex flex-col justify-center items-start gap-12 lg:gap-4'>
            <span className='text-ourGreen text-4xl md:text-6xl font-bold font-syne'>
              Join Our Campus Ambassador Program Now
            </span>
            <p className='text-white font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reiciendis ipsa consectetur temporibus maiores blanditiis quod atque, perspiciatis facere dolorum. Quasi explicabo, necessitatibus maiores ea deleniti assumenda aspernatur blanditiis ut autem ex earum alias voluptate.
            </p>
            
            <a href='/sign-in'>
            <button className='px-3 py-2 text-center rounded-md bg-hoverGreen text-[14px] font-semibold'>
             Register Now
            </button>
             </a>
          </div>
          <div className='h-full w-1/3 justify-center items-center hidden lg:flex'>
            <img src="/hero.png" alt="img" className="h-[400px] w-[350px] ml-11 " />
          </div>
        </section>

        {/* About */}
        <section id='about'>
          <div className='bg-black bg-opacity-90 my-[85px] flex flex-col items-center p-10 text-white'>
            <button className='px-3 py-2 text-center text-xl font-bold rounded-md bg-ourGreen'>
              About Us
            </button>

            <div className='flex flex-col gap-5 my-6 font-medium'>
              <p>The Entrepreneurship Development Cell of IIT Delhi is Asia’s most significant non-profit entrepreneurship
                promoting body run by students. The eDC, IIT Delhi, was set up in January 2007. It has been active for 15
                years and has impacted lakhs of individuals in India and abroad.
                It aims to help aspiring student entrepreneurs achieve their entrepreneurial aspirations. As an institute,
                we are proud to have many luminary alums who have made their mark in the entrepreneurial sphere.</p>

            </div>
          </div>

          {/* Numbers */}
          <div className='my-3'>
            <div className='w-full text-center text-ourGreen text-3xl flex flex-row items-center justify-between'>
              <div className='w-[30%] h-[2px] bg-white'></div>
              <div>The Smarter Way To Grow</div>
              <div className='w-[30%] h-[2px] bg-white'></div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-5 sm:px-28 my-10'>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-hoverGreen text-6xl sm:text-6xl font-bold'>2500+</span>
                <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>Colleges</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-hoverGreen text-6xl sm:text-6xl font-bold'>7000+</span>
                <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>Applicants</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <span className='text-hoverGreen text-6xl sm:text-6xl font-bold'>5000+</span>
                <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>CAs Selected</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id='benifit'>
          <div className='w-full text-center text-ourGreen text-3xl flex flex-row items-center justify-between'>
            <div className='w-[40%] h-[2px] bg-white'></div>
            <div>Benefits</div> {/* Corrected 'Benifits' to 'Benefits' */}
            <div className='w-[40%] h-[2px] bg-white'></div>
          </div>

          <div className='w-full bg-black bg-opacity-85 flex flex-col items-center justify-center'>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 w-full'>
              <Benifits title='Part of the eDC' desc={"Get a chance to be a part of the eDC IITD community"} />
              <Benifits title='Interconnectivity' desc={"Better interconnectivity between IITD and the rest of the Delhi students"} />
              <Benifits title='Organize events' desc={'Chance to organize events and workshops in collaboration with eDC in your college.'} />

            </div>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
              <Benifits title='Get Certified' desc={"Get Certified by eDC and IITD on completion of your tenure. Certificates would be given to only those CAs who complete the internship."} />
              <Benifits title='Visit IIT Delhi' desc={"Get a chance to explore one of the biggest E-summit in India, BECON.Access to events at IITD."} />
              <Benifits title='Mentored by IIT students' desc={"Getting mentored by the eDC team and the top minded IIT students."} />

            </div>
            <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
              <Benifits title='Networking Opportunities' desc={"Networking Opportunities with Industry Experts and experienced professionals."} />
              <Benifits title='Leadership and Marketing skills' desc={"Enhance your leadership and marketing skills and also be able to spread the Entrepreneurship culture on the campus."} />
              <Benifits title='Online branding' desc={"You will learn social media growth hacks, online branding, and promotion strategies."} />

            </div>
          </div>
        </section>

        {/* Loop component */}
        <Loop />

        {/* Responsibilities */}
        <section className='w-full flex flex-col items-center'>
          <span className='text-center text-ourGreen text-3xl'> What You Will Do?</span>
          <div className='w-[90%] bg-black bg-opacity-85 min-h-72 my-4 rounded-md p-5 flex flex-col lg:flex-row'>
            <img src="/work.png" alt="work" />
            <div className='flex flex-col justify-center items-center my-2'>
              <div className='flex flex-col gap-4'>
                <Work title='Ideas and Execution' desc={des1} />
                <Work title='Ideas and Execution' desc={des1} />
                <Work title='Ideas and Execution' desc={des1} />
                <Work title='Ideas and Execution' desc={des1} />
              </div>
            </div>
          </div>
        </section>

        {/* Review Section */}
        <section className='bg-black bg-opacity-75 ' id="testimonial">
          <div className='w-full text-center  text-3xl flex flex-row items-center justify-between my-5'>
            <div className='w-[25%] h-[2px] bg-white'></div>
            <div className='text-ourGreen'>Testimonials</div>
            <div className='w-[25%] h-[2px] bg-white'></div>
          </div>

          <div className="py-8 mx-12 my-5 px-9 lg:px-20 rounded-lg h-auto lg:h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((e,index) => (
              <Slides desc={e} key={index}
              source={CA[index] && CA[index][1]}
              studentName_College={CA[index] ? CA[index][0] : "Keshav Raj,IIT-Delhi" } />
            ))}
          </div>
        </section>


        {/* FAQ */}
        <section id='faq'>
          <div >
            <div className='w-full text-center  text-3xl flex flex-row items-center justify-between my-5'>
              <div className='w-[25%] h-[2px] bg-white'></div>
              <div className='text-ourGreen'>Frequently Asked Questions</div>
              <div className='w-[25%] h-[2px] bg-white'></div>
            </div>

            <div className='px-10 py-5 flex flex-col items-center gap-2'>
              {faqQuestion.map((e, index) => (
                <FAQ  key={index} title={e} desc={faqAnswer[index]} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className='bg-black w-screen bg-opacity-90 text-white overflow-hidden flex flex-col lg:flex-row'>
            <div className='px-4 lg:w-1/3 h-fit flex flex-col justify-between'>
              <img src="https://edciitd.com/images_2022-2023/eDCLogo.png" alt="logo"
                className='h-[70px] w-[100px]'
              />
              <span className='font-bold text-xl'>Entrepreneurship & Development Cell</span> {/* Corrected 'Enterprenurship' */}
              <span className='font-normal text-md italic'>"We Incubate, We Ideate, We Innovate"</span>
            </div>

            <div className='flex flex-col py-7 lg:border-l-2 lg:border-white px-4 lg:w-1/3'>
              <span className='font-bold text-2xl'>Explore</span>
              <ul>
                <li>About Us</li>
                <li>Startups</li>
                <li>Events</li>
                <li>Insights</li>
              </ul>
            </div>

            <div className='flex flex-col py-7 lg:border-l-2 lg:border-white px-4 lg:w-1/3'>
              <span className='font-bold text-2xl'>Quick Links</span>
              <ul>
                <li>About Us</li>
                <li>Startups</li>
                <li>Events</li>
                <li>Insights</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </div>

  );
}

export default Home;







const Slides: React.FC<SlidesProps> = ({ studentName_College, desc,source }: SlidesProps) => (
  <div className='my-5 flex flex-col items-center p-4 bg-gray  max-w-[450px] rounded-xl 
  min-h-80'>

    <img src={
      source ? source : "/img/testimonials/default.jpg"
    } alt="" className=' h-20' style={{borderRadius:"50%"}} color='white' />
    <span className='mt-4 text-white font-semibold text-md text-center italic'>
      {studentName_College}</span>
    <p className='text-center text-white font-syne font-normal mt-4'>{desc}</p>

  </div>
);

const Benifits: React.FC<BenifitProps> = ({ title, desc }: BenifitProps) => (

  <div className='my-5 flex flex-col items-center p-4 bg-gray  max-w-[450px] rounded-xl 
  min-h-80'>
    <img src="/certificate.svg" alt="" className=' h-20' color='white' />
    <span className='mt-4 text-white font-extrabold text-2xl text-center'>{title}</span>
    <p className='text-center text-white font-medium mt-4'>{desc}</p>

  </div>

);

const Work: React.FC<BenifitProps> = ({ title, desc }: BenifitProps) => (

  <div className='flex flex-row gap-4 items-start'>
    {<IoIosArrowDroprightCircle color='white' size={"40px"}
      style={{ position: "relative", top: "-5px" }} />}
    <div>
      <span className='text-white text-xl'>{title}</span>
      <p className='text-white text-md'>{desc}</p>


    </div>

  </div>

);

const FAQ: React.FC<BenifitProps> = ({ title, desc }: BenifitProps) => {

  const [on, seton] = useState(false)



  return <div className='p-5 flex w-full bg-black bg-opacity-90 max-w-[850px] flex-col  gap-2 rounded-2xl select-none'>

    <div className='flex flex-row justify-between items-center'>
      <span className='text-whitte font-semibold text-lg lg:text-2xl'>{title}</span>
      <span>

        {
          on === false ?
            <IoIosArrowDroprightCircle className='cursor-pointer size-6'
              color='white'
              onClick={() => { seton(true) }}
            /> :

            <IoIosArrowDropdownCircle className='cursor-pointer size-6'
              color='white'
              onClick={() => { seton(false) }}
            />


        }
      </span>
    </div>
    {
      on === true && <div className='text-whitte'>
        {desc}
      </div>
    }


  </div>

};
