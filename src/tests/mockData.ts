import { userType } from '../types/userType';

interface IInfoType {
  info: {
    count: number;
    pages: number;
    next: null | number;
    prev: null | number;
  };
}
type ResType = IInfoType & { results: userType[] };
export const mockItem: ResType = {
  info: {
    count: 3,
    pages: 1,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 5,
      name: 'MockTitle',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
        'https://rickandmortyapi.com/api/episode/32',
        'https://rickandmortyapi.com/api/episode/33',
        'https://rickandmortyapi.com/api/episode/35',
        'https://rickandmortyapi.com/api/episode/36',
        'https://rickandmortyapi.com/api/episode/38',
        'https://rickandmortyapi.com/api/episode/39',
        'https://rickandmortyapi.com/api/episode/40',
        'https://rickandmortyapi.com/api/episode/41',
        'https://rickandmortyapi.com/api/episode/42',
        'https://rickandmortyapi.com/api/episode/43',
        'https://rickandmortyapi.com/api/episode/44',
        'https://rickandmortyapi.com/api/episode/45',
        'https://rickandmortyapi.com/api/episode/46',
        'https://rickandmortyapi.com/api/episode/47',
        'https://rickandmortyapi.com/api/episode/48',
        'https://rickandmortyapi.com/api/episode/49',
        'https://rickandmortyapi.com/api/episode/50',
        'https://rickandmortyapi.com/api/episode/51',
      ],
      url: 'https://rickandmortyapi.com/api/character/5',
      created: '2017-11-04T19:26:56.301Z',
    },
    {
      id: 175,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/175.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/22',
      ],
      url: 'https://rickandmortyapi.com/api/character/175',
      created: '2017-12-29T18:07:17.610Z',
    },
    {
      id: 177,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: 'https://rickandmortyapi.com/api/location/34',
      },
      location: {
        name: "Earth (Evil Rick's Target Dimension)",
        url: 'https://rickandmortyapi.com/api/location/34',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/177.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/177',
      created: '2017-12-29T18:28:19.424Z',
    },
  ],
};
