import React from 'react';
import s from './Buttons.module.css'
import cn from 'classnames'

function Btn ({ children, ...props}) {
  return (
    <button className={ cn(s.btnAcess, s.btn) }>
      {children}
    </button>
  );
}

export default Btn;