import Card from '../Post/post';

function PostList({posts}) {
  return (

    <div>
      <div className='posts'>
			{posts.map((post) => 
        <Card post={post} key={post._id}/>
      )}
      
		</div>
    </div>
  );
}

export default PostList;