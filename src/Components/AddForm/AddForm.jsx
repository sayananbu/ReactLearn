import React,{useState} from 'react';
import CustomInput from '../UI/Input/CustomInput';
import CustomButton from '../UI/Button/CustomButton';
import style from './addformStyle.module.css'

const AddForm = ({create}) => {

	const [post,setPost]=useState({title:'',body:''})

	function AddPost(e) {
		e.preventDefault()
		if(post.title!=="" && post.body!==""){
			create({...post,id:Date.now()})
			setPost({title:'',body:''})
		}
	}
	return (
		<form className={style.addForm}>
			<CustomInput 
				type="text"
				placeholder='Title'
				onChange={e=>setPost({...post, title:e.target.value})}
				value={post.title}
			/>
			<CustomInput 
				type="text"
				placeholder='Body'
				onChange={e=>setPost({...post, body:e.target.value})}
				value={post.body}
			/>
			<CustomButton style={{backgroundColor:"lime"}} onClick={AddPost}>Добавить</CustomButton>
		</form>
	);
}

export default AddForm;
