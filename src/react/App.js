import Message from './components/Message';
import Header from "./views/layout/Header";
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hello: 'Hello, my name is Konstantin' };
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Message text={this.state.hello}/>
			</div>
		);
	}
}

export default App;
