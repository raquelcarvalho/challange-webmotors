import React from 'react'

import styles from './TextInput.module.sass'

const TextInput = (props) => {
	const { name, className, ...inputProps } = props
	return (
		<label className={ `${ styles['container'] } ${ className || '' }` }>
			<h5 className={ styles['label'] }>{ name }</h5>
			<input className={ styles['input'] } { ...inputProps } />
		</label>
	)
}

export default TextInput
