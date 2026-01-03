'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { GalleryImage } from '@/lib/types';

interface GalleryModalProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: GalleryModalProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            aria-label="Next image"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-primary/40 to-secondary/40 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-30">📷</div>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">{currentImage.caption}</p>
              <p className="text-white/60 text-sm mt-1">{currentImage.year}</p>
            </div>

            {/* Image Counter */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-secondary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

