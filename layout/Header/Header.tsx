import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Header.module.css';
import cn from 'classnames';

export interface HeaderPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Header: React.FC<HeaderPropsType> = ({...props}): React.ReactElement => {
    return <div {...props}>
        Header
    </div>;
};

