import React from 'react';
import PostItem from './../Posts/PostItem';
import style from './postListStyle.module.css'
const PostList = ({posts,title,remove}) => {
	
	if(!posts.length){
		return <h1>Постов нет</h1>
	}
	return(
		<div className={style.postlist}>
			<h1 style={{margin:"20px 0 10px 0"}}>{title}</h1>
					{posts.map((post, index)=> 
						<PostItem number={index+1} post={post} key={post.id} remove={remove} />
					)}
		</div>
	)
}

export default PostList;
