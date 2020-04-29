import React from 'react'
import styles from './SimpleButton.module.sass'

const SimpleButton = ({ children, className, submit, primary, critical, ...attributes }) => (
	<button
		className={ `${ styles['button'] } ${ submit || primary ? styles['submit'] : '' } ${ critical ? styles['critical'] : '' } ${ className || '' }` }
		{ ...attributes }
	>{ children }</button>
)

export default SimpleButton