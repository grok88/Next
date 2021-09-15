import React, {useState} from 'react';
import {Htag} from '../components/Htag/Htag';
import {Button} from '../components/Button/Button';
import {P} from '../components/P/P';
import {Tag} from '../components/Tag/Tag';
import {Rating} from '../components/Rating/Rating';


export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    console.log(counter);
    return (
        <div>
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
        </div>
    );
}
