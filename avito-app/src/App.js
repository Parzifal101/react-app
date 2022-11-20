import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './router/AppRouter';


const App = () => {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  
  
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
};

export default App;



  // async function fetchPosts(){
  //   const idArr = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
  //   console.log(idArr.data);
  //   const news = []
  //   for (const value of idArr.data) {
  //     news.push(await axios.get(`https://hacker-news.firebaseio.com/v0/item/${value}.json?print=pretty`))
      
  //   }
  //   console.log([...news])
  //   console.log(news[0].data)
  //   postsArr.length = 0
  //   for (let i = 0; i < news.length; i++) {      
  //     postsArr.push(news[i].data)
      
  //   }
  //   setPost([...postsArr])
  //   console.log(postsArr)
  //   console.log(sortedAndSearchedPosts)
  // }

//------------------------

// function resolveAfterFetch(url) {
//   return new Promise((resolve) => {
//     fetch(url)
//       .then(res => res.json())
//       .then(result => {
//         resolve(result)  
//       })
//   });
// }

// function resolveAfterFetch2(idArr) {
//   const storiesStack = []
//   return new Promise((resolve) => {
//     for (let i = 0; i < idArr.length; i++) {
//       fetch(`https://hacker-news.firebaseio.com/v0/item/${idArr[i]}.json?print=pretty`)
//       .then(res => res.json())
//       .then(result => {
//         storiesStack.push(result)
//         // console.log(storiesStack)
//         resolve(storiesStack)  
//       })
      
//     }
    
//   });
// }


// async function add1() {
//   const idArr = await resolveAfterFetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  
//   const storArr = await resolveAfterFetch2(idArr)
//   return storArr
// }
// async function add2(){
//   const data = await add1()
//   postsArr.length = 0
//   postsArr.push(data)
  
// }
// add2()
// setInterval(() =>{
//   sortPosts()
//   console.log('Выполнено')
 
// },10000)