import React from 'react';


function Post(props) {
 
  return (
    <div className="">
      <div>
        <img src={props.post.image} alt='author avatar'/>
        <div>
          <h2>{props.post._id}</h2>
          {/* <h3>{props.author.about}</h3> */}
        </div>
      </div>
			<a href="/posts" className="">
				<img src='' alt={props.post.title} className="" />
				<div className="">
					<h4>{props.post.title}</h4>		
				</div>
			</a>
		</div>
  );
}

export default Post;