import { LookbookImage } from '@/types/lookbook';

/**
 * Assigns asymmetrical bento grid column spans while preserving the exact
 * 765:1024 natural portrait aspect ratio so NO images are cropped.
 */
export function createBentoLayout(imagePaths: string[]): LookbookImage[] {
  // Repeating editorial bento rhythm:
  // Every few items, a featured piece spans 2 columns, creating varied scale
  // while strictly maintaining aspect-[765/1024] so 100% of each garment is visible.
  const spanPattern = [
    'col-span-1 sm:col-span-2 row-span-2', // Large feature piece
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 sm:col-span-2 row-span-2', // Large feature piece
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];

  return imagePaths.map((src, index) => {
    const span = spanPattern[index % spanPattern.length];
    return {
      src,
      alt: `Truly M Handcrafted Piece ${index + 1}`,
      spanClass: span,
      // Natural 765x1024 ratio = 765 / 1024 ~ 0.747 (3:4)
      aspectClass: 'aspect-[765/1024]',
    };
  });
}
