import React from 'react';
import Logo from '../Logo/logo'
import s from './header.module.css'

function Header({children, user, onUpdateUser}) {
  
  return (
    <header className={s.header}>
      <div className={s.conteiner}>
        <div className={s.logo}>
          <a href='/' className={s.link}>
            <Logo/>
            <h1 className={s.title}>Реактивные посты</h1>
          </a>
          <div className={s.user}>
            <span className={s.avatar}><img src='' alt=''/></span>
            <div>
            {user?.email && <span>{user?.email}</span>}
            {user?.name && <span>{user?.name}</span>} 
            </div>
            <button type='button' className={s.btn} >Изменить</button>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;