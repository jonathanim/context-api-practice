import React, { useContext } from 'react';
import { AppContext } from '../context'
import EditBudget from './EditBudget';
import SaveBudget from './SaveBudget';

function Budget() {
    const { budget } = useContext(AppContext);

    const AlertType = budget > 0 ? 'alert-success' : 'alert-danger'
    return (
        <div className={`alert ${AlertType}`}>

            {budget === 0 ? <SaveBudget /> : <EditBudget />}


        </div>
    )



}

export default Budget;
