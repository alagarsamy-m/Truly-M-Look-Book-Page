'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const MOTTO = 'Designed with purpose, made with care.';

export default function Footer() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < MOTTO.length) {
          setTypedText(MOTTO.slice(0, typedText.length + 1));
        } else {
          // Pause when sentence is fully typed
          setTimeout(() => setIsDeleting(true), 3200);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(MOTTO.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <footer className="w-full bg-[#FAF7F2] border-t border-stone-300/60 pt-20 pb-24 px-4 sm:px-8 md:px-12">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Truly M SVG Logo (Significantly enlarged for clear visibility) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-24 sm:h-32 md:h-36 w-36 sm:w-48 md:w-56 mb-8"
        >
          <Image
            src="/images/logo.svg"
            alt="Truly M"
            fill
            sizes="(max-width: 640px) 150px, 224px"
            className="object-contain object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Delicate Typographic Ornament */}
        <div className="flex items-center justify-center gap-3 w-32 mb-10">
          <span className="h-[1px] flex-1 bg-stone-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#B82C1C]" />
          <span className="h-[1px] flex-1 bg-stone-300" />
        </div>

        {/* The Truly M Story Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-stone-800"
        >
          <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-stone-800 tracking-wide">
            The idea of <strong className="font-normal text-brand-charcoal">Truly M</strong> was born to revive the relationship once again between the artisans and customers. This relationship in the past was very close, direct and responsible for each other and continued over generation to generation which ensured the sustainability of craft and livelihood of craftsmanship.
          </p>

          <p className="font-serif italic text-base sm:text-lg md:text-xl leading-relaxed text-stone-600 font-light">
            Our products celebrate Indian craftsmanship—each piece carrying the warmth, color, and stories of its makers.
          </p>

          {/* Typing Animation for “Designed with purpose, made with care.” */}
          <div className="pt-6 pb-2 min-h-[56px] sm:min-h-[64px] flex items-center justify-center">
            <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-brand-charcoal font-normal tracking-wide inline-flex items-center">
              <span>&ldquo;{typedText}&rdquo;</span>
              <span className="inline-block w-[2.5px] h-6 sm:h-8 md:h-9 bg-[#B82C1C] ml-1.5 animate-pulse" />
            </span>
          </div>
        </motion.div>

        {/* Minimal Copyright Bottom */}
        <div className="mt-14 pt-8 border-t border-stone-300/40 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-stone-400 gap-2">
          <span>Stories Crafted by Hand</span>
          <span>&copy; {new Date().getFullYear()} Truly M. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
