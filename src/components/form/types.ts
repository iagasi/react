import { UseFormReturn } from 'react-hook-form';

export type IFormCard = {
  img: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  countries: string | undefined;
  gender: string | undefined;
  permissions: Array<string | undefined>;
  dateOfBorn: string;
};

export type Inputs = {
  name: string;
  surname: string;
  handled: string;
  publicly: string;
  hiden: string;
  countries: string;
  gender: string;
  date: string;
  file: string;
};
export type IPropsForm = {
  form: UseFormReturn<Inputs>;
};
