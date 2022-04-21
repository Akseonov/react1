const lastId = require( '../functions for tests/function' );

const array = [
	{
		id: 0,
	},
	{
		id: 1,
	}
]

describe( 'lastId', () => {
	test( 'Вернет последний id', () => {
		expect( lastId( array ) ).toBe( 1 );
	} );

	test( 'Нет элементов', () => {
		expect( lastId( [] ) ).toBe( null );
	} );
} );
