import React from 'react'

function HeroSection() {
  const phoneNumber = "9244524565"; // Replace with your phone number (no + sign)
  const message = "Hello, I need assistance!"; // Replace with your custom message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (<section className="flex items-center justify-center h-screen w-full bg-black">
    <div className="text-center w-full px-6 md:w-3/4">
      {/* Heading */}
      <div className="text-white text-4xl md:text-7xl font-bold glow-effect">
        Hello, I am ADITYA RAWAT
      </div>
  
      {/* Description */}
      <div className="text-white text-lg md:text-xl mt-4 mx-auto max-w-4xl">
        I am a MERN Stack Developer with expertise in building dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating responsive user interfaces, developing robust backend APIs, and managing databases efficiently.
      </div>
  
      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-[rgba(255,255,255,0.3)] p-2 font-semibold rounded-md text-white text-xl border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-button-glow transition-transform duration-300 ease-in-out  hover:bg-[#007BFF] transform hover:scale-105 w-full md:w-1/3">
          Project
        </button>
        <button className="bg-[rgba(255,255,255,0.3)] p-2 font-semibold rounded-md text-white text-xl border border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-button-glow transition-transform duration-300 ease-in-out hover:bg-[#00D757] transform hover:scale-105 w-full md:w-1/3">
         <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"s
          
        >
          Talk to Me on WhatsApp
        </a>
        </button>
      </div>
    </div>
  </section>
  
  )
}

export default HeroSection