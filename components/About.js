import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function About() {
  return (
    <section className="bg-black text-white min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-6">
      {/* Name and Location Section */}
      <div className="flex items-center justify-center space-x-8 mb-12">
        <Image
          src="/dp.jpg" // Add your image path
          alt="Your Profile"
          width={120}
          height={120}
          className="rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">ADITYA RAWAT</h1>
          <p className="text-xl text-gray-400">Location: India</p>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="flex justify-center space-x-8 mb-12 items-center">
        <a href="https://www.linkedin.com/in/aditya-rawat-3862182b0/" target='_blank' className="hover:text-blue-600 text-white">
        <FontAwesomeIcon icon={faLinkedin} className='w-10' />LinkedIn
        </a>
        <a href="https://github.com/adityarwt1" target='_blank' className="hover:text-gray-400">
        <FontAwesomeIcon icon={faGithub} className='w-10' />GitHub
        </a>
        <a href="https://x.com/aditya_rwt1" target='_blank' className="hover:text-blue-400">
        <FontAwesomeIcon icon={faTwitter} className='w-10' />Twitter
        </a>
        <a href="https://www.instagram.com/aditya_rwt1/" target='_blank' className="hover:text-pink-500">
        <FontAwesomeIcon icon={faInstagram} className='w-10' />Instagram
        </a>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Bachelor&apos;s in Computer Science - VITS University Satna (M.P.)</li>
          <li className="mb-2">Web Development Bootcamp - Sheriyans Codding School Academy</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Full Stack Developer at Tech Solutions intern (2024 - May)
          </li>
          <li className="mb-2">
            Frontend Developer Intern at Web Innovators intern (2021 - 2022)
          </li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            E-commerce Store: A simple e-commerce store with product listings,
            shopping cart, and checkout.
          </li>
          <li className="mb-2">
            Social Media App: A basic social media app with user profiles, posts,
            and comments.
          </li>
          <li className="mb-2">
            Chat App: A real-time chat app for user communication.
          </li>
          {/* Add more projects here */}
        </ul>
      </div>

      {/* Resume and Project Buttons */}
      <div className="flex justify-center space-x-8">
        <Link
          href="/resume" // Replace with your resume link
          
          className="bg-blue-500 px-6 py-3 rounded-lg text-white text-xl hover:bg-blue-600 transition"
        >
          View Resume
        </Link>
        <Link
          href="/project" // Link to project section
          className="bg-green-500 px-6 py-3 rounded-lg text-white text-xl hover:bg-green-600 transition"
        >
          View Projects
        </Link>
      </div>
    </div>
  </section>
  )
}

export default About