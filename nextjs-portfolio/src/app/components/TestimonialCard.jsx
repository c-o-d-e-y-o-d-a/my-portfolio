"use client"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TestimonialCard({ profilePhoto, name, position, testimonial }) {
  return (
     <div className="flex md:max-w-6xl lg:max-w-md gap-14 min-w-fit">
        <div className="bg-white/10 cursor-pointer group-hover:blur-sm hover:!blur-none p-8 rounded-xl mix-blend-luminosity group-hover:scale-[0.85] hover:!scale-100 duration-500">
        <img src={profilePhoto} className="h-20 mb-2 rounded-md"/>
        <h4 className="uppercase text-md font-bold">{name}</h4>
         <h5 className=" text-sm ">{position}</h5>

        <p className="text-sm leading-7 my-3 font-light opacity-50">
            {testimonial}
        </p>

        <button className="py-2.5 px-8 rounded-full bg-slate-500">
            Get in Touch
        </button>


        </div>
       

     </div>
  );
}
