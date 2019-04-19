import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavButtons.module.css';
import '../../fontello/css/fontello.css';

const NavButtons = () => (
    <section className={style.container}>
      <div className={style.container}>
        <NavLink exact activeClassName={style.activeLink} className={style.default} to="/">
            <div className={style.list}>
                <i className="icon-departures" style={{ fontSize: "20px" }} />
                <p>Вылет</p>
            </div>
        </NavLink>
        <NavLink activeClassName={style.activeLink} className={style.default} to='/arrival'>
            <div className={style.list}>
                <i className="icon-departures" style={{ fontSize: "20px" }} />
                <p>Прилет</p>
            </div>
        </NavLink>
      </div>
    </section>
  )

  export default NavButtons;