'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import TimelineCard from '@/components/ui/TimelineCard';
import { mockProjects } from '@/lib/types';

export default function ProjectsTimeline() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(mockProjects.map((p) => p.year)));
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedYear === null) return mockProjects;
    return mockProjects.filter((p) => p.year === selectedYear);
  }, [selectedYear]);

  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => b.year - a.year);
  }, [filteredProjects]);

  return (
    <section id="proyectos" className="py-20 sm:py-28 bg-gradient-to-b from-background to-surface relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-playfair">
            Proyectos Comunitarios
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Descubre los proyectos que hemos desarrollado para mejorar la calidad de vida 
            de nuestra comunidad a lo largo de los años.
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedYear === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-surface text-text-secondary hover:bg-primary/10 border border-primary/10'
            }`}
          >
            Todos
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-surface text-text-secondary hover:bg-primary/10 border border-primary/10'
              }`}
            >
              {year}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

          {/* Project Cards */}
          {sortedProjects.map((project, index) => (
            <TimelineCard
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-text-secondary">Completado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-amber-500 rounded-full" />
            <span className="text-text-secondary">En Progreso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-text-secondary">Planificado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

