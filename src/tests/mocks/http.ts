import { rest } from 'msw';
import { mockItem } from '../mockData';
import { CHARACTER_URL } from '../../constants';

export const worker = [
  rest.get(CHARACTER_URL, (req, res, ctx) => {
    return res(ctx.status(202, 'Mocked status'), ctx.json(mockItem));
  }),
];
