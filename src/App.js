
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './context';


import Budget from './components/Budget';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import Purchases from './components/Purchases';
import AddPurchaseForm from './components/AddPurchaseForm';


function App() {

  return (
    <AppProvider>
      <div className='container'>
        <div className='row'>
          <h1 className='mt-5 text-center'>Expense Tracker</h1>
        </div>
        <div className='row mt-5'>
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
        <div className='row mt-5'>
          <Purchases />
        </div>

        <h2 className='mt-5'>Add Purchase</h2>

        <div className='mt-5'>
          <AddPurchaseForm />
        </div>
      </div>



    </AppProvider>
  );
}

export default App;
