import React, { useContext } from 'react';
import { AppContext } from '../context';

function Remaining() {

    const { purchases, budget } = useContext(AppContext);

    const totalPurchaseCost = purchases.reduce((total, cur) => {
        return total = total + cur.price
    }, 0)

    const AlertType = totalPurchaseCost > budget ? 'alert-danger' : 'alert-success'

    return <div className={`alert ${AlertType} text-center`}>
        <p>Remaining Budget: ${budget - totalPurchaseCost}</p>
    </div >;
}

export default Remaining;
