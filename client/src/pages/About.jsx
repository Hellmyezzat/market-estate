// About.jsx

import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <h1 className="text-3xl font-bold mb-4">About Market Estate</h1>

        <p className="text-lg mb-4">
          <span className="font-bold">Helmy Estate</span> is a modern real
          estate marketplace designed and built using the{' '}
          <span className="font-bold">MERN stack</span>. This project aims to
          provide a user-friendly platform for users to explore, buy, and sell
          properties with ease.
        </p>
        <p className="text-lg mb-4">
          In this project, we utilize a variety of technologies and tools to
          create a seamless user experience, including{' '}
          <span className="font-bold">React</span> for the frontend,{' '}
          <span className="font-bold">Express.js</span> and{' '}
          <span className="font-bold">MongoDB</span> for the backend, and{' '}
          <span className="font-bold">Redux Toolkit</span> for state management.
        </p>
        <p className="text-lg mb-4">
          Additionally, we incorporate{' '}
          <span className="font-bold">JWT authentication</span> for secure user
          authentication and authorization.
          <span className="font-bold"> Firebase</span> is used for additional
          features such as real-time notifications and cloud storage.
        </p>
        <p className="text-lg mb-4">
          Our development process also includes the use of{' '}
          <span className="font-bold">Vite</span> for fast frontend development
          and deployment, along with <span className="font-bold">ESLint</span>{' '}
          and <span className="font-bold">Prettier</span> for code linting and
          formatting.
        </p>
        <p className="text-lg mb-4">
          Helmy Estate is an ongoing project, and we continue to learn and
          improve our skills through its development. Stay tuned for future
          updates and enhancements!
        </p>
      </div>
    </div>
  )
}

export default About
