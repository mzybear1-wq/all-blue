import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                A Creative Developer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I build interactive, modern, and high-performance web applications. 
              Passionate about UI/UX design, clean code, and creating digital experiences that leave a lasting impression.
            </p>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings around avatar */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Avatar placeholder */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 overflow-hidden shadow-2xl flex items-center justify-center border-4 border-pink-500/30">
                <img 
                  src="https://cdn.mos.cms.futurecdn.net/zRramSvTqiZDNp9roc4MYg-650-80.jpg.webp" 
                  alt="Lotso Huggin Bear" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
