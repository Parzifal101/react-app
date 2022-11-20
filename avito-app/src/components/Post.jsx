import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom'

const Post = (props) => {
    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    const navigate = useNavigate()
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <p className='post__author'>{props.post.by}</p>
                    {props.post.type !== 'story'
                        ?<div className="post__type">{props.post.type}</div>
                        :<div></div>
                    }
                    <strong className='post__title' onClick={() => navigate(`/post/${props.post.id}`)}>{props.num}. {props.post.title}</strong>
                    {/* <p className='post__text' dangerouslySetInnerHTML={{__html: props.post.text}}></p> ТЕКСТ НА ГЛАВНОЙ БЫЛ УБРАН ПО УСЛОВИЮ. НО СТИЛИСТИЧЕСКИ ВЫГЛЯДИТ ПРИЯТНО  */}
                    <span style={{opacity: '50%',fontSize: '14px',position: 'relative',top:'12px'}}>{timeConverter(props.post.time)}</span>
                    {props.post.score <= 1
                        ?<span className='post__rate-low'>Рейтинг: {props.post.score}</span>
                        :props.post.score <= 10
                        ?<span className='post__rate-mid'>Рейтинг: {props.post.score}</span>
                        :props.post.score > 10
                        ?<span className='post__rate-high'>Рейтинг: {props.post.score}</span>
                        :<span style={{opacity: '50%',fontSize: '14px', color: "black",position: 'relative',top:'12px', marginLeft: '6px'}}>Рейтинг отсутсвует</span>
                    }
                    <div className="post__btns">
                        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                    </div>
                    {/* <div className="post__btns">
                        <MyButton onClick={() => navigate(`/post/${props.post.id}`)}>Открыть</MyButton>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Post;