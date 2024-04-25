import React from 'react'
import AboutImg from '../assets/about.png'

function About() {
    return (
        <section id='About' className='flex flex-col md:flex-row bg-color-secondary px-5'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg}></img>
            </div>
            <div className='md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white  border-b-4 border-primary mb-5  w-[170px] font-bold'>About me</h1>
                    <p className='pb-5'>Hi, My name is Ashok RR. I am a full stack developer. I build a beautiful website with React.js and Tailwind css</p>
                    <p className='pb-5'>I am proficents in front end development like reactjs, tailwind css. </p>
                    <p className='pb-5'>In backend I know java springBoot</p>
                    <p>I have good knowldege in Automation testing, with selenium and restassured in testng and cucumber framework</p>
                </div>

            </div>
        </section>
    )
}

export default About