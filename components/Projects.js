import React from "react";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      name: "E-commerce Store",
      description:
        "A simple e-commerce store with product listings, shopping cart, and checkout functionality.",
      image: "ecommerce.png", // Replace with your image URL
      link: "https://github.com/adityarwt1/Ecommerce-website", // Add the project link here
    },
    {
      name: "Social Media App",
      description:
        "A basic social media app with features like user profiles, posts, and comments.",
      image: "/images/socialmedia.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Chat App",
      description: "A chat app that allows users to chat with each other in real-time.",
      image: "/chatapp.png", // Replace with your image URL
      link: "https://lnkd.in/dehJCNFe", // Add the project link here
    },
    {
      name: "To-Do List App",
      description:
        "A to-do list app that allows users to create and manage tasks efficiently.",
      image: "/images/todolist.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Weather App",
      description:
        "A weather app that displays the current weather and forecast based on the user's location.",
      image: "/images/weatherapp.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Recipe App",
      description:
        "A recipe app that allows users to search for and save their favorite recipes.",
      image: "/images/recipeapp.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Travel Guide App",
      description:
        "A travel guide app that helps users plan their trips by providing travel destinations and itineraries.",
      image: "/images/travelguide.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Fitness Tracker",
      description:
        "A fitness tracker that helps users track their workouts, sets goals, and monitor progress.",
      image: "/images/fitnesstracker.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Survey App",
      description:
        "A survey app that allows users to create and take surveys, with real-time feedback and data analysis.",
      image: "/images/surveyapp.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Dashboard",
      description:
        "A dashboard that displays real-time data and metrics, with interactive charts and graphs.",
      image: "/images/dashboard.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Admin Panel",
      description:
        "An admin panel for managing users, content, and administrative tasks efficiently.",
      image: "/images/adminpanel.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
    {
      name: "Online Course Platform",
      description:
        "An online course platform that allows users to browse, take, and manage courses.",
      image: "/images/onlinecourse.jpg", // Replace with your image URL
      link: "#", // Add the project link here
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white py-10">
      <h1 className="text-center text-5xl font-bold mb-10 glow-effect">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-screen-xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] p-6 rounded-lg border-2 border-transparent hover:border-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <div className="relative mb-4">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md inline-block text-center"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
