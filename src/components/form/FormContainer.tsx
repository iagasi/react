import React from 'react';
import { ReactNode } from 'react';
import { Form } from './Form';
import { FormCard } from './FormCard';
import FormDate from './FormDate';
import { FormFile } from './FormFile';
import { FormGender } from './FormGender';
import { FormPermission } from './FormPermission';
import { FormPersonal } from './FormPersonal';
import { genderType, IFormCard, personalPermissions } from './types';

interface IState {
  cards: Array<IFormCard | undefined>;
}
const mock: IFormCard = {
  name: 'gell',
  surname: 'Hideee',
  img: 'https://9to5google.com/wp-content/uploads/sites/4/2020/04/google_doodle_coronavirus_helpers_1.jpg?quality=82&strip=all&w=1280',
  dateOfBorn: '11/00/2022',
  gender: 'Male',
  permissions: ['Allow', 'Hide'],
};
export class FormContainer extends React.Component<object, IState> {
  formWrapperRef: React.RefObject<HTMLDivElement>;
  name: React.RefObject<HTMLInputElement>;
  nameError: React.RefObject<HTMLDivElement>;
  surnameError: React.RefObject<HTMLDivElement>;
  surname: React.RefObject<HTMLInputElement>;
  personalPermissions: personalPermissions;
  gender: genderType;
  date: React.RefObject<HTMLInputElement>;
  dateError: React.RefObject<HTMLDivElement>;
  file: React.RefObject<HTMLInputElement>;
  fileError: React.RefObject<HTMLDivElement>;
  constructor(props: object) {
    super(props);
    this.formWrapperRef = React.createRef();
    this.name = React.createRef();
    this.nameError = React.createRef();
    this.surname = React.createRef();
    this.surnameError = React.createRef();
    this.personalPermissions = {
      currentElement: React.createRef(),
      error: React.createRef(),
      HandledField: React.createRef(),
      PybliclyField: React.createRef(),
      HidenField: React.createRef(),
    };
    this.gender = {
      curentElemet: React.createRef(),
      error: React.createRef(),
    };

    this.date = React.createRef();
    this.dateError = React.createRef();
    this.file = React.createRef();
    this.fileError = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [mock],
    };
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const nameIs = FormPersonal.checkName(this.name, this.nameError);
    const surnameIs = FormPersonal.checkSurname(this.surname, this.surnameError);
    const permissionsIs = FormPermission.check(this.personalPermissions);
    const genderIs = FormGender.check(this.gender);
    const dateIs = FormDate.check(this);
    const url: string | undefined = FormFile.check(this);

    const data: IFormCard = {
      name: this.name.current!.value,
      surname: this.surname.current!.value,
      img: url!,
      dateOfBorn: this.date.current!.value,
      gender: this.gender.curentElemet.current!.value,
      permissions: [
        this.personalPermissions.HandledField.current?.value,
        this.personalPermissions.PybliclyField.current?.value,
        this.personalPermissions.HidenField.current?.value,
      ],
    };
    if (nameIs && surnameIs && permissionsIs && genderIs && dateIs && url) {
      this.setState((prev) => ({ cards: [...prev.cards, data] }));
    }
  }

  render(): ReactNode {
    return (
      <div className="form-page__container">
        <Form container={this}>
          <FormPersonal container={this} />
          <FormPermission container={this.personalPermissions} />
          <FormGender container={this.gender} />
          <FormDate container={this} />
          <FormFile container={this} />
        </Form>
        <div className="form-page__cards">
          {this.state.cards && this.state.cards.map((e, i) => e && <FormCard key={i} data={e} />)}
        </div>
      </div>
    );
  }
}
