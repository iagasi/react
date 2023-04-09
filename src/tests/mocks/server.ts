import { setupServer } from 'msw/node';
import { worker } from './http';
export const server = setupServer(...worker);
