import React from 'react'
import websiteImg1 from '../assets/ecommerce.png';
import websiteImg2 from '../assets/foodEcommerce.png'
import websiteImg3 from '../assets/imageBlog.png'

function Projects() {
    return (
        <section id='Projects' className='flex flex-col py-20 px-5 justify-center bg-color-primary text-white'>
            <div className='w-full'>
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-4xl text-white  border-b-4 border-secondary mb-5  w-[140px] font-bold'>projects</h1>
                    <p>This are my project using react.js with tailwind</p>
                </div>

            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={websiteImg1}></img>
                        <div className='project-dis' >
                            <p className='text-center px-5 py-5'>The ecommerce site build with</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={websiteImg2}></img>
                        <div className='project-dis'>
                            <p className='text-center px-5 py-5'>Food ecommerce site</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={websiteImg3}></img>
                        <div className='project-dis'>
                            <p className='text-center px-5 py-5'>The site with blog </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects