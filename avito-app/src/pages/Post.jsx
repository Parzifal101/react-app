import React, {useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {timeConverter} from '../hooks/timeConverter'
import PostFilter from '../components/PostFilter';
import MyButton from '../components/UI/button/MyButton';


const Post = () => {
    async function fetchId(url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'){
        const response = await axios.get(url)
        return response.data
        // setPost(response.data)
        // console.log(response.data)
      }

    const params = useParams()
    const [post, setPost] = useState('');
    const [comments, setComment] = useState([]);
    const [visible, setVisible] = useState('none')
    const [btnName, setBtnName] = useState('Открыть')

    
    useEffect( () => {
        async function loadPost(){
            const post = await fetchId(`https://hacker-news.firebaseio.com/v0/item/${params.id}.json?print=pretty`)
            await setPost(post)
        }
        loadPost()
    }, []);

    useEffect(() => {
        loadComment()
    },[post])

    // useEffect(() => {
    //     async function loadTreeComm(){
    //         for (const value of comments) {
    //             if(value.kids){
    //                 loadComment(value)
    //             }
    //            }
    //     }
    //     loadTreeComm()
       
    // },[comments])
    
    function hideShow(){
        if(visible === 'block'){
            setVisible('none')
            setBtnName('Открыть')
        }else if(visible === 'none'){
            setVisible('block')
            setBtnName('Закрыть')
        }
    }

    async function loadComment(){
        const gottenCom = []
        const stack = []
        if (post.kids) {
            for (let i = 0; i < post.kids.length; i++) {
                stack[i] = (await fetchId(`https://hacker-news.firebaseio.com/v0/item/${post.kids[i]}.json?print=pretty`))
                if(!stack[i].deleted && stack[i].type === 'comment'){
                    gottenCom.push(stack[i])
                    if(stack[i].kids){
                       for (let j = 0; j < stack[i].kids.length; j++) {
                        const kid = (await fetchId(`https://hacker-news.firebaseio.com/v0/item/${stack[i].kids[j]}.json?print=pretty`))
                        kid.child = true
                        gottenCom.push(kid)
                        console.log(kid);
                       }
                    }
                }
            }
            if(gottenCom){
                console.log(gottenCom);
                setComment(gottenCom)
            }
        }
    }

    const navigate = useNavigate()

    return (
        <div className='single-post'>
            <div onClick={() => navigate(`/feed`)} className="go__back"></div>
            <div className="single-post__container">
            <div>
                <strong style={{fontSize: 16}} className='single-post__author'>"{post.by}"</strong>
                <span>{timeConverter(post.time)}</span>
                <h1 className='single-post__title'>{post.title}</h1>
                <a target='blank' href={post.url}>{post.url}</a>
                <p dangerouslySetInnerHTML={{__html: post.text}}></p>
            </div>
            <div>
                {comments
                ?<div className='comments'> 
                        <button className='comments__load-btn' onClick={loadComment}></button>
                        <h3 className='comments__length'>Комментарии: <span className='comments__length-count'>{comments.length}</span></h3>
                        <div className="comments__content">
                        {comments.map((com) =>
                        com.child === true
                            ?<div style={{marginLeft: '22px',display: visible}} key={com.id}>
                                <h3>{com.by}</h3>
                                <p dangerouslySetInnerHTML={{__html: com.text}}></p>
                            </div>
                            :<div key={com.id}>
                                <h3>{com.by}</h3>
                                <p className='comments__text' dangerouslySetInnerHTML={{__html: com.text}}></p>
                                <span className='comments__open-btn' onClick={hideShow}>{btnName}</span>
                            </div>
                        
                    )}
                        </div>
                        </div>
                :<h3>Коммент не найден</h3>
                }
            </div>
            </div>
        </div>
    );
};

export default Post;