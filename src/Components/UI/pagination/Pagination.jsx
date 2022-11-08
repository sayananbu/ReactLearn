import React from 'react';
import { usePagination } from '../../hooks/usePagination';
import CustomButton from '../Button/CustomButton';

const Pagination = ({totalPages,page,changePage}) => {
	const pagesArray=usePagination(totalPages);
	return (
		<div style={{display:"flex",justifyContent:"center"}}>{
			pagesArray.map(p=>
				<CustomButton style={{margin:"5px 8px"}}
				key={p}
				onClick={()=>changePage(p)}
				>{p}</CustomButton>
			)}
			</div>
	);
}

export default Pagination;
