import clsx from 'clsx';

import type { FormEventHandler, ReactNode } from 'react';

type Props = Readonly<{
  children: ReactNode;
  legendText?: string;
  onFormSubmit?: FormEventHandler<HTMLFormElement>;
  className?: string;
}>;

export function UiForm({ children, legendText, onFormSubmit, className }: Props): ReactNode {
  return (
    <form
      className="bg-color1 p-2 shadow shadow-color4"
      onSubmit={onFormSubmit}
    >
      <fieldset className={clsx('p-2', className)}>
        <legend className="text-lg font-medium">{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
}
