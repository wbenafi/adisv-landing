'use client';

import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  EyeIcon,
  HeartIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { mockSiteConfig } from '@/lib/types';

const values = [
  {
    icon: HeartIcon,
    title: 'Compromiso',
    description: 'Dedicación total al bienestar de nuestra comunidad',
  },
  {
    icon: UserGroupIcon,
    title: 'Participación',
    description: 'Involucramos a todos en las decisiones importantes',
  },
  {
    icon: GlobeAltIcon,
    title: 'Sostenibilidad',
    description: 'Proyectos con visión de largo plazo y respeto ambiental',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Transparencia',
    description: 'Gestión clara y rendición de cuentas constante',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function About() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Conócenos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-playfair">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-surface p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <LightBulbIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-playfair">Misión</h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              {mockSiteConfig.aboutMission}
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-surface p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/5"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <EyeIcon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-playfair">Visión</h3>
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              {mockSiteConfig.aboutVision}
            </p>
          </motion.div>
        </div>

        {/* History Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="about-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-pattern)" />
            </svg>
          </div>
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-playfair">
              Nuestra Historia
            </h3>
            <p className="text-white/90 leading-relaxed text-lg max-w-4xl">
              {mockSiteConfig.aboutHistory}
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-primary text-center mb-12 font-playfair"
          >
            Nuestros Valores
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-surface p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 border border-primary/5"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-text-secondary text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

