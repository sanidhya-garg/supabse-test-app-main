"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import img1 from "../../public/hero.svg" 
import Loop from "./loop.js"
import { IoIosArrowDroprightCircle, IoIosArrowDropdownCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaW, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";



interface SlidesProps {
  studentName_College: string;
  desc: string;
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






  return (
    <div>


      {/* Hero Section */}
      <div className='h-[93vh] md:h-screen px-10 w-full py-5  flex'>
        <div className='h-full w-screen lg:w-2/3  flex flex-col justify-center items-start gap-12 lg:gap-4'>
          <h1
            className='text-white text-4xl md:text-6xl font-bold'
          >Join Our Campus Ambassdor Program Now</h1>
          <p className='text-yellow-50'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni reiciendis ipsa consectetur temporibus maiores blanditiis quod atque, perspiciatis facere dolorum. Quasi explicabo, necessitatibus maiores ea deleniti assumenda aspernatur blanditiis ut autem ex earum alias voluptate.
          </p>

          <button
            className='px-3 py-2 text-center rounded-md bg-[#00eab6] text-[14px] font-semibold '
          >Register Now</button>

        </div>
        <div className='h-full w-1/3 justify-center items-center hidden lg:flex'>
          <img src="/hero.png" alt="img" className="h-[400px] w-[350px] ml-11 " />

        </div>
      </div>



      {/* About */}
      <div className='flex flex-col items-center px-10  text-white'>
        <button
          className='px-3 py-2 text-center  text-xl font-bold rounded-md bg-[#1da4c6]'
        >About Us</button>


        <div className='flex flex-col gap-5 my-6 font-medium'>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quo modi? Consequuntur voluptatibus vitae maiores recusandae dolorum eos nemo, explicabo, aperiam reprehenderit inventore tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, temporibus!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti quo modi? Consequuntur voluptatibus vitae maiores recusandae dolorum eos nemo, explicabo, aperiam reprehenderit inventore tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, temporibus!</p>
        </div>
      </div>
      {/* numbers */}
      <div className='my-3'>
        <div className='w-full text-center text-[#17b4c3] text-3xl flex flex-row items-center justify-between'>
          <div className='w-[30%] h-[2px] bg-white'></div>
          <div>The Smarter Way To Grow</div>
          <div className='w-[30%] h-[2px] bg-white'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-5 sm:px-28 my-10'>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[#17b4c3] text-6xl sm:text-6xl font-bold'>15+</span>
            <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>Students Registered</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[#17b4c3] text-6xl sm:text-6xl font-bold'>2500+</span>
            <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>Students Registered</span>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[#17b4c3] text-6xl sm:text-6xl font-bold'>786+</span>
            <span className='mt-2 text-white font-semibold text-sm sm:text-lg'>Students Registered</span>
          </div>
        </div>
      </div>


      {/* Benifits */}

      <div >


        <div className='w-full text-center text-[#17b4c3] text-3xl flex flex-row items-center justify-between'>
          <div className='w-[40%] h-[2px] bg-white'></div>
          <div >Benifits</div>
          <div className='w-[40%] h-[2px] bg-white'></div>


        </div>
      <div className='flex justify-center'>

        <div className='px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
          <Benifits title='Certification' desc={des1} />
          <Benifits title='Certification' desc={des1} />
          <Benifits title='Certification' desc={des1} />
          <Benifits title='Certification' desc={des1} />
        </div>
      </div>



      </div>



      <Loop />


      {/* Responsibilities */}


      <div className='w-full flex flex-col items-center'>

        <span className='text-center text-[#17b4c3] text-3xl '> What You Will Do?</span>
        <div className='w-[90%] bg-[#392b85] min-h-72 my-4 rounded-md p-5 flex flex-col lg:flex-row'>

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



      </div>

      {/* Review Section */}

      <div className='py-8 mx-12 my-5 px-9 lg:px-20 border-2 rounded-lg border-white h-96 lg:h-80 overflow-x-scroll'>
        {testimonials.map((e) => (
          <Slides desc={e} studentName_College='Keshav Raj,IIT-Delhi' />
        ))}

      </div>


      {/* FAQ */}

      <div>

        <div className='w-full text-center text-[#17b4c3] text-3xl flex flex-row items-center justify-between'>
          <div className='w-[25%] h-[2px] bg-white'></div>
          <div >Frequently Asked Questions</div>
          <div className='w-[25%] h-[2px] bg-white'></div>

        </div>

        <div className='px-10 py-5 flex flex-col items-center gap-2'>
          {faqQuestion.map((e, index) => (
            <FAQ title={e} desc={faqAnswer[index]} />
          ))}

        </div>



      </div>


      {/*Footer*/}
      <div className=' bg-black w-screen text-whitte overflow-hidden flex flex-col lg:flex-row '>

        <div className='p-4 lg:w-1/3 h-fit flex flex-col justify-between'>

          <img src="https://edciitd.com/images_2022-2023/eDCLogo.png" alt="logo"
            className='h-[70px] w-[100px]'
          />
          <span className='font-bold text-xl'>Enterprenurship & Development Cell</span>
          <span className='font-normal text-md italic'>"We Incubate,We Ideate,We Innovate"</span>
        </div>

        {/* Right */}
        <div className='flex flex-col py-7  lg:border-l-2 lg:border-gray-700 lg:w-2/3  text-whitte px-5'>

          <div className='flex items-center  gap-6 flex-col justify-start lg:items-center'>
            <span className='text-xl font-semibold '>Contact Us:</span>


            {/* <div className='text-[14px]'><span className='text-lg font-medium'>Email:</span>keshavraj09898@gmail.com</div> */}

            <div className='flex flex-row gap-5'>
              <FaFacebook color='grey' size={25} className='hover:cursor-pointer' />
              <FaInstagram color='grey' size={25} className='hover:cursor-pointer' />
              <FaXTwitter color='grey' size={25} className='hover:cursor-pointer' />
              <MdEmail color='grey' size={25} className='hover:cursor-pointer' />
              <FaWhatsapp color='grey' size={25} className='hover:cursor-pointer' />
            </div>

          </div>

          <div className='my-4 flex flex-row justify-start gap-5 text-[12px]'>
            <span className='hover:underline cursor-pointer'>Terms & Condition</span>
            <span className='hover:underline cursor-pointer'>Privacy Policy</span>
            <span className='hover:underline cursor-pointer'>Legal</span>


          </div>


        </div>



      </div>








    </div>
  );
}

export default Home;







const Slides: React.FC<SlidesProps> = ({ studentName_College, desc }: SlidesProps) => (
  <div className="w-full my-4 h-96 lg:h-80 flex flex-col-reverse justify-between items-center lg:flex-row">
    <div className=" mt-8 lg:mt-0.5 lg:w-3/5 text-white flex flex-col">
      <p className="text-xl">{desc}</p>
      <p className="text-md font-semibold my-4 self-end">
        {studentName_College}
      </p>
    </div>

    <img
      src="/student.png"
      alt="A student image"
      style={{ boxShadow: "16px 16px grey" }}
      className="h-40 lg:h-52 bg-white rounded-lg "
    />
  </div>
);

const Benifits: React.FC<BenifitProps> = ({ title, desc }: BenifitProps) => (

  <div className='my-5 flex flex-col items-center p-4 bg-purple max-w-64 rounded-xl 
  min-h-80'>
    <img src="/certificate.svg" alt="" className=' h-20' />
    <span className='mt-4 text-white font-extrabold text-2xl'>{title}</span>
    <p className='text-center text-white font-light'>{desc}</p>

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



  return <div className='p-5 flex w-full bg-purple max-w-[850px] flex-col  gap-2 rounded-2xl select-none'>

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
