import React, { useEffect, useRef, useState } from 'react';
import { Form } from './Form';
import { FormCard } from './FormCard';
import FormDate, { dateCheck } from './FormDate';
import { fileCheck, FormFile } from './FormFile';
import { countriesCheck, FormCountries } from './FormCountries';
import { FormPermission, permissionsCheck } from './FormPermission';
import { checkName, checkSurname, FormPersonal } from './FormPersonal';
import {
  countriesType,
  dateType,
  fileType,
  genderType,
  IFormCard,
  personalPermissionsType,
  personalType,
} from './types';
import { genderCheck, SwitcherGender } from './SwitcherGender';
import FormCardAdded from './FormCardAdded';

export function FormContainer() {
  const timer: ReturnType<typeof setTimeout> | null = null;
  const [cards, setCards] = useState<IFormCard[]>([]);
  const [modal, setModal] = useState<boolean | null | number>(timer);
  const personal: personalType = {
    name: useRef(null),
    nameError: useRef(null),
    surname: useRef(null),
    surnameError: useRef(null),
  };

  const personalPermissions: personalPermissionsType = {
    currentElement: useRef(null),
    error: useRef(null),
    HandledField: useRef(null),
    PybliclyField: useRef(null),
    HidenField: useRef(null),
  };
  const countries: countriesType = {
    curentElemet: useRef(null),
    error: useRef(null),
  };

  const gender: genderType = {
    curr: '',
    male: useRef(null),
    female: useRef(null),
    error: useRef(null),
  };
  const date: dateType = {
    curr: useRef(null),
    error: useRef(null),
  };
  const file: fileType = {
    curr: useRef(null),
    error: useRef(null),
  };

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const nameIs = checkName(personal.name, personal.nameError);
    const surnameIs = checkSurname(personal.surname, personal.surnameError);
    const permissionsIs = permissionsCheck(personalPermissions);
    const countriesIs = countriesCheck(countries);
    const dateIs = dateCheck(date);
    const url: string | undefined = fileCheck(file);
    const genderIs = genderCheck(gender);

    const data: IFormCard = {
      name: personal.name.current!.value,
      surname: personal.surname.current!.value,
      img: url!,
      dateOfBorn: date.curr.current!.value,
      countries: countries.curentElemet.current!.value,
      gender:
        (gender.male.current!.checked && gender.male.current!.value) ||
        (gender.female.current!.checked && gender.female.current!.value) ||
        '',

      permissions: [
        personalPermissions.HandledField.current?.checked
          ? personalPermissions.HandledField.current?.value
          : '',
        personalPermissions.PybliclyField.current?.checked
          ? personalPermissions.PybliclyField.current?.value
          : '',
        personalPermissions.HidenField.current?.checked
          ? personalPermissions.HidenField.current?.value
          : '',
      ],
    };
    if (nameIs && surnameIs && permissionsIs && countriesIs && dateIs && url && genderIs) {
      setCards((prev) => [...prev, data]);
      setModal(true);

      personal.name.current!.value = '';
      personal.surname.current!.value = '';
      personalPermissions.HandledField.current!.checked = false;
      personalPermissions.PybliclyField.current!.checked = false;
      personalPermissions.HidenField.current!.checked = false;
      countries.curentElemet.current!.value = '0';
      date.curr.current!.value = '';
      file.curr.current!.value = '';
      gender.male.current!.checked = false;
      gender.female.current!.checked = false;
      gender.curr = '';
    }
  }
  useEffect(() => {
    function componentDidUpdate(): void {
      if (modal) {
        setTimeout(() => {
          setModal(false);
        }, 700);
      }
    }
    componentDidUpdate();
  }, [modal]);

  return (
    <div className="form-page__container">
      <Form handler={handleSubmit}>
        <FormPersonal container={personal} />
        <FormPermission container={personalPermissions} />
        <FormCountries container={countries} />
        <FormDate container={date} />
        <SwitcherGender container={gender} />
        <FormFile container={file} />
      </Form>
      {modal && <FormCardAdded />}
      <div className="form-page__cards">
        {cards && cards.map((e, i) => e && <FormCard key={i} data={e} />)}
      </div>
    </div>
  );
}
