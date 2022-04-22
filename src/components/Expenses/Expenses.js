import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2020");

    const updateFilterHandler = (selectedOption) => {
        setSelectedYear(selectedOption);
    };

    const filteredExpenses = props.items.filter(
        (item) => item.date.getFullYear() == selectedYear
    );
    console.log(filteredExpenses);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    year={selectedYear}
                    onFilterChange={updateFilterHandler}
                />
                <ExpensesList year={selectedYear} expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
