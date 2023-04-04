import React from 'react';
import { IPropsForm } from './types';

export function FormPermission(props: IPropsForm) {
  const {
    watch,
    register,
    formState: { errors },
  } = props.form;

  const w = watch(['handled', 'publicly', 'hiden']);

  const validate = () => {
    const isSelected = w.filter((e) => typeof e === 'string');

    if (!isSelected.length) {
      return 'Select At least one conset';
    }
    return true;
  };

  return (
    <div className="form__permission">
      I consent to my personal data
      <br /> Will be:
      <label>
        <input
          type="checkbox"
          value="Handled"
          data-testid="checkboxHandled"
          {...register('handled', { validate: validate })}
        />
        Handled
      </label>
      <label>
        <input type="checkbox" value="Publicly Aviable" {...register('publicly')} />
        Publicly Aviable
      </label>
      <label>
        <input type="checkbox" value="Hiden" {...register('hiden')} />
        Hidden
      </label>
      {errors.handled && <span className="form__field-error ">{errors.handled?.message}</span>}
    </div>
  );
}
