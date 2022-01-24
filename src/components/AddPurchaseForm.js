import React, { useState, useContext } from 'react';
import { AppContext } from '../context';
import { v4 as uuidv4 } from 'uuid';

function AddPurchaseForm() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const { dispatch } = useContext(AppContext)

    const handleSubmit = e => {
        e.preventDefault()

        const newPurchase = {
            id: uuidv4(),
            name: name,
            price: parseInt(price),
        }
        dispatch({
            type: 'ADD_PURCHASE',
            payload: newPurchase
        })
        setName('')
        setPrice('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row justify-content-center align-items-center'>
                <div className='col-sm'>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        required='required'
                        className='form-control'
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        required='required'
                        className='form-control'
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='col-sm '>
                    <button type="submit" className='btn btn-primary'>
                        Add Purchase
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddPurchaseForm;



