import React from 'react';

const Field = (props) => {

	const { input } = props;

	return (
		<div className="ui input">
			<input  {...input}/>
		</div>
	);
};

export default Field;