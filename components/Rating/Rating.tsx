import React, {DetailedHTMLProps, HTMLAttributes, KeyboardEvent, useEffect, useState} from 'react';
import styles from './Rating.module.css';
import Star from './star.svg';
import cn from 'classnames';


export interface RatingPropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number
    setRating?: (rating: number) => void
    isEditable?: boolean
}

export const Rating: React.FC<RatingPropsType> = ({setRating, rating, isEditable = false, className, ...props}): React.ReactElement => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        buildArray(rating);
    }, [rating]);

    const buildArray = (currentRating: number) => {
        const newArray = ratingArray.map((r, i) => {
            return <span className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.isEditable]: isEditable,
            })}
                         onMouseEnter={() => changeDisplay(i + 1)}
                         onMouseLeave={() => changeDisplay(rating)}
                         onClick={() => onChangeRating(i + 1)}>
                <Star
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGAElement>) => onKeyChangeRating(e.code, i + 1)}
                />
            </span>;
        });
        setRatingArray(newArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) return;
        buildArray(i);
    };
    const onChangeRating = (i: number) => {
        if (!isEditable || !setRating) return;
        setRating(i);
    };
    const onKeyChangeRating = (code: string, i: number) => {
        if (!isEditable || !setRating) return;
        if (code === 'Space') setRating(i);
    };


    return <div className={cn(styles.rating, className, {})} {...props}>
        {
            ratingArray.map((r, i) => {
                return <span key={i}>{r}</span>;
            })
        }
    </div>;
};

