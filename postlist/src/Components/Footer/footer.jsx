import React from 'react';
import s from './footer.module.css'

function Footer(props) {
  return (
    <footer>
      <div className={s.container}>
        <div className={s.authorInfo}>
          Проект реализовал: <a href='/'>Medmixal</a> 2023 ©
        </div>
      </div>
    </footer>
  );
}

export default Footer;