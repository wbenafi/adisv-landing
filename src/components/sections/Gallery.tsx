'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import GalleryModal from '@/components/ui/GalleryModal';
import { mockGalleryImages, GalleryImage } from '@/lib/types';

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(mockGalleryImages.map((img) => img.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedYear === null) return mockGalleryImages;
    return mockGalleryImages.filter((img) => img.year === selectedYear);
  }, [selectedYear]);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium tracking-wider uppercase text-sm">
            Momentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-playfair">
            Galería de Fotos
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto">
            Revive los momentos más importantes de nuestra comunidad a través de esta 
            colección de fotografías de eventos y actividades.
          </p>
        </motion.div>

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedYear === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-surface text-text-secondary hover:bg-primary/10 border border-primary/10'
            }`}
          >
            Todas
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(index)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    📷
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{image.caption}</p>
                  <span className="text-white/70 text-xs">{image.year}</span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.year}
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No hay fotos para mostrar en este momento.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <GalleryModal
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
}

