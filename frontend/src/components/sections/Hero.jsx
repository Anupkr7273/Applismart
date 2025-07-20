// frontend/src/components/sections/Hero.jsx
import React from 'react';
import Button from '../ui/Button';

const Hero = () => (
  <section className="container mx-auto px-6 py-20 text-center ">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-6 leading-tight">
      Smarter Applications Start Here.
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
      Upload your resume and let AI tailor it, rewrite your bullets, 
      and prepare you for interviews — all in one place.
    </p>
    <div className="flex justify-center gap-4">
      <Button variant="primary" className="hover-scale">
        Upload Resume
      </Button>
      <Button variant="secondary" className="hover-scale">
        See How It Works
      </Button>
    </div>
  </section>
);

export default Hero;