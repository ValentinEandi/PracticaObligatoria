
import React from 'react';
import Table from './components/Table';
import './App.css'

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  // Calcular el promedio de ingreso neto utilizando reduce
  const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table data={netIncomes} />
      <p>El promedio de ingreso neto es: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;

