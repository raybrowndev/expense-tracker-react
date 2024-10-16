import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
    <h3>History</h3>
    <ul id="list" className='text-red-500'>
      {transactions.map(transaction => (
        <li className="minus">
          {transaction.text}: £{transaction.amount}
        </li>
      ))}
        <li id="minus">
            Cash<span>-£400</span><button className="delete-btn">x</button>
        </li>
        
    </ul>
    </>
  )
}

export default TransactionList