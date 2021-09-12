import React from 'react';
import styles from './Htag.module.css';

export interface HtagPropsType {
    tag: 'h1' | 'h2' | 'h3'
    children: React.ReactNode
}

export const Htag: React.FC<HtagPropsType> = ({tag, children}): React.ReactElement => {
    const renderHeaders = () => {
        switch (tag) {
            case 'h1':
                return <h1 className={styles.h1}>{children}</h1>;
            case 'h2':
                return <h2 className={styles.h1}>{children}</h2>;
            case 'h3':
                return <h3 className={styles.h1}>{children}</h3>;
            default:
                return null;
        }
    };
    return <>
        {renderHeaders()}
    </>;
};

