import { forwardRef } from 'react';
import classNames from 'classnames';
export enum ColorScheme {
  white = 'white',
  black = 'black',
  gray = 'gray',
  darkgray = 'darkgray',
  lightgray = 'lightgray',
  enabled = 'enabled',
  outline = 'outline',
  disabled = 'disabled-bg',
  lightblue = 'lightblue',
  navy = 'navy',
  pink = 'pink',
  blue = 'blue',
}

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'outlined' | 'link';
  color?: string;
  disabled?: boolean;
  onClick?: (e: React.UIEvent) => any;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, disabled, color = ColorScheme.navy, ..._props }, ref) => {
    _props.type = _props.type || 'button';
    return (
      <button
        {..._props}
        className={`grow px-4 py-2 bg-${color} rounded-lg border border-${color} disabled:opacity-100 disabled:cursor-default transition ${
          color === ColorScheme.navy
            ? `text-${ColorScheme.lightblue}`
            : 'text-black'
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{children}
}</span>
      </button>
    );

    function onClick(e: React.UIEvent) {
      const element = e.currentTarget;
      //TODO: check form state
      _props.onClick?.(e);
    }
  }
);
