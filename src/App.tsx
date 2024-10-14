import React from 'react';
import { Header } from './components/Header' 
import { Balance } from './components/Balance' 
import { IncomeExpenses } from './components/IncomeExpenses';


function App() {
  return (
    <>
    <div className="bg-pink-200 h-screen p-7 mx-auto w-full max-w-md"> 
      <Header title="Expense App" />
        <div className="container">
          <Balance />
          <IncomeExpenses />
        </div>

    </div>
    </>
  )
}

export default App;
