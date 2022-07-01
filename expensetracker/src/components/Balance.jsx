import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalState'

const Balance = () => {

    const {transactions} = useContext(GlobalContext)
      
    if(!transactions )
        return;
    


    const amounts = transactions.map(transaction => transaction.amount)
    console.log(amounts)


    const income = amounts.filter((mov) => mov > 0).reduce((a ,b) => a + b , 0)
    console.log(income)
    const outcome = amounts.filter((mov) => mov < 0).reduce((a ,b) => a + b , 0)
    console.log(outcome)
   
    const balance = income + outcome
    console.log(balance)
  return (
    <div>
        <h2>Express tracker</h2>
         <p>Your Balance</p>
         <h3>{balance}$</h3>

         <div className="income-outcome">
            <div className="income">
                <h2>Income</h2>
                <p>{income}$</p>
            </div>
            <div className="outcome">
                <h2>Outcome</h2>
                <p>{outcome}$</p>
            </div>
         </div>
    </div>
  )
}

export default Balance