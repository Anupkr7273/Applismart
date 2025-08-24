// src/components/sections/UserReview.jsx
import { motion } from 'framer-motion';

const userReview = [
  {
    quote: "AppliSmart helped me rewrite my resume in less than an hour. The bullet rewrites and ATS feedback got me 4 interview calls within 2 weeks.",
    author: "Ananya R.",
    role: "Job Seeker (Tech)",
    initials: "AR"
    
  },
  {
    quote: "The tailored resume and GPT-generated cover letter made my switch smoother. I finally felt confident applying outside my previous domain.",
    author: "Karan M.",
    role: "Career Switcher (Sales → Product)",
    initials: "KM"
  },
  {
    quote: "I had no idea how to write resume bullets. AppliSmart made my resume look sharp, and I loved the interview prep section.",
    author: "Rajesh Tandon",
    role: "Job Switching (Team Lead)",
    initials: "RT"
  },
  {
    quote: "I've used fancy resume builders, but none gave me intelligent suggestions like this. The STAR bullet rewrites are better than what I'd write myself.",
    author: "Jaya Mehta",
    role: "Job Seeker",
    initials: "JM"
  }
];

const UserReview = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Gradient Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-white/30 to-amber-50/30 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-gray-900/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-indigo-100/10 to-transparent dark:via-indigo-900/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
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
            What Early Users Are Saying
          </motion.h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        {/* UserReview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userReview.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Glass Effect Card */}
              <div className="h-full p-6 rounded-xl backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Profile Picture Placeholder */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default UserReview;