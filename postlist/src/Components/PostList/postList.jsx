import Post from '../Post/post';

function PostList({posts, remove}) {
  return (

    <div>
      <div className='posts'>
			{posts.map((post) => 
        <Post post={post} remove={remove} key={post._id}/>
      )}
      
		</div>
    </div>
  );
}

export default PostList;