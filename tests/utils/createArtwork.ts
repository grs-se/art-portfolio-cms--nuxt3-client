import type { Artwork } from '~/services/api/types';

export const createArtwork = (artwork: Partial<Artwork> = {}): Artwork => ({
  title: 'Artwork',
  medium: ['Coloured Chalks', 'Coloured Chalks on Paper'],
  imageUrl: 'artwork.jpg',
  date: '2022-11-12',
  description: 'lorem ipsum',
  dimensions: {
    height: { px: 2653, cm: 0 },
    width: { px: 3638, cm: 0 },
  },
  sales: { price: 475 },
  location: ['North Pole', 'Jamaica'],
  categories: ['a', 'b', 'c'],
  tags: ['art', 'painting'],
  ...artwork,
});
