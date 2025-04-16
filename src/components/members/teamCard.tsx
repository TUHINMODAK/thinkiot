import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
interface Teams1{
  imageUrl: string,
  name: string,
  designation: string,
  instagram: string,
  linkedin: string,
  twitter: string,
  github: string
}
export default function Teams1({ teams1 }:{teams1:Teams1}) {
  return (
    <div className="">
      {/* Other Team1 */}
      <div data-aos="fade-up" data-aos-duration="1000" className=" my-10 h-56 w-72 rounded-lg bg-white p-10 shadow-xl ">
        <div className="flex justify-center">
        <div className=" -mt-28  h-32 w-32  border-3 border-orange-600 rounded-full ">
          <img
            src={teams1.imageUrl}
            alt={teams1.name}
            // effect="blur"
            className="  rounded-full object-cover "
          />
        </div>
        
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">
            {teams1.name}
          </h1>
          <p className="text-center text-sm text-gray-800">
            {teams1.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
        <a href={teams1.instagram} className="hover:text-red-600" target="_blank"><BsInstagram /></a>
            <a href={teams1.linkedin} className="hover:text-red-600" target="_blank"><BsLinkedin /></a>
            <a href={teams1.twitter} className="hover:text-red-600" target="_blank"><BsTwitter  /></a>
            <a href={teams1.github} className="hover:text-red-600" target="_blank"> <BsGithub  /></a>    
        </div>
      </div>
    </div>
  );
}
