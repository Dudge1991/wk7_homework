const MortgageConfirmation = ({salaryTotal, deposit, expense}) => {
    const mortgageTotal = salaryTotal * 3 - (expense * 6);
    const maxPropertyValue = mortgageTotal + deposit;

    return(
        <>
        <p>Your deposit amount is £{deposit.toFixed(2)}</p>
        <p>Your total salary is £{salaryTotal.toFixed(2)}</p>
        <p>The total amount you can borrow is £{mortgageTotal.toFixed(2)}</p>
        <p>The maximum amount you can spend on a property is £{maxPropertyValue.toFixed(2)}</p>
        </>
    );
}

export default MortgageConfirmation;