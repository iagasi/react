import React from 'react';
import { ReactNode } from 'react';
import { Form } from './Form';
import { FormCard } from './FormCard';
import FormDate from './FormDate';
import { FormFile } from './FormFile';
import { FormCountries } from './FormCountries';
import { FormPermission } from './FormPermission';
import { FormPersonal } from './FormPersonal';
import { countriesType, genderType, IFormCard, personalPermissions } from './types';
import { SwitcherGender } from './SwitcherGender';
import FormCardAdded from './FormCardAdded';

interface IState {
  cards: Array<IFormCard | undefined>;
  renderComponent: boolean;
}

export class FormContainer extends React.Component<object, IState> {
  formWrapperRef: React.RefObject<HTMLDivElement>;
  name: React.RefObject<HTMLInputElement>;
  nameError: React.RefObject<HTMLDivElement>;
  surnameError: React.RefObject<HTMLDivElement>;
  surname: React.RefObject<HTMLInputElement>;
  personalPermissions: personalPermissions;
  countries: countriesType;
  gender: genderType;
  genderError: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  dateError: React.RefObject<HTMLDivElement>;
  file: React.RefObject<HTMLInputElement>;
  fileError: React.RefObject<HTMLDivElement>;
  timer: ReturnType<typeof setTimeout> | null;
  constructor(props: object) {
    super(props);
    this.timer = null;
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
    this.countries = {
      curentElemet: React.createRef(),
      error: React.createRef(),
    };

    this.gender = {
      curr: '',
      male: React.createRef(),
      female: React.createRef(),
      error: React.createRef(),
    };
    this.genderError = React.createRef();
    this.date = React.createRef();
    this.dateError = React.createRef();
    this.file = React.createRef();
    this.fileError = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
      renderComponent: false,
    };
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const nameIs = FormPersonal.checkName(this.name, this.nameError);
    const surnameIs = FormPersonal.checkSurname(this.surname, this.surnameError);
    const permissionsIs = FormPermission.check(this.personalPermissions);
    const countriesIs = FormCountries.check(this.countries);
    const dateIs = FormDate.check(this);
    const url: string | undefined = FormFile.check(this);
    const genderIs = SwitcherGender.check(this.gender);

    const data: IFormCard = {
      name: this.name.current!.value,
      surname: this.surname.current!.value,
      img: url!,
      dateOfBorn: this.date.current!.value,
      countries: this.countries.curentElemet.current!.value,
      gender:
        (this.gender.male.current!.checked && this.gender.male.current!.value) ||
        (this.gender.female.current!.checked && this.gender.female.current!.value) ||
        '',

      permissions: [
        this.personalPermissions.HandledField.current?.checked
          ? this.personalPermissions.HandledField.current?.value
          : '',
        this.personalPermissions.PybliclyField.current?.checked
          ? this.personalPermissions.PybliclyField.current?.value
          : '',
        this.personalPermissions.HidenField.current?.checked
          ? this.personalPermissions.HidenField.current?.value
          : '',
      ],
    };
    if (nameIs && surnameIs && permissionsIs && countriesIs && dateIs && url && genderIs) {
      this.setState((prev) => ({ cards: [...prev.cards, data], renderComponent: true }));
      this.name.current!.value = '';
      this.surname.current!.value = '';
      this.personalPermissions.HandledField.current!.checked = false;
      this.personalPermissions.PybliclyField.current!.checked = false;
      this.personalPermissions.HidenField.current!.checked = false;
      this.countries.curentElemet.current!.value = '0';
      this.date.current!.value = '';
      this.file.current!.value = '';
      this.gender.male.current!.checked = false;
      this.gender.female.current!.checked = false;
      this.gender.curr = '';
    }
  }
  componentDidUpdate(): void {
    console.log('Z');
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      return;
    } else {
      this.timer = setTimeout(() => {
        console.log('here');
        this.setState(() => ({ renderComponent: false }));
      }, 1000);
    }
  }
  render(): ReactNode {
    return (
      <div className="form-page__container">
        <Form container={this}>
          <FormPersonal container={this} />
          <FormPermission container={this.personalPermissions} />
          <FormCountries container={this.countries} />
          <FormDate container={this} />
          <SwitcherGender curr={this.gender} />
          <FormFile container={this} />
        </Form>
        {this.state.renderComponent && <FormCardAdded />}
        <div className="form-page__cards">
          {this.state.cards && this.state.cards.map((e, i) => e && <FormCard key={i} data={e} />)}
        </div>
      </div>
    );
  }
}
