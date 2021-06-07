import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPoplarVideos, getVideosByCategory } from '../../redux/actions/videos.action';
import './_categoriesBar.scss'

const keywords = ['All', 'React js', 'Angular js', 'React Native', 'use of API', 'Redux', 'Music', 'Algorithm Art ', 'Guitar', 'Bengali Songs', 'Coding', 'Cricket', 'Football', 'Real Madrid', 'Gatsby', 'Poor Coder', 'Shwetabh'];

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All');

    const dispatch = useDispatch();
    const handleClick = (v) => {
        setActiveElement(v);

        if(v === 'All'){
            dispatch(getPoplarVideos());

        } else {
            dispatch(getVideosByCategory(v));
        }
    }

    return (
        <div className="categoriesBar">
            { 
                keywords.map((v,i) => (
                    <span onClick={() => handleClick(v)} key={i} className={activeElement === v ? 'active' : ''}>{v}</span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
