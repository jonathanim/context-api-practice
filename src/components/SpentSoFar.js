import React, { useContext } from 'react';
import { AppContext } from '../context';

function SpentSoFar() {

    const { purchases, budget } = useContext(AppContext)

    const totalSpent = purchases.reduce((total, cur) => {
        return total + cur.price
    }, 0)
    console.log(totalSpent)

    const AlertType = totalSpent > budget ? 'alert-danger' : 'alert-success'

    return <div className={`alert ${AlertType} text-center`}>
        <p>
            Spent so far ${totalSpent}
        </p>
    </div>;
}

export default SpentSoFar;
