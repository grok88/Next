import React from 'react';
import styles from './LearnGrid.module.css'

type LearnGridPropsType = {

}

export const LearnGrid:React.FC<LearnGridPropsType> = ():React.ReactElement => {
  return <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles.body}>body</div>
      <div className={styles.sidebar}>sidebar</div>
      <div className={styles.footer}>footer</div>
      {/*<div className={styles.c1}>1</div>*/}
      {/*<div className={styles.c2}>2</div>*/}
      {/*<div className={styles.c3}>3</div>*/}
      {/*<div className={styles.c4}>4</div>*/}
      {/*<div className={styles.c5}>5</div>*/}
      {/*<div className={styles.c6}>6</div>*/}
      {/*<div className={styles.c7}>7</div>*/}
      {/*<div className={styles.c8}>8</div>*/}
      {/*<div className={styles.c9}>9</div>*/}
  </div>;
};

