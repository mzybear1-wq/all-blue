import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text Introduction */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Passionate about creating digital experiences
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I'm a passionate software developer who loves building things for the web. My journey in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about web architecture!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                When I'm not at the computer, I'm usually exploring new technologies, playing video games, or hanging out with my friends.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-foreground text-center lg:text-left">
                My Skills
              </h3>
              
              <div className="space-y-8">
                {skills.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-blue-400 mb-4">{category.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-blue-500 hover:text-white transition-colors cursor-default shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
