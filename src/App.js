
import 'bootstrap/dist/css/bootstrap.min.css'


import Budget from './components/Budget';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import Purchases from './components/Purchases';
import AddPurchaseForm from './components/AddPurchaseForm';


function App() {
  return (



    <div className='container'>
      <h1 className='mt-3'>Expense Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <SpentSoFar />
        </div>
      </div>
      <h2 className='mt-3'>Purchases</h2>
      <div className='row mt-2'>
        <Purchases />
      </div>

      <h2 className='mt-3'>Add Purchase</h2>

      <div className='mt-2'>
        <AddPurchaseForm />
      </div>
    </div>




  );
}

export default App;
