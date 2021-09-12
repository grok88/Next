import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export interface ButtonPropsType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
    view: 'primary' | 'ghost'
    arrow?: 'right' | 'down' | 'none'
}

export const Button: React.FC<ButtonPropsType> = ({view, children, arrow = 'none', className, ...props}): React.ReactElement => {
    return <button className={cn(styles.button, className, {
        [styles.primary]: view === 'primary',
        [styles.ghost]: view === 'ghost',
    })} {...props}>
        {children}{arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.right]: arrow === 'right',
        [styles.down]: arrow === 'down',
    })}><ArrowIcon/></span>}</button>;
};

