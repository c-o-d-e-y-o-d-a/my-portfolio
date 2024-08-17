"use client"
import React, { useRef, useState } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { motion, useInView } from "framer-motion";


const TestimonialList = [{
    id:1,
    profilePhoto:"/images/projects/vollit.png",
    name: "Himanshu Rana",
    position: "Intern at McKinsey ",
    testimonial: "snfsdfdf sdohf osidjf dsf ij sdifj ds isdjf  ijoidiofj isdoi dsodjfoi odifj dsdoifjoisdf osdjfoijsd fj sdf",


},{
    id:2,
    profilePhoto:"/images/projects/vollit.png",
    name: "Luxmi Gupta",
    position: "Flutter developer ",
    testimonial: "snfsdfdf sdohf osidjf dsf ij sdifj ds isdjf  ijoidiofj isdoi dsodjfoi odifj dsdoifjoisdf osdjfoijsd fj sdf",


},

{
    id:3,
    profilePhoto:"/images/projects/vollit.png",
    name: "fgdfsdfsdf",
    position: "Flutter developer ",
    testimonial: "snfsdfdf sdohf osidjf dsf ij sdifj ds isdjf  ijoidiofj isdoi dsodjfoi odifj dsdoifjoisdf osdjfoijsd fj sdf",


},
];



function TestinomialSection() {

     const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="testimonial" className='mt-12 mb-20'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Testimonials
      </h2>
      
      <ul ref={ref} className="flex max-w-5xl mx-auto gap-12 group justify-center flex-wrap">
        {TestimonialList.map((test, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <TestimonialCard
            id={index}
            name={test.name}
            profilePhoto={test.profilePhoto}
            position={test.position}
            testimonial={test.testimonial}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default TestinomialSection;
