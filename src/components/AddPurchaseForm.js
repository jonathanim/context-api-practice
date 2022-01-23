import React from 'react';

function AddPurchaseForm() {
    return (
        <form>
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
                    />
                </div>
                <div className='col-sm'>
                    <button type="submit" className='btn btn-primary'>
                        Add Purchase
                    </button>
                </div>
            </div>
        </form>
    );
}

export default AddPurchaseForm;



