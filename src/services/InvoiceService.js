import { invoice } from '../data/invoice'

export const getInvoice = () => {

    const total = getTotal(invoice.items);

    return { ...invoice, total };
}

export const getTotal = (items) => {

    // let total = 0;
    // invoice.items.forEach(item => { total = total + item.price * item.quantity; })

    return items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

