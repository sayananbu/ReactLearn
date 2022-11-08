import React from 'react';
import CustomInput from '../UI/Input/CustomInput';
import CustomSelect from '../UI/select/CustomSelect';

const PostFilter = ({filter,setFilter}) => {
	return (
		<div>
			<CustomInput
				placeholder="Поиск"
				value={filter.query}
				onChange={(e)=>setFilter({...filter,query:e.target.value})}
			/>

			<CustomSelect 
				defVal={"Сортировка по"}
				value={filter.sort}
				onChange={selecetedSort=>setFilter({...filter,sort:selecetedSort})}
				options={[
					{value:"title",name:"По названию"},
					{value:"body",name:"По содержанию"}
				]}
			/>
		</div>
	);
}

export default PostFilter;
