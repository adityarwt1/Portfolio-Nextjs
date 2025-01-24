import React from "react";


export const metadata={
  title: "Resume",
  description: "Resume I maked when i was a fresher"
}
function page() {
  return (
    <div className="bg-white p-10 max-w-4xl mx-auto rounded-lg shadow-lg , mt-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Aditya Rawat</h1>
        <p className="text-gray-600">
          Phone: <span className="text-black">9244524565</span> | Email:{" "}
          <span className="text-blue-500">adityarawatnew2487@gmail.com</span>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aditya-rawat-3862182b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            https://www.linkedin.com/in/aditya-rawat-3862182b
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Highly motivated and detail-oriented Full Stack Developer skilled in
          the MERN stack. Proficient in building responsive web applications
          with expertise in both frontend and backend development. Strong
          understanding of JavaScript, React, Node.js, Express, and MongoDB.
          Quick learner with excellent problem-solving skills and a passion for
          coding.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <strong>Programming Languages:</strong> JavaScript, Python, Java,
            C++
          </li>
          <li>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js,
            Redux
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB, MySQL
          </li>
          <li>
            <strong>Other:</strong> Git, REST APIs, JSON, Firebase, GraphQL,
            Docker, AWS
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Certifications</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Full Stack Web Development Certification - freeCodeCamp</li>
          <li>
            JavaScript Algorithms and Data Structures Certification -
            freeCodeCamp
          </li>
          <li>React - The Complete Guide - Udemy</li>
          <li>Backend Development with Node.js - Coursera</li>
          <li>MongoDB Basics - MongoDB University</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p className="text-gray-700">
          <strong>Bachelor of Technology in Computer Science and Engineering</strong> - VITS
          University SATNA (M.P.), 2023
        </p>
        <p>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <strong>BMW website clone:</strong> Enhance and animate website with
            React + Vite -
            <a
              href="https://bit.ly/3DYNc9O"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Link
            </a>
          </li>
          <li>
            <strong>E-Commerce Platform:</strong> Scalable e-commerce web
            application with user authentication and payment gateway integration
            using MERN stack and Razorpay -
            <a
              href="https://bit.ly/3E8Flqs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Link
            </a>
          </li>
          <li>
            <strong>ATM Machine:</strong> Withdrawal app -
            <a
              href="https://bit.ly/4h1Lm6Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Link
            </a>
          </li>
          <li>
            <strong>Live Chat Application:</strong> Real-time chat app with
            MongoDB -
            <a
              href="https://bit.ly/42mw1co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Link
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Achievements</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            Achieved 95% score in JavaScript Algorithms and Data Structures
            Certification.
          </li>
          <li>
            Won &apos;Best Web Application&apos; award in a college hackathon.
          </li>
          <li>
            Contributed to open-source projects on GitHub, receiving recognition
            from the developer community.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
