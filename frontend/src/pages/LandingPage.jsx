// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../layouts/Header';
import Hero from '../components/sections/Hero';
import { FeaturesGrid } from '../components/sections/FeaturesGrid'; // Note: Fix typo "FestureGrid" → "FeaturesGrid"?
import { HowItWorks } from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import UserReview from '../components/sections/UserReview';
import CallToAction from '../components/sections/CallToAction';
import Footer from '../layouts/Footer';

const LandingPage = () => {
  return (
    <div className="dark:bg-gray-900"> {/* Fixed typo: gray-988 → gray-900 */}
      <Header />
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <UserReview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;