'use client';

import { motion } from 'framer-motion';
import { TeamMember } from '@/lib/types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-surface rounded-2xl shadow-lg overflow-hidden border border-primary/5 transition-all duration-300 group-hover:shadow-xl">
        {/* Photo */}
        <div className="relative h-64 bg-gradient-to-br from-primary/30 to-secondary/30 overflow-hidden">
          {/* Placeholder Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            {member.bio && (
              <p className="text-white text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {member.bio}
              </p>
            )}
          </div>

          {/* Decorative Shape */}
          <div className="absolute -bottom-6 left-0 right-0">
            <svg viewBox="0 0 200 30" className="w-full fill-surface">
              <path d="M0,30 Q100,0 200,30 L200,30 L0,30 Z" />
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 text-center relative">
          <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
            {member.position}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

