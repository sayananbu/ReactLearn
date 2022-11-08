import React from 'react';
import style from './inputStyle.module.css'
const CustomInput = ({children, ...props}) => {
	return (
			<input className={style.inputs} {...props}/>
		
	);
}

export default CustomInput;
