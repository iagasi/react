import { UseFormReturn } from 'react-hook-form';

export type personalPermissionsType = {
  currentElement: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLInputElement>;
  HandledField: React.RefObject<HTMLInputElement>;
  PybliclyField: React.RefObject<HTMLInputElement>;
  HidenField: React.RefObject<HTMLInputElement>;
};

export type countriesType = {
  curentElemet: React.RefObject<HTMLSelectElement>;
  error: React.RefObject<HTMLDivElement>;
};
export type IFormCard = {
  img: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  countries: string | undefined;
  gender: string | undefined;
  permissions: Array<string | undefined>;
  dateOfBorn: string;
};

export type genderType = {
  curr: string;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLDivElement>;
};
export type formType = {
  formWrapperRef: React.RefObject<HTMLDivElement>;

  personalPermissions: personalPermissionsType;
  countries: countriesType;
  gender: genderType;
  genderError: React.RefObject<HTMLInputElement>;

  file: React.RefObject<HTMLInputElement>;
  fileError: React.RefObject<HTMLDivElement>;
  timer: ReturnType<typeof setTimeout> | null;
};

export type dateType = {
  curr: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLDivElement>;
};
export type fileType = {
  curr: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLDivElement>;
};
export type personalType = {
  name: React.RefObject<HTMLInputElement>;
  nameError: React.RefObject<HTMLDivElement>;
  surnameError: React.RefObject<HTMLDivElement>;
  surname: React.RefObject<HTMLInputElement>;
};

export type Inputs = {
  name: string;
  surname: string;
  handled: string;
  publicly: string;
  hiden: string;
  countries: string;
  genderMale: string;
  genderFemale: string;
  date: string;
  file: string;
};
export type IPropsForm = {
  form: UseFormReturn<Inputs>;
};
