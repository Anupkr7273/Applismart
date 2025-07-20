// src/components/sections/HowItWorks.jsx
import { motion } from 'framer-motion';
import {
  ArrowUpTrayIcon,
  PencilIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  ChatBubbleOvalLeftIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: <ArrowUpTrayIcon className="w-8 h-8" />,
    title: "Upload your resume",
    description: "Just drag, drop, and let AI do the rest."
  },
  {
    icon: <PencilIcon className="w-8 h-8" />,
    title: "Edit or Enhance with AI",
    description: "Fix formatting, rewrite bullets, or update your summary."
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8" />,
    title: "Paste a Job Description",
    description: "AppliSmart will tailor your resume and highlight matched skills."
  },
  {
    icon: <ArrowDownTrayIcon className="w-8 h-8" />,
    title: "Download & Apply",
    description: "Get a ready-to-send version with cover letter & score insights."
  },
  {
    icon: <ChatBubbleOvalLeftIcon className="w-8 h-8" />,
    title: "Take Mock Interviews",
    description: "Keep taking interviews with AppliAI until you land your dream job."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Animated Heading */}
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold mb-12 inline-block"
            style={{
              background: 'linear-gradient(to right, #4F46E5, #F59E0B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent'
            }}
          >
            How AppliSmart Works
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative"
          >
            {/* Animated Progress line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 2 }}
              className="hidden sm:block absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-accent/40 to-success/20 origin-top"
            />

            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -1 }}
                  className="relative group flex flex-col sm:flex-row gap-6"
                >
                  {/* Number indicator */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 flex items-start sm:items-center"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="p-2 rounded-lg bg-primary/10 text-primary"
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 pl-14 sm:pl-0">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};