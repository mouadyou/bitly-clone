import React from 'react'
import './sidebar.css'
export default (props) => {
	const { isShowing } = props
	return (
		<div className={`sidebar__spacer ${isShowing ? 'open' : ''}`}
			onClick={props.dispose}>
		</div>
	)
}
