import React, { useContext } from 'react';
import PurchaseItem from './PurchaseItem';
import { AppContext } from '../context';

function Purchases() {
    const { purchases } = useContext(AppContext)

    return <ul className='list-group'>
        {purchases.map((purchase) => (
            <PurchaseItem
                key={purchase.id}
                id={purchase.id}
                name={purchase.name}
                price={purchase.price}
            />
        ))}
    </ul>;
}

export default Purchases;
