'use client';

import React, { useState, useEffect } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';

interface TypewriterStoryProps {
  onComplete?: () => void;
}

const FULL_TEXT = [
  "The idea of Truly M was born to revive the relationship once again between the artisans and customers. This relationship in the past was very close, direct and responsible for each other and continued over generation to generation which ensured the sustainability of craft and livelihood of craftsmanship.",
  "Our products celebrate Indian craftsmanship—each piece carrying the warmth, color, and stories of its makers.",
  "“Designed with purpose, made with care.”"
];

export default function TypewriterStory({ onComplete }: TypewriterStoryProps) {
  const [displayedParagraphs, setDisplayedParagraphs] = useState<string[]>(['', '', '']);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const isComplete = paragraphIndex >= FULL_TEXT.length;

  useEffect(() => {
    if (!isTyping || isComplete) {
      if (isComplete) {
        onComplete?.();
      }
      return;
    }

    const currentTarget = FULL_TEXT[paragraphIndex];

    if (charIndex < currentTarget.length) {
      const speed = paragraphIndex === 2 ? 35 : 16;
      const timer = setTimeout(() => {
        setDisplayedParagraphs((prev) => {
          const next = [...prev];
          next[paragraphIndex] = currentTarget.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      const delayTimer = setTimeout(() => {
        setParagraphIndex((p) => p + 1);
        setCharIndex(0);
      }, 400);

      return () => clearTimeout(delayTimer);
    }
  }, [paragraphIndex, charIndex, isTyping, isComplete, onComplete]);

  const handleRestart = () => {
    setDisplayedParagraphs(['', '', '']);
    setParagraphIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  };

  const handleShowAll = () => {
    setDisplayedParagraphs([...FULL_TEXT]);
    setParagraphIndex(FULL_TEXT.length);
    setIsTyping(false);
  };

  return (
    <div className="w-full space-y-6">
      {/* Decorative Badge */}
      <div className="flex items-center justify-center gap-2">
        <span className="px-3 py-1 rounded-full border border-stone-700 bg-stone-900/80 text-[11px] uppercase tracking-widest text-[#B82C1C] font-sans font-medium inline-flex items-center gap-1.5 shadow-xs">
          <Sparkles className="w-3 h-3 text-[#B82C1C]" />
          <span>The Truly M Manifesto</span>
        </span>
      </div>

      {/* Typewritten Narrative Card */}
      <div className="relative p-6 sm:p-10 rounded-lg bg-stone-900/90 border border-stone-800/90 shadow-2xl backdrop-blur-md text-left max-w-3xl mx-auto space-y-5">
        {/* Paragraph 1 */}
        <p className="font-sans text-sm sm:text-base leading-relaxed text-stone-300 font-light min-h-[3rem]">
          {displayedParagraphs[0]}
          {paragraphIndex === 0 && !isComplete && (
            <span className="inline-block w-2 h-4 ml-1 bg-[#B82C1C] animate-pulse align-middle" />
          )}
        </p>

        {/* Paragraph 2 */}
        {displayedParagraphs[1] && (
          <p className="font-sans text-sm sm:text-base leading-relaxed text-stone-300 font-light min-h-[2rem]">
            {displayedParagraphs[1]}
            {paragraphIndex === 1 && !isComplete && (
              <span className="inline-block w-2 h-4 ml-1 bg-[#B82C1C] animate-pulse align-middle" />
            )}
          </p>
        )}

        {/* Paragraph 3: Tagline */}
        {displayedParagraphs[2] && (
          <div className="pt-2 border-t border-stone-800 text-center sm:text-left">
            <p className="font-serif italic text-xl sm:text-2xl text-stone-100 font-normal tracking-wide">
              {displayedParagraphs[2]}
              {paragraphIndex === 2 && !isComplete && (
                <span className="inline-block w-2 h-5 ml-1.5 bg-[#B82C1C] animate-pulse align-middle" />
              )}
            </p>
          </div>
        )}

        {/* Animation Control Buttons */}
        <div className="pt-3 flex items-center justify-between text-[11px] text-stone-500 font-sans border-t border-stone-800/60">
          <span className="italic">
            {isComplete ? 'Manifesto complete' : 'Crafting narrative...'}
          </span>
          <div className="flex items-center gap-3">
            {!isComplete && (
              <button
                type="button"
                onClick={handleShowAll}
                className="hover:text-stone-300 transition-colors underline cursor-pointer"
              >
                Read in Full
              </button>
            )}
            <button
              type="button"
              onClick={handleRestart}
              title="Replay typing animation"
              className="hover:text-[#B82C1C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Replay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
