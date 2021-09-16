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
    return <>
        <Header/>
        <div>
            <Aside/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
    </>;
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props}/>
        </Layout>;
    };
};
