function lastId( arr ) {
	if ( !arr.length ) {
		return null;
	}

	return arr[arr.length - 1].id;
}

module.exports = lastId;
