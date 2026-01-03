'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { mockSiteConfig } from '@/lib/types';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="hero-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="2" fill="white" />
                <path
                  d="M0 30 L60 30 M30 0 L30 60"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl"
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Construyendo comunidad desde 1985
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/logo.svg"
              alt="ADISV"
              width={280}
              height={52}
              className="h-14 sm:h-16 md:h-20 w-auto mx-auto brightness-0 invert"
              priority
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="font-light text-3xl">Asociación de Desarrollo Integral de</span>
            <br />
            <span className="text-secondary font-extrabold tracking-wider">San Vicente</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {mockSiteConfig.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-secondary/30 hover:scale-105"
            >
              Ver Proyectos
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contáctenos
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { number: '40+', label: 'Años de servicio' },
            { number: '50+', label: 'Proyectos completados' },
            { number: '5000+', label: 'Familias beneficiadas' },
            { number: '100+', label: 'Voluntarios activos' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="block text-3xl sm:text-4xl font-bold text-secondary mb-1">
                {stat.number}
              </span>
              <span className="text-white/70 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => {
            document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors"
          aria-label="Scroll to next section"
        >
          <span className="text-xs mb-2">Descubrir más</span>
          <ChevronDownIcon className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}

