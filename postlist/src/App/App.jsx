import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import PostList from '../Components/PostList/postList';
import PostForm from '../Components/PostForm/PostForm';

function App() {
  const [posts, setPosts] = useState ([
    {image: 'http://dummyimage.com/400x200.png/5fa2dd/ffffff',
     _id: '63e4fde859b98b038f77b47b',
     title: 'Welcome to school in our Group-10'}, 
    {image: 'https://picsum.photos/200', _id: '63e52a0559b98b038f77b4c5', title: 'Рандомная картинка'},
    {image: 'https://img.myloview.com.br/quadros/lecanto-light-manha-de-fevereiro-fora-de-lecanto-florida-o-orvalho-que-havia-acumulado-na-grama-da-noite-anterior-criou-uma-nevoa-surreal-como-os-raios-do-sol-aqueceu-o-ar-400-71254643.jpg', _id: '63eb3d2c59b98b038f77b5e8', title: 'Собрание сочинений'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div>
      <Header />
      <main>
        <PostForm create={createPost}/>
        
        <PostList posts={posts}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
