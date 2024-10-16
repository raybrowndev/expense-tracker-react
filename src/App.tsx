import React from 'react';
import { Header } from './components/Header' 
import { Balance } from './components/Balance' 
import { IncomeExpenses} from './components/IncomeExpenses';
import { MoneySmallExpense } from './components/Money';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <>
    <div className="bg-pink-200"> 
    <div className="h-screen p-7 mx-auto w-full max-w-md"> 
      <Header title="Expense App" />
        <div className="container">
          <Balance />
          Balance History 
          <MoneySmallExpense value={18.99} />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
    </div>
    </>
  )
}

export default App;
