import React, {DetailedHTMLProps, FunctionComponent, HTMLAttributes, ReactNode} from 'react';
import styles from './Layout.module.css';
import cn from 'classnames';
import {Header} from './Header/Header';
import {Aside} from './Aside/Aside';
import {Footer} from './Footer/Footer';

export interface LayoutPropsType {
    children: ReactNode
}

const Layout: React.FC<LayoutPropsType> = ({children}): JSX.Element => {
    return <div className={styles.wrapper}>
        <Header className={styles.header}/>
        <Aside className={styles.aside}/>
        <div className={styles.body}>
            {children}
        </div>
        <Footer className={styles.footer}/>
    </div>;
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props}/>
        </Layout>;
    };
};
