import React, {useState} from 'react'

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <>
        <h3>Add new transaction</h3>
        <form>
            {/* text field */}
            <div className="form-control">
                <label htmlFor="text" className="text">Description</label>
                <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Enter text...' />

            </div>
            {/* amount field */}
            <div className="form-control">
                <label htmlFor="amount" className="amount">
                    Amount <br/>
                    (negative - expense, positive - income)
                </label>
                    <br/>£<input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                    placeholder='Enter amount...' />
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction