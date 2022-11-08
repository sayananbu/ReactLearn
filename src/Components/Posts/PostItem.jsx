import React from 'react';
import CustomButton from '../UI/Button/CustomButton';
import style from './formStyle.module.css'
const PostItem = (props) => {
	
	return (
		<form className={style.form}>
			<div className={style.content}>
				<h1>{props.post.id}. {props.post.title}</h1>
				<span className={style.body}>{props.post.body}</span>
			</div>
			<CustomButton onClick={()=> {props.remove(props.post)}}>Удалить</CustomButton>
		</form>
	);
}

export default PostItem;
