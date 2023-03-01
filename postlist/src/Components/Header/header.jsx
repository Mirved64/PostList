import React from 'react';
import Logo from '../Logo/logo'
import s from './header.module.css'


function Header({user}) {

  
  return (
    <header className={s.header}>
      <div className={s.conteiner}>
        <div className={s.logo}>
          <a href='/' className={s.link}>
            <Logo/>
            <h1 className={s.title}>Реактивные посты</h1>
          </a>
          <div className={s.user}>
            <div ><img className={s.avatar} src={user.avatar} alt=''/></div>
            <div>
              <span>{user.email}</span><br/>
              <span>{user.name}</span><br/>
              <span>{user.about}</span>
            </div>         
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;