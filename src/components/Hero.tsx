import React from 'react';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building robust and scalable applications with modern technologies.
            Passionate about creating exceptional user experiences.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
          >
            Let's Connect <ArrowRight className="ml-2" size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Layout className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Frontend Development</h3>
            <p className="text-gray-600">Creating responsive and intuitive user interfaces with React and modern CSS.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Backend Development</h3>
            <p className="text-gray-600">Building scalable APIs and server-side applications with Node.js and Python.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Clean Code</h3>
            <p className="text-gray-600">Writing maintainable, tested, and efficient code following best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;