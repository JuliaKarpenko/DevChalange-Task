import React from 'react';
import style from './DateChecker.module.css';

const DateChecker = (props) => (
    <section className={style.container}>
        <div className={style.item}>Вчера</div>
        <div className={style.item}>Сегодня</div>
        <div className={style.item}>Завтра</div>
    </section>
)

export default DateChecker;