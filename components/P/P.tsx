import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './P.module.css';
import cn from 'classnames';

export interface PPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'l' | 'm';
    children: ReactNode
}

export const P: React.FC<PPropsType> = ({children, size='m', className, ...props}): React.ReactElement => {
    return <p className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
    })} {...props}>{children}</p>
}

