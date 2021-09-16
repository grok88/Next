import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Aside.module.css';
import cn from 'classnames';

export interface AsidePropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const Aside: React.FC<AsidePropsType> = ({...props}): React.ReactElement => {
    return <div {...props}>
        Aside
    </div>;
};

