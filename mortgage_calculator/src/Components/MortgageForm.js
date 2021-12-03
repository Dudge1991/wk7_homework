import { useState } from "react";
import "./MortgageForm.css"

const MortgageForm = ({calculateTotal, depositAmount, monthExpense}) => {
    const [applicant1, setApplicant1] = useState(0);
    const [applicant2, setApplicant2] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [monthCommitments, setMonthCommitments] = useState(0);

    const handleApp1Change = (e) => {
        setApplicant1(e.target.value);
    }

    const handleApp2Change = (e) => {
        setApplicant2(e.target.value);
    }

    const handleDepositChange = (e) => {
        setDeposit(e.target.value);
    }

    const handleMonthlyCommitmentChange = (e) => {
        setMonthCommitments(e.target.value);
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const salaryOneToSubmit = parseFloat(applicant1);
        const salaryTwoToSubmit = parseFloat(applicant2);
        const depositTotal = parseFloat(deposit);
        const monthCommitmentsTotal = parseFloat(monthCommitments);

        if (!salaryOneToSubmit && !salaryTwoToSubmit){
            return
        } else if (salaryOneToSubmit && !salaryTwoToSubmit){
            calculateTotal(salaryOneToSubmit);
            depositAmount(depositTotal);
            monthExpense(monthCommitmentsTotal);
        } else if (!salaryOneToSubmit && salaryTwoToSubmit){
            return
        }

        calculateTotal(salaryOneToSubmit + salaryTwoToSubmit);
        depositAmount(depositTotal);
        monthExpense(monthCommitmentsTotal);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <label>
                Applicant 1 Annual Salary:
                <input
                    type="number"
                    placeholder="0.00"
                    value={applicant1}
                    onChange={handleApp1Change}
                />
            </label>
            <label>
                Applicant 2 Annual Salary:
                <input
                    type="number"
                    placeholder="0.00"
                    value={applicant2}
                    onChange={handleApp2Change}
                />
            </label>
            <label>
                Deposit amount for property:
                <input
                    type="number"
                    placeholder="0.00"
                    value={deposit}
                    onChange={handleDepositChange}
                />
            </label>
            <label>
                Other monthly commitments:
                <input
                    type="number"
                    placeholder="0.00"
                    value={monthCommitments}
                    onChange={handleMonthlyCommitmentChange}
                />
            </label>
            <input 
                type="submit"
                value="calculate"
            />
            
        </form>
    );
}

export default MortgageForm;