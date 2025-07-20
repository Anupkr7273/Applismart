// src/components/layout/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-16 pb-8 shadow-lg dark:shadow-xl">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-0"></div>
      
      {/* Floating gradient overlay */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                AppliSmart
              </span>
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Your AI-powered career assistant for resume optimization, 
              interview prep, and job search success.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Help Center', 'Tutorials', 'Webinars', 'Templates'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span className="mr-3">📧</span>
                <span>support@applismart.com</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span className="mr-3">📞</span>
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li className="flex items-start" whileHover={{ x: 5 }}>
                <span className="mr-3">📍</span>
                <span>San Francisco, CA</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gray-300 dark:bg-gray-700 mb-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} AppliSmart. All rights reserved.
          </motion.p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-30 bg-primary dark:bg-accent text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all"
        aria-label="Back to top"
      >
        <span className="text-lg">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;