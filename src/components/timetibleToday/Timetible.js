import React from 'react';
import style from './Timetible.module.css';


const getTime = (time) => {
    let date = new Date(time);

    let dateString = [
    ("0" + (date.getHours()+1)).slice(-2), 
    ("0" + date.getMinutes()).slice(-2)
    ].join(":");
    return dateString;
}

const Timetible = ({articles}) => (
    <section className={style.container}>
        <table className={style.table}>
            <thead>
                <tr className={style.header}>
                    <th>Терминал</th>
                    <th>Время</th>
                    <th>Место назначения</th>
                    <th>Авиакомпания</th>
                    <th>Рейс</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
            {articles.map(({id, term, gate, time, city, status, company, flight}) => (
                <tr key={id}>
                    <td data-foo={term}><span className={style.span}>{term}</span></td>
                    <td>{getTime(time)}</td>
                    <td>{city}</td>
                    <td>{company}</td>
                    <td># {flight}</td>
                    <td>{status}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </section>
);

export default Timetible