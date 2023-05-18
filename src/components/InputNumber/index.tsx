import { forwardRef, InputHTMLAttributes, ChangeEventHandler, useCallback } from 'react';

import './styles.scss';

export type BaseInputRefAttr = HTMLInputElement;
export type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  keyLabel: number;
};

const InputNumber = forwardRef<BaseInputRefAttr, BaseInputProps>(
  ({ label, keyLabel, id, name, onChange, ...props }, ref) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        e.target.value = e.target.value.startsWith('0') ? '' : e.target.value;
        e.target.value = e.target.value.length > 2 ? e.target.value.slice(0, 1) : e.target.value;
        e.target.value = e.target.value > '10' ? e.target.value.slice(0, 1) : e.target.value;

        Object.defineProperty(e, 'target', {
          writable: true,
          value: { value: e.target.value, name },
        });

        if (onChange) onChange(e);
      },
      [onChange, name]
    );

    return (
      <div className='input'>
        <div className='input-desktop'>
          {label && keyLabel === 0 && (
            <label id={id} htmlFor={id} className='label'>{label}</label>
          )}
        </div>
        <div className='input-mobile'>
          {label && (
            <label id={id} htmlFor={id} className='label'>{label}</label>
          )}
        </div>
        <input
          {...props}
          type='number'
          ref={ref}
          name={name}
          min={1}
          max={10}
          maxLength={2}
          onChange={handleChange}
        />
      </div>
    );
  }
);

export default InputNumber;
