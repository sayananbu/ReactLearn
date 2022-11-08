import React from 'react';
import styles from './btnStyle.module.css'
const CustomButton = ({children, ...props}) => {
	return (
			<button className={styles.btn} {...props}>{children}</button>
		
	);
}

export default CustomButton;
