export type personalPermissions = {
  currentElement: React.RefObject<HTMLInputElement>;
  error: React.RefObject<HTMLInputElement>;
  HandledField: React.RefObject<HTMLInputElement>;
  PybliclyField: React.RefObject<HTMLInputElement>;
  HidenField: React.RefObject<HTMLInputElement>;
};

export type genderType = {
  curentElemet: React.RefObject<HTMLSelectElement>;
  error: React.RefObject<HTMLDivElement>;
};
export type IFormCard = {
  img: string | undefined;
  name: string | undefined;
  surname: string | undefined;
  gender: string | undefined;
  permissions: Array<string | undefined>;
  dateOfBorn: string;
};
