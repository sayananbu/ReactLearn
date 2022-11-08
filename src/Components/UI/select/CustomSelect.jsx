import React from 'react';
import styles from './selectStyle.module.css'
const CustomSelect = ({options, defVal, value, onChange}) => {
	return (
		<select className={styles.select}
			value={value}
			onChange={e=>onChange(e.target.value)}
		>
			<option disabled value="">{defVal}</option>
			{
				options.map(option=>
					<option key={option.value} value={option.value}>{option.name}</option>
				)
			}
		</select>
	);
}

export default CustomSelect;
