import React, { useState, useEffect } from 'react';
import '../../styles/form.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormPermission } from './FormPermission';
import { IFormCard, Inputs } from './types';
import { FormCountries } from './FormCountries';
import FormDate from './FormDate';
import { FormFile } from './FormFile';
import { FormPersonal } from './FormPersonal';
import { FormCard } from './FormCard';
import { SwitcherGender } from './SwitcherGender';
import FormCardAdded from './FormCardAdded';
export function Form() {
  const timer: ReturnType<typeof setTimeout> | null = null;

  const form = useForm<Inputs>();
  const [modal, setModal] = useState<boolean | null | number>(timer);
  const [cards, setCards] = useState<IFormCard[]>([]);
  const { handleSubmit, reset } = form;

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
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const file = new Blob([data.file[0]]);
    const img = URL.createObjectURL(file);

    const d: IFormCard = {
      img: img,
      name: data.name,
      surname: data.surname,
      gender: data.gender,
      dateOfBorn: data.date,
      permissions: [data.handled, data.publicly, data.hiden],
      countries: data.countries,
    };
    setModal(true);
    reset();
    setCards((prev) => [...prev, d]);
  };
  return (
    <div>
      <form className="form" role="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__container">
          <FormPersonal form={form} />
          <FormPermission form={form} />
          <FormCountries form={form} />
          <FormDate form={form} />
          <SwitcherGender form={form} />
          <FormFile form={form} />
          <input className="form__submit " type="submit" />
        </div>
      </form>
      {modal && <FormCardAdded />}
      <div className="form-page__cards">
        {cards.map((e, index) => (
          <FormCard key={index} data={e} />
        ))}
      </div>
    </div>
  );
}
