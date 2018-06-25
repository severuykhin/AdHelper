import React from 'react';
import { Message } from 'semantic-ui-react'

const Error = () => {
	return (
		<div className="content error">
			<div className="container">
				<Message>
					<Message.Header>Страница не найдена</Message.Header>
				</Message>
			</div>
		</div>
	);
};

export default Error;