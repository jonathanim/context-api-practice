import React from 'react';
import { TiDelete } from 'react-icons/ti'

function PurchaseItem({ id, name, price }) {
    return (
        <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
            <p style={{ color: "black", fontSize: "1.5rem" }}>
                {name}
            </p>
            <div>
                <span className='badge bg-info badge-pill'>
                    {price}
                </span>
                <TiDelete size="2.5rem" color="red">
                </TiDelete>
            </div>
        </li>
    )
}

export default PurchaseItem;
