export const invoice = {
    id: 111,
    name: 'PC a medida',
    client: {
        name: 'Sebas',
        lastName: 'Solís',
        address: {
            country: 'España',
            city: 'Sevilla',
            street: 'Mi Calle',
            number: 123
        }
    },
    company: {
        name: 'Mi compañía',
        fiscalNumber: 1234567,
    },
    items: [
        {
            id: 1,
            product: 'CPU',
            price: 300,
            quantity: 1,
        },
        {
            id: 1,
            product: 'Teclado mecánico',
            price: 100,
            quantity: 1,
        },
        {
            id: 3,
            product: 'Monitor',
            price: 200,
            quantity: 2,
        },
    ]
}