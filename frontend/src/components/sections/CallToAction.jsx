// src/components/sections/CallToAction.jsx
import { motion } from 'framer-motion';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            
          </h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold mb-12 "
            style={{
              background: 'linear-gradient(to right, #4F46E5, #F59E0B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Ready to get hired smarter?
          </motion.h2>
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
            Upload Resume Now
          </motion.button>
          
          {/* Optional Subtext */}
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            It's free to get started - no credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;