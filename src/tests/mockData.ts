import { IFormCard } from '../components/form/types';
import { IItem } from '../intefaces';

export const mockItem: IItem[] = [
  {
    id: 1,
    title: 'MockTitle',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 1,
    title: 'Samung',
    description: 'An apple mobile which is nothing like apple',
    price: 600,
    discountPercentage: 14,
    rating: 4.69,
    stock: 55,
    brand: 'samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
];

export const mockCardItem: IFormCard = {
  name: 'gell',
  surname: 'Hideee',
  img: 'https://9to5google.com/wp-content/uploads/sites/4/2020/04/google_doodle_coronavirus_helpers_1.jpg?quality=82&strip=all&w=1280',
  dateOfBorn: '11/00/2022',
  gender: 'Male',
  countries: 'England',
  permissions: ['Allow', 'Hide'],
};
