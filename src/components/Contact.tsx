import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <motion.a
            href="mailto:hello@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-blue-500/25 transition-all mb-16"
          >
            <FiMail className="text-xl" />
            Say Hello
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
              <FiGithub className="text-2xl" />
            </a>
            <a href="#" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
              <FiLinkedin className="text-2xl" />
            </a>
            <a href="#" className="p-3 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors">
              <FiTwitter className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
