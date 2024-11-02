import React from 'react';
import { Header } from './components/Header' 
import { Balance } from './components/Balance' 
import { IncomeExpenses} from './components/IncomeExpenses';
import { MoneySmallExpense } from './components/Money';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { TestTester, Counter, Toggle, InputTracker } from './components/testTester';



function App() {
  return (
    <>
    <GlobalProvider>
    <div className=""> 
    <div className="h-screen p-7 mx-auto w-full"> 
    <TestTester />
    <Counter />
    <Toggle />
    <InputTracker />

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
    </GlobalProvider>
    </>
  )
}

export default App;
