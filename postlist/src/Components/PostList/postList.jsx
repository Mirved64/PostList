import Post from '../Post/post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './PostList.module.css'

function PostList({posts, remove}) {
  return (
    <div className={s.container}>
      <div>
        
      </div>
      <div className={s.posts}>
        
          {posts.map((post) =>
            <Post post={post} remove={remove} key={post._id} {...post}/>
          )}
        
		  </div>
    </div>
  );
}

export default PostList;