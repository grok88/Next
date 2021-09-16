import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';

export interface FooterPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Footer: React.FC<FooterPropsType> = ({...props}): React.ReactElement => {
    return <div {...props}>
        Aside
    </div>;
};

