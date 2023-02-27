import React from 'react';
import s from './Post.module.css'


function Post({image, title, text, author, remove, post}) {
  
  return (
    <div className={s.postWrapper}>
      <div className={s.postHeader}>
        <div className={s.authorInfo}>
          <img className={s.avatar} src={author.avatar} alt='author avatar'/>
          <div className=''>
            <h2>{author.name}</h2>
            <p className={s.about}>{author.about}</p>
          </div>
        </div>
      </div>
			<div className={s.cardContent}>
				<img className={s.image} src={image} alt={title} />
				<div className={s.body}>
					<h5 className={s.title}><b>{title}</b></h5>
          <p className={s.text}>{text}</p>		
				</div>
			</div>
      <div className=''>
        <button onClick={() => remove(post)}>Удалить</button>
      </div>
		</div>
  );
}

export default Post;