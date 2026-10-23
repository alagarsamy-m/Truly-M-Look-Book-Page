import test from 'node:test';
import assert from 'node:assert/strict';
import { createBentoLayout } from './lookbook-utils';

test('createBentoLayout assigns natural 765/1024 aspect ratio to prevent cropping', () => {
  const images = ['/images/1/1.jpeg', '/images/1/2.jpeg', '/images/1/3.jpeg'];
  const layout = createBentoLayout(images);

  assert.equal(layout.length, 3);
  assert.equal(layout[0].src, '/images/1/1.jpeg');
  assert.equal(layout[0].aspectClass, 'aspect-[765/1024]');
  assert.equal(layout[1].aspectClass, 'aspect-[765/1024]');
  // Item 0 is featured (spans 2 columns), item 1 is standard 1 column
  assert.equal(layout[0].spanClass, 'col-span-1 sm:col-span-2 row-span-2');
  assert.equal(layout[1].spanClass, 'col-span-1 row-span-1');
});

test('createBentoLayout handles empty array safely', () => {
  const layout = createBentoLayout([]);
  assert.equal(layout.length, 0);
});

test('createBentoLayout cycles through bento patterns for large sets', () => {
  const mockImages = Array.from({ length: 20 }, (_, i) => `/images/mock/${i}.jpeg`);
  const layout = createBentoLayout(mockImages);
  assert.equal(layout.length, 20);
  assert.equal(layout[0].spanClass, layout[10].spanClass);
});
