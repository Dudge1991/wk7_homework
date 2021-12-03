import { useState } from "react";
import MortgageConfirmation from "../Components/MortgageConfirmation";
import MortgageForm from "../Components/MortgageForm";

const MortgageCalculatorContainer = () => {
    const [salaryTotal, setSalaryTotal] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [expense, setExpense] = useState(0);
    
    const calculateTotal = (salary) => {
        setSalaryTotal(salary);
    }

    const depositAmount = (deposit) => {
        setDeposit(deposit);
    }

    const monthExpense = (expense) => {
        setExpense(expense);
    }

    return(
        <>
            <h1>Mortgage Calculator</h1>
            <MortgageForm 
            calculateTotal={(salary) => calculateTotal(salary)} 
            depositAmount={(deposit) => depositAmount(deposit)}
            monthExpense={(expense) => monthExpense(expense)}
            />
            <MortgageConfirmation 
            salaryTotal={salaryTotal}
            deposit={deposit}
            expense={expense}
            />
        </>
    );
}

export default MortgageCalculatorContainer;