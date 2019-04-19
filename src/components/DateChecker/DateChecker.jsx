import React from 'react';
import style from './DateChecker.module.css';

const DateChecker = ({onClick}) => (
    <section className={style.container}>
        <div className={style.item} onClick={() => onClick('yesterday')}>Вчера</div>
        <div className={style.item} onClick={() => onClick('today')}>Сегодня</div>
        <div className={style.item} onClick={() => onClick('tomorrow')}>Завтра</div>
    </section>
)

export default DateChecker;