import React from 'react'
import HeroImage from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-color-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-hero-font' >Hi, <br /> I am Ashok <span className='text-black'> RR</span>
                    <p className='text-2xl'>I am a Full-stack developer</p>
                </h1>
                <div className='flex py-10'>
                    <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                    <a href='#' className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                    <a href='#' className='hover:text-white'><AiOutlineInstagram size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImage}></img>
        </section>
    )
}

export default Hero