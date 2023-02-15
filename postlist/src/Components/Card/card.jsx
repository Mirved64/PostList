import React from 'react';
import cn from 'classnames'
import { isLiked } from '../../utils/posts';

function Card({ image, likes, comments, tags, _id, title, author, text, created_at, updated_at, onProductLike, currentUser }) {
  
  return (
    <div className="">
      <div>
        <img src={author.avatar} alt='author avatar'/>
        <div>
          <h2>{author.name}</h2>
          <h3>{author.about}</h3>
        </div>
      </div>
			<a href="/posts" className="">
				<img src={image} alt={title} className="" />
				<div className="">
					<h4>{title}</h4>
          <p>{text}</p>
					
				</div>
			</a>
			
		</div>
  );
}

export default Card;