import React, { useEffect, useState } from 'react'
import { getInvoice, getTotal } from './services/InvoiceService'
import { InvoiceView } from './components/InvoiceView';
import { ClientView } from './components/ClientView';
import { CompanyView } from './components/CompanyView';
import { ListItemsView } from './components/ListItemsView';
import { TotalView } from './components/TotalView';
import { FormItemsView } from './components/FormItemsView';

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {

    const [activeForm, setActiveForm] = useState(false);

    const [counter, setCounter] = useState(4);

    const [total, setTotal] = useState(0);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    const { id, name, client, company, items: itemsInitial } = invoice;

    useEffect(() => {
        const data = getInvoice();
        setInvoice(data);
        setItems(data.items);
    }, []);

    useEffect(() => {
        setTotal(getTotal(items));
    }, [items]);

    const handlerAddItems = ({ product, price, quantity }) => {
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: +quantity.trim(),
        }])

        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return (
        <>
            <div className='container'>
                <div className='card my-3'>

                    <div className='card-header'>
                        InvoiceApp
                    </div>

                    <div className='card-body'>
                        <InvoiceView id={id} name={name} />

                        <div className='row my-4'>
                            <div className='col'>
                                <ClientView title="Datos del cliente" client={client} />
                            </div>
                            <div className='col'>
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem={handlerDeleteItem} />

                        <TotalView total={total} />

                        <button
                            className='btn btn-secondary'
                            onClick={onActiveForm}>
                            {!activeForm ? 'Agregar Item' : 'Ocultar formulario'}
                        </button>

                        {!activeForm || <FormItemsView handlerAddItems={handlerAddItems} />}
                    </div>
                </div>
            </div >
        </>
    )
}
