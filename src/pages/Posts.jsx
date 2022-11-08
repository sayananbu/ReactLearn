import React, { useState, useEffect } from "react"
import AddForm from "../Components/AddForm/AddForm"
import PostService from "../Components/API/PostService"
import { useFetching } from "../Components/hooks/useFetching"
import { usePosts } from "../Components/hooks/usePosts"
import Modal from "../Components/Modal/Modal"
import PostFilter from "../Components/PostFilter/PostFilter"
import PostList from "../Components/PostList/PostList"
import CustomButton from "../Components/UI/Button/CustomButton"
import Loader from "../Components/UI/Loader/Loader"
import Pagination from "../Components/UI/pagination/Pagination"
import { getPageCount } from "../utils/pages"



function Posts() {
	const [posts,setPosts]=useState([])
	const [filter, setFilter]=useState({sort:'', query:''})
	const [modal, setModal]=useState(false)
	const sortedAndSearchedPosts=usePosts(posts, filter.sort,filter.query)
	const [totalPages, setTotalPages]=useState(0)
	const [limit, setLimit]=useState(10)
	const [page, setPage]=useState(1)

	const [fetchPosts, isPostLoading,postError] = useFetching(async ()=>{
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount=response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})
	
	
	useEffect(() => {
		fetchPosts();
	}, [page]);

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
		setModal(false)
	}
	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id!==post.id))
	}
	const changePage=(page)=>{
		setPage(page)
	}
	return(
		<div className='App'>
			<Modal 
				visible={modal}
				setVisible={setModal}>
				<AddForm create={createPost}/>
			</Modal>
			<div className='controls'>
				<CustomButton style={{margin:"20px 0 10px 0",background:"orange"}} onClick={()=>setModal(true)}>
				Создать пост
			</CustomButton>
			
			<PostFilter filter={filter} setFilter={setFilter}/>
			{
				postError &&
				<h1>Error {postError}</h1>
			}
			{
				isPostLoading
				? <div style={{display:'flex', justifyContent:'center', marginTop:'15px'}}><Loader /></div>
				: <PostList title={"Список постов про JS"} posts={sortedAndSearchedPosts} remove={removePost}/>
			}
			<Pagination 
				page={page} 
				totalPages={totalPages} 
				changePage={changePage}
			/>
			</div>
			

		</div>
		
	)
}

export default Posts;
