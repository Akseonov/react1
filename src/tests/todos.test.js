import React from 'react';
import TestRenderer from 'react-test-renderer';
import Todos from '../react/veiws/todos/todos';

test( 'renders learn react link', () => {
	const testRenderer = TestRenderer.create(<Todos todos={ [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": false
		},
	] } />);
	const testInstance = testRenderer.root;

	expect(testInstance.findByProps({className: "h3"}).children).toEqual(['delectus aut autem']);
} );
