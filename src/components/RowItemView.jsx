import PropTypes from "prop-types"
import React from 'react'

export const RowItemView = ({ id, product, price, quantity, handlerDeleteItem }) => {
    return (
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handlerDeleteItem(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

RowItemView.propTypes = {
    price: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}
