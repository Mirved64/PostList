import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import PostList from '../Components/PostList/postList';
import PostForm from '../Components/PostForm/PostForm';
import MyModal from '../Components/MyModal/MyModal';
import api from './../utils/Api';
import Spinner from '../Components/Spiner/Spiner';

function App() {
  const [posts, setPosts] = useState ([])
  const [modal, setModal] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  
  useEffect(() => {
    setIsPostLoading(true)
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postsData, userData]) => {
        setPosts(postsData);
        setCurrentUser(userData);
      })
      .catch(err => console.log(err))
      setIsPostLoading(false)
  }, [])

 

  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p._id !== post._id))
  }

  return (
    <div>
      <Header user={currentUser} />
      <main>
        <button onClick={() => setModal(true)}>Создать пост</button>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} author={currentUser}/>
        </MyModal>
        
        
        {isPostLoading
            ? <Spinner />
            : (posts.length !== 0)
              ? <PostList posts={posts} remove={removePost}/>
              : <h2>Посты отсутствуют</h2>
        
        }

      </main>
      <Footer />
    </div>
  );
}

export default App;
