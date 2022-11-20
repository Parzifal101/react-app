import React, { useState, useMemo, useEffect } from "react";
import Counter from '../components/Counter';
import Post from "../components/Post";
import "../styles/style.css";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import { useRef } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyForm from "../components/MyForm";
import MySelect from "../components/UI/select/MySelect";
import PostFilter from "../components/PostFilter";
import axios from 'axios';
import { usePosts } from "../hooks/usePost";
import Loader from "../components/UI/loader/Loader";
import { useDispatch, useSelector } from "react-redux";


function Feed() {
  async function fetchId(e, url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty') {
    let idArr = []
    idArr = await axios.get(url)
    return idArr.data
  }

  async function loadPosts() {
    setIsLoading(true)
    const news = []
    let idArr = await fetchId()
    idArr.length -= 400
    news.length = 0
    if (idArr.length >= 100) {
      console.log("ЗАПРОС СТАТЬЕЙ...");
      for (const value of idArr) {
        if (value) {
          news.push(fetchId({}, `https://hacker-news.firebaseio.com/v0/item/${value}.json?print=pretty`))
        }
      }
    }
    if (news.length >= 100) {
      postsArr.length = 0
      for (let i = 0; i < news.length; i++) {
        news[i]
          .then((res) => postsArr.push(res))
          .then(() => {
            if (postsArr.length === 100) {
              setPost([...postsArr])
              setIsLoading(false)
              setPageLoad(false)
            }
          })
      }
    }
  }

  const Timer = ({ timeoutSec }) => {
    const [counter, setCounter] = useState(timeoutSec);
  
    useEffect(() => {
      const timer = counter >= 0 && setInterval(() => setCounter(counter + 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
    if(counter === 60){
      setCounter(counter - 60)
      loadPosts()
    }
    return <div>Обновление через: {counter}с</div>;
  };


  const dispatch = useDispatch()
  const time = useSelector(state => state.cash.cash) 

  const [postsArr, setPost] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedPosts = usePosts(postsArr, filter.sort, filter.query)
  const [isLoading, setIsLoading] = useState(false)
  const [postError, setPostError] = useState('')
  const [pageLoad, setPageLoad] = useState(false)


  useEffect(() => {
    loadPosts()
  },[])

  const createPost = (newPost) => {
    setPost([...postsArr, newPost])
  }

  const removePost = (post) => {
    console.log(post.id)
    setPost(postsArr.filter(p => p.id !== post.id))
  }

 
  return (
    <div className="App">
      <div className="app-container">
        <span>{Timer({timeoutSec:0})}</span>
        {/* <MyForm create={createPost} /> */}
        <PostFilter onEvent={loadPosts} filter={filter} setFilter={setFilter}></PostFilter>
        {postError &&
          <h1>Произошла ошибка - {postError}</h1>
        }
        {isLoading
          ? <Loader></Loader>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} />
        }
      </div>
    </div>
  );
}

export default Feed;

  // const anyFetch = async (url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty') => {
  //   fetch(url)
  //       .then(res => res.json())
  //       .then(arr => arr.map(
  //                id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  //        ))
  //       .then(res => res)
  //   }

  // const allData = anyFetch().then(res => console.log(res));
  
  // function does(data){
  //   console.log(data);
  // }