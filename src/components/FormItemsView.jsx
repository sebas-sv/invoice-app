import React, { useState } from 'react'

export const FormItemsView = ({ handlerAddItems }) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    const { product, price, quantity } = formItemsState;

    const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
    }

    const onInvoiceItemsSubmit = (e) => {
        e.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length < 1) {
            alert('Error: el preico tiene que ser mayor que 0');
            return;
        }
        if (isNaN(price.trim())) {
            alert('Error: el precio no es un número');
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error: la cantidad tiene que ser mayor que 0');
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error: la cantidad no es un número');
            return;
        }

        handlerAddItems(formItemsState);

        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        })
    }

    return (
        <form
            className='w-20'
            onSubmit={onInvoiceItemsSubmit}>
            <input
                type='text'
                name='product'
                value={product}
                placeholder='Producto'
                className='form-control m-3'
                onChange={onInputChange} />
            <input
                type='text'
                name='price'
                value={price}
                placeholder='Precio'
                className='form-control m-3'
                onChange={onInputChange} />
            <input
                type='text'
                name='quantity'
                value={quantity}
                placeholder='Cantidad'
                className='form-control m-3'
                onChange={onInputChange} />
            <button
                type='submit'
                className='btn btn-primary m-3'>
                Crear item
            </button>
        </form>
    )
}
