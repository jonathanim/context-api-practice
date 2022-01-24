import React, { useState, useContext } from 'react';
import { AppContext } from '../context';

function EditBudget() {
    const { dispatch } = useContext(AppContext)
    const [myBudget, setMyBudget] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'EDIT_BUDGET',
            payload: myBudget
        })


    }

    return <form>
        <div className='input-group'>
            <input type='text' required="required" value={myBudget} onChange={(e) => { setMyBudget(e.target.value) }} />
            <button type='submit' className='btn btn btn-primary' onClick={(e) => handleSubmit(e)}>
                Modify
            </button>
        </div>
    </form>

}

export default EditBudget;
