// src/components/sections/Testimonials.jsx
import { 
  ClockIcon, 
  SparklesIcon, 
  DocumentCheckIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Testimonials = () => {
  const features = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Save Time Instantly",
      description: "Revise and perfect your resume in minutes, not hours."
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Let AI Handle the Heavy Lifting",
      description: "Stop second-guessing — get optimized, professional content instantly."
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: "ATS-Optimized Results",
      description: "See real-time keyword matching and improvement suggestions."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-50 dark:bg-gray-800 rounded-full">
            <HeartIcon className="w-5 h-5 text-primary dark:text-white" />
            <span className="text-sm font-medium text-primary dark:text-white">Why Job Seekers Love AppliSmart</span>
          </div>
          <div className="w-full text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
  >
    Transform Your Job Search
    <br />
    <motion.span
      className="text-2xl inline-block"
      style={{
        background: 'linear-gradient(to right, #4F46E5, #F59E0B)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent'
      }}
    >
      With AI-Powered Tools
    </motion.span>
  </motion.h2>
</div>
          
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Trusted by 10,000+ job seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;