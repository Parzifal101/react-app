import React from 'react';
import Post from './Post';

const PostList = ({remove,posts}) => {
    if (!posts.length) {
        return (
            <h1>Посты не найдены!</h1>
        )
    }
    
    return (
        <div className='post__list'>
            <h1 className='post__header'>Список постов</h1>
            {posts.map((post,index) =>
           
                <Post remove={remove} num={index+1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;