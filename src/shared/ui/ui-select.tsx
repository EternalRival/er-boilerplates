import clsx from 'clsx';
import { useId } from 'react';

import type { ReactNode, SelectHTMLAttributes } from 'react';

type SelectOption = Readonly<{
  label: string;
  value: string;
}>;

type Props = Readonly<{
  containerClassName?: string;

  label?: string;
  labelClassName?: string;

  noJumpingErrors?: true;
  error?: string;
  errorClassName?: string;

  selectOptions: SelectOption[];
  selectProps: SelectHTMLAttributes<HTMLSelectElement>;
}>;

function buildOptions(options: SelectOption[]): ReactNode[] {
  return options.map(({ label, value }) => (
    <option
      key={label}
      value={value}
    >
      {label}
    </option>
  ));
}

export function UiSelect({
  containerClassName,

  labelClassName,
  label,

  errorClassName,
  noJumpingErrors,
  error,

  selectOptions,
  selectProps: { className, ...selectProps },
}: Props): ReactNode {
  const id = useId();

  return (
    <div className={clsx(containerClassName ?? 'flex flex-col')}>
      {label && (
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={clsx(
          'h-8 rounded border border-solid border-neutral-300 px-2 outline-none transition-colors invalid:border-rose-500 focus:border-teal-600 focus:shadow',
          className
        )}
        {...selectProps}
      >
        {...buildOptions(selectOptions)}
      </select>
      {(noJumpingErrors ?? error) && (
        <span className={clsx('text-sm text-rose-500', noJumpingErrors && 'h-5', errorClassName)}>{error}</span>
      )}
    </div>
  );
}
