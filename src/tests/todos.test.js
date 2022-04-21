import { render, screen } from '@testing-library/react';
import Todos from '../react/veiws/todos/todos';

test('renders learn react link', () => {
	render(<Todos />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
