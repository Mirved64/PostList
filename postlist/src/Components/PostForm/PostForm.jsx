import React from 'react';
import { useState } from 'react';
import Btn from '../button/Btn';
import MyInput from '../Input/MyInput';

function PostForm({ create }) {
  const [post, setPost] = useState({
    _id: Date.now(),
    image: '',
    title: '',
    desk: ''
  })

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {...post, _id:Date.now()}
    create(newPost)
    setPost({image: '', title: '', desk: ''})
  }

  
  return (
    <form onSubmit={addNewPost}>
          <MyInput value = {post.image} 
                   type = 'text' 
                   placeholder = 'Введите url картинки'
                   onChange = {(e) => setPost({...post, image: e.target.value})}>
          </MyInput>
          <img src={post.image} alt='post img' />          
          <MyInput value ={post.title} 
                   type = 'text' 
                   placeholder = 'Введите заголовок поста'
                   onChange = {(e) => setPost({...post, title: e.target.value})}>
          </MyInput>
          <textarea value = {post.desk}
                    type='text' 
                    placeholder='Введите текст поста'
                    onChange = {(e) => setPost({...post, desk: e.target.value})}>
          </textarea>
          {/* <MyInput value = {post.tags}
                   type= 'text' 
                   placeholder='Введите теги через запятую'
                   onChange = {(e) => setPost({...post, picUrl: e.target.value})}>
          </MyInput> */}
          
          <Btn type="submit">Создать</Btn>
        </form>
  );
}

export default PostForm;