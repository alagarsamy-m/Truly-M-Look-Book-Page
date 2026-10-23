'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BentoGrid from '@/components/BentoGrid';
import { SECTION_ONE_IMAGES, SECTION_TWO_IMAGES } from '@/data/lookbook-data';
import { createBentoLayout } from '@/lib/lookbook-utils';

export default function LookbookPage() {
  const sectionOneLayout = createBentoLayout(SECTION_ONE_IMAGES);
  const sectionTwoLayout = createBentoLayout(SECTION_TWO_IMAGES);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-brand-charcoal flex flex-col justify-between">
      {/* Header with only logo on the left */}
      <Header />

      <main className="flex-1 w-full pb-20">
        {/* Title: LOOK BOOK */}
        <div className="w-full px-4 sm:px-8 md:px-12 pt-4 sm:pt-6 pb-6 sm:pb-10">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.2em] uppercase font-light text-brand-charcoal">
            LOOK BOOK
          </h1>
        </div>

        {/* First Section of Product Images (from public/images/1) */}
        <section className="w-full px-4 sm:px-8 md:px-12">
          <BentoGrid items={sectionOneLayout} />
        </section>

        {/* Separation Line Between Section 1 and Section 2 */}
        <div className="w-full px-4 sm:px-8 md:px-12 py-14 sm:py-20">
          <div className="relative flex items-center justify-center">
            <div className="w-full border-t border-stone-300" />
            <div className="absolute px-4 bg-[#FAF7F2]">
              <span className="w-2 h-2 rounded-full bg-stone-400 block" />
            </div>
          </div>
        </div>

        {/* Second Section of Product Images (from public/images/2) */}
        <section className="w-full px-4 sm:px-8 md:px-12">
          <BentoGrid items={sectionTwoLayout} />
        </section>
      </main>

      {/* Footer with only Logo & Truly M Story */}
      <Footer />
    </div>
  );
}
