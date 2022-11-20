import React,{useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const MyForm = ({create}) => {
    const [post,setInputs] = useState({title:'', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setInputs({title: '', body: ''})
      }
    return (
        <form action="">
            <MyInput value={post.title} onChange={e => setInputs({ ...post, title: e.target.value })} type="text" placeholder="Название поста" />
            <MyInput value={post.body} onChange={e => setInputs({ ...post, body: e.target.value })} type="text" placeholder="Описание поста" />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default MyForm;