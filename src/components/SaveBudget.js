import React, { useState, useContext } from 'react';
import { AppContext } from '../context';

function SaveBudget() {
    const { budget, dispatch } = useContext(AppContext)
    const [myBudget, setMyBudget] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'SAVE_BUDGET',
            payload: myBudget
        })
        console.log(budget)
    }

    return <form>
        <div className='input-group'>
            <input type='text' required="required" value={myBudget} onChange={(e) => { setMyBudget(e.target.value) }} />
            <button type='submit' className='btn btn btn-primary' onClick={(e) => handleSubmit(e)}>
                SAVE
            </button>

        </div>
    </form>

}

export default SaveBudget;
