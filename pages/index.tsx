import React, {useState} from 'react';
import {Htag} from '../components/Htag/Htag';
import {Button} from '../components/Button/Button';
import {P} from '../components/P/P';
import {Tag} from '../components/Tag/Tag';
import {Rating} from '../components/Rating/Rating';
import {withLayout} from '../layout/Layout';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {MenuItem} from '../interfaces/menu.interface';

function Home({menu, firstCategory}: HomeProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            {/*<LearnGrid/>*/}
            <Htag tag={'h3'}>Test = {counter}</Htag>
            <Button view={'primary'} arrow={'down'} onClick={() => setCounter(x => x + 1)}>Primary</Button>
            <Button view={'ghost'} arrow={'right'}>Primary</Button>
            <P size={'s'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, voluptates!</P>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, voluptates!</P>
            <P size={'l'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, voluptates!</P>
            <div>
                <Tag size={'s'}>Small Tag</Tag>
                <Tag size={'s'} color={'red'}>Small Tag red</Tag>
                <Tag size={'s'} color={'grey'}>Small Tag grey</Tag>
                <Tag size={'s'} color={'green'}>Small Tag green</Tag>
                <Tag size={'s'} color={'primary'}>Small Tag primary</Tag>
            </div>
            <div>
                <Tag size={'m'}>Small Tag</Tag>
                <Tag size={'m'} color={'red'}>Medium Tag red</Tag>
                <Tag size={'m'} color={'grey'}>Medium Tag grey</Tag>
                <Tag size={'m'} color={'green'}>Medium Tag green</Tag>
                <Tag size={'m'} color={'primary'}>Medium Tag primary</Tag>
            </div>
            <Rating rating={rating} setRating={setRating} isEditable/>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {firstCategory});
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[]
    firstCategory: number
}