import React from 'react'
import ResumeImg from '../assets/resume.png'

function Resume() {
    return (
        <section id='Resume' className='flex flex-col md:flex-row bg-color-secondary px-5'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img src={ResumeImg} className='w-[300px]'></img>
            </div>
            <div className='md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white  border-b-4 border-primary mb-5  w-[140px] font-bold'>Resume</h1>
                    <p className='pb-5'>You can view my rseume <a className='button' href='#'>Download</a></p>
                </div>

            </div>
        </section>
    )
}

export default Resume