import React from 'react';
import PurchaseItem from './PurchaseItem';

function Purchases() {
    const purchases = [{
        id: 1,
        name: "gas",
        price: 40
    }, {
        id: 2,
        name: "others",
        price: 200
    },
    {
        id: 3,
        name: "food",
        price: 250
    },
    {
        id: 4,
        name: "internet",
        price: 60
    },
    {
        id: 5,
        name: "car",
        price: 350
    }]

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
