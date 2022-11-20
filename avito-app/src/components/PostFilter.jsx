import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';
import MyButton from "../components/UI/button/MyButton";


const PostFilter = ({filter,setFilter,onEvent}) => {
    return (
        <div className='settings'>
            <div className="settings__search">
                <MyInput value={filter.query} onChange={e => setFilter({...filter,query: e.target.value})} placeholder={'Поиск статьи...'}></MyInput>
                <div className="settings__searchImg"></div>
            </div>
            <div className="settings__filter">
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => {setFilter({...filter,sort:selectedSort})}}
                    defaultValue={'Сортировка'}
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'text', name: 'По описанию' },
                        { value: 'score', name: 'По рейтингу' },
                        { value: 'time', name: 'По дате' }
                    ]}
                ></MySelect>
                <MyButton  onClick={onEvent}>Обновить</MyButton>
            </div>
        </div>
    );
};

export default PostFilter;