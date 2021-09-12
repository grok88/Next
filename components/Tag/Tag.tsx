import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Tag.module.css';
import cn from 'classnames';

export interface TagPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}

export const Tag: React.FC<TagPropsType> = ({children, size = 'm', href, color = 'ghost', className, ...props}): React.ReactElement => {
    return <div className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
    })} {...props}>
        {
            href ? <a href={href}>{children}</a> : <>{children}</>
        }
    </div>;
};

