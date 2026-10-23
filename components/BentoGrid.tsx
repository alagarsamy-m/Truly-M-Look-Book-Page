'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { LookbookImage } from '@/types/lookbook';
import { X } from 'lucide-react';

interface BentoGridProps {
  items: LookbookImage[];
}

export default function BentoGrid({ items }: BentoGridProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      {/* Asymmetrical Bento Grid with 100% Complete Image Visibility */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 sm:gap-6 md:gap-8">
        {items.map((item, index) => {
          const spanClass = item.spanClass || 'col-span-1';

          return (
            <motion.div
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActiveImage(item.src)}
              className={`group relative overflow-hidden rounded-md bg-[#FAF7F2] border border-stone-300/60 shadow-xs hover:shadow-artisan-lg transition-all duration-500 cursor-pointer ${spanClass}`}
            >
              {/* Image Container with exact natural 765x1024 proportion ensuring 100% complete view */}
              <div className="relative w-full aspect-[765/1024] bg-[#FAF7F2] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full-Screen Pure Photo View (Tap to close, no redirection, complete view) */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            {/* Minimalist Close Button */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* High-Res Image Display */}
            <div
              className="relative w-full max-w-5xl h-[88vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Truly M Piece Full View"
                fill
                sizes="95vw"
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
