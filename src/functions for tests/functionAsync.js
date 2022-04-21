async function getData() {
	try {
		const result = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20');
		return await result.json();
	} catch (e) {
		return null;
	}
}

module.exports = getData;
