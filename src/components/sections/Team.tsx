'use client';

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { mockTeamMembers } from '@/lib/types';

export default function Team() {
  const sortedMembers = [...mockTeamMembers].sort((a, b) => a.order - b.order);

  return (
    <section id="equipo" className="py-20 sm:py-28 bg-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

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
            Nuestro Equipo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-playfair">
            Junta Directiva
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Conoce a las personas comprometidas que lideran nuestra organización 
            y trabajan incansablemente por el bienestar de la comunidad.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-4">
            ¿Interesado en ser parte de nuestro equipo de voluntarios?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl"
          >
            Contáctanos
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

