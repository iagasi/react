import React from 'react';
interface IFormError {
  refError: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}
export function FormError(props: IFormError) {
  return (
    <div ref={props.refError} className="form__field-error">
      {props.children}
    </div>
  );
}
