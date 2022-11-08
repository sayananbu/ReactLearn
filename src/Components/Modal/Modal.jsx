import React from 'react';
import style from './modal.module.css';
const Modal = ({children, visible, setVisible}) => {

	const rootClasses=[style.modal]
	if(visible){
		rootClasses.push(style.active)
	}
	return (
		<div className={rootClasses.join(' ')} onClick={(e)=>setVisible(false)} >
			<div className={style.content} onClick={(e)=>e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default Modal;
