export type personalPermissions = {
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
