import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WorldGlobe } from '@/components/WorldGlobe';
import { Card } from '@/components/Card';
import Image from 'next/image';
import { InfiniteMovingReviewCards, InfiniteMovingTechCards } from '@/components/ui/infinite-moving-cards';
import { About } from '@/components/About';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Lamp } from '@/components/Lamp';

const words = [
  {
    text: "Build",
    className: "md:text-4xl"

  },
  {
    text: "awesome",
    className: "md:text-4xl"

  },
  {
    text: "apps",
    className: "md:text-4xl"

  },
  {
    text: "with",
    className: "md:text-4xl"
  },
  {
    text: "Radha Tech.",
    className: "text-blue-500 dark:text-blue-500 m-0 md:text-4xl",
  },
];


const servicesCards = [
  { title: "Websites Design", desription: "High-Conversion Website Design Services for Enterprise Businesses", imgSrc: "/web-design.png" },
  { title: "App Design", desription: "High-Conversion Website Design Services for Enterprise Businesses", imgSrc: "/app-design.jpg" },
  { title: "College Project", desription: "Starting projects from 4999.", imgSrc: "/brand-design.jpg" }]

const techArr = [
  { src: "/html.png", name: "HTML" },
  { src: "/css.png", name: "CSS" },
  { src: "/react.png", name: "REACT" },
  { src: "/tailwind.png", name: "TW" },
  { src: "/javascript.png", name: "JS" },
  { src: "/nodejs.png", name: "NODE" },

]

const reviewArr = [
  {
    quote: "we believe in the power of transformation.Our mission is simple: to empower individuals like you to reach new heights and make your dreams a reality",
    name: " Jhon doe",
    title: " Web site",
  }
]

function page() {
  return (
    <main className='antialiased overflow-hidden text-white font-hero-font'>
      <div className='bg-black-color py-16 md:py-0 h-[65vh] md:h-screen bg-grid-white/[0.05] flex flex-col md:flex-row items-center justify-center md:justify-around'>
        <div className='w-full  flex flex-col gap-4 items-center  md:space-y-3 space-y-3 mt-14 md:mt-0'>
          <h3 className='text-2xl text-center md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-gray-200 to-zinc-200'>Build a awesome apps, websites and <span className='text-red-500'>college project</span> with radha tech.</h3>
          <p className='text-xl hidden md:block text-center md:w-1/2 mt-[10px] md:text-lg'>
            we believe in the power of transformation.Our mission is simple: to empower individuals like you to reach new heights and make your dreams a reality.
          </p>

          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contact Us
          </button>

        </div>
        {/* <div className='w-full md:w-1/2 flex justify-center items-center mt-10'>
          <WorldGlobe />
        </div> */}
      </div>
      <div className='bg-black-color py-6 pt-10'>
        <h1 className='text-orange-400 text-3xl md:text-5xl text-center font-extrabold'>Our Services</h1>
        <div className='mt-2 w-11/12 mx-auto'>
          <div className='w-full flex md:gap-10 flex-wrap'>
            {
              servicesCards.map((detail, idx) => {
                return <Card key={idx} title={detail.title} description={detail.desription} imgSrc={detail.imgSrc} />;
              })
            }
          </div>
        </div>
      </div>

      <div className='bg-black-color px-10 pb-20'>
        <div className='flex gap-5 md:px-10'>
          <InfiniteMovingTechCards items={techArr} key={"sandy"} />
        </div>
      </div>

      <div className='bg-black-color px-2 md:px-10 md:pt-10 py-10 md:py-20 relative' id="about">
        <h1 className='text-orange-400 text-3xl md:text-5xl text-center font-extrabold'>About Us</h1>
        <div className="mx-auto md:p-4">
          <h1 className="relative z-10 text-xl md:text-7xl pt-5 md:pt-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            We are Radha Technology
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-xl mx-auto my-3 md:my-2 px-2 md:px-0 text-sm text-justify relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
        </div>
        <BackgroundBeams />
      </div>

      <div className="hidden md:block bg-black-color pt-10 px-10 py-20">
        <h1 className='text-orange-400 text-3xl md:text-5xl text-center font-extrabold'>Review</h1>
        <div className='mt-10 md:w-11/12 mx-auto'>
          <InfiniteMovingReviewCards items={reviewArr} direction='right' />
        </div>
      </div>

      <div className='h-screen bg-[#020617] pt-10 relative' id='contact'>
        <h1 className='text-orange-400 text-3xl md:text-5xl font-extrabold text-center'>Contact Us</h1>

        <div className="flex flex-col md:flex-row w-full py-10 md:py-20 space-x-10 justify-center">
          <div className="flex min-w-[40vw] flex-col px-10 gap-4">
            <h1 className="text-2xl font-bold">Welcome Again</h1>
            <div className="flex flex-col gap-2">
              <input type="text" placeholder="Name" className="w-full p-4 rounded-md bg-transparent border-2 outline-none" />
              <input type="email" placeholder="Email" className="w-full p-4 rounded-md bg-transparent border-2 outline-none" />
              <input type="number" placeholder="Phone" className="w-full p-4 rounded-md bg-transparent border-2 outline-none" />
            </div>
            <div className="flex justify-start">
              <button className="relative px-5 py-2.5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white">
                  Send
                </span>
              </button>
            </div>
            <span className='inline-block text-center'>OR</span>
            <div className='flex justify-center gap-4'>
              <Image
                src={"/whatsapp-logo.png"}
                height={1000}
                width={1000}
                alt="contact-us.png"
                className="h-[50px] w-[50px] object-cover cursor-pointer"
              />

              <Image
                src={"/gmail-logo.png"}
                height={1000}
                width={1000}
                alt="contact-us.png"
                className="h-[50px] w-[50px] object-cover cursor-pointer"
              />

            </div>
          </div>

          <div className='hidden md:block'>
            <Image
              src={"/contact-us.png"}
              height={1000}
              width={1000}
              alt="contact-us.png"
              className="h-[400px] w-[400px]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page;