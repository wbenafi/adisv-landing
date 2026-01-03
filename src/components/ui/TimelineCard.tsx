'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface TimelineCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const statusConfig = {
  completed: {
    icon: CheckCircleIcon,
    label: 'Completado',
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  in_progress: {
    icon: ClockIcon,
    label: 'En Progreso',
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  planned: {
    icon: CalendarIcon,
    label: 'Planificado',
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
};

export default function TimelineCard({
  project,
  index,
  isExpanded,
  onToggle,
}: TimelineCardProps) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`relative flex items-center mb-12 last:mb-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-surface shadow-lg transform md:-translate-x-1/2 z-10" />

      {/* Content Card */}
      <motion.div
        layout
        className={`w-full md:w-[calc(50%-40px)] ${
          isLeft ? 'md:pr-0 ml-8 md:ml-0' : 'md:pl-0 ml-8 md:ml-0'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary/5 cursor-pointer ${
            isExpanded ? 'ring-2 ring-secondary' : ''
          }`}
          onClick={onToggle}
        >
          {/* Image */}
          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-30">🏗️</div>
            </div>
            {/* Year Badge */}
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              {project.year}
            </div>
            {/* Status Badge */}
            <div className={`absolute top-4 right-4 ${status.bg} ${status.color} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
              <StatusIcon className="w-4 h-4" />
              {status.label}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-2 font-playfair">
              {project.title}
            </h3>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : '3rem' }}
              className="overflow-hidden"
            >
              <p className={`text-text-secondary leading-relaxed ${!isExpanded && 'line-clamp-2'}`}>
                {project.description}
              </p>
            </motion.div>
            <button
              className="mt-3 text-secondary font-medium text-sm hover:text-primary transition-colors flex items-center gap-1"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              {isExpanded ? 'Ver menos' : 'Ver más'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

