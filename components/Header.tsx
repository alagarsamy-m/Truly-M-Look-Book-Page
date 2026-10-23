'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#FAF7F2] py-4 sm:py-6 px-4 sm:px-8 md:px-12 border-b border-stone-200/50">
      <div className="w-full flex items-center justify-between">
        {/* Left Side: Truly M SVG Logo (Enlarged for clear visibility) */}
        <Link
          href="/"
          aria-label="Truly M Home"
          className="inline-flex items-center transition-opacity duration-300 hover:opacity-85"
        >
          <div className="relative h-20 sm:h-24 md:h-28 w-32 sm:w-40 md:w-48">
            <Image
              src="/images/logo.svg"
              alt="Truly M Logo"
              fill
              priority
              sizes="(max-width: 640px) 140px, 192px"
              className="object-contain object-left"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Right Side: Truly M SVG Tagline (Untouched, maintained exactly as is) */}
        <div className="flex items-center">
          <div className="relative h-6 sm:h-8 md:h-10 w-36 sm:w-52 md:w-64 opacity-90 hover:opacity-100 transition-opacity">
            <Image
              src="/images/tagline.svg"
              alt="Stories Crafted by Hand"
              fill
              priority
              sizes="(max-width: 640px) 150px, 260px"
              className="object-contain object-right"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
