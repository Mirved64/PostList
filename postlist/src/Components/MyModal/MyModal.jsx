import React from 'react';
import s from './MyModal.module.css'


function MyModal({children, visible, setVisible}) {

  const rootClasses = [s.modal]

  if(visible) {
    rootClasses.push(s.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;