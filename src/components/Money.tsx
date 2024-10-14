import React from 'react'

type MoneyProps ={
    value: number;
}

const formatCurrency = (value: number): string => {
    return `£${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

export const MoneyLarge: React.FC<MoneyProps> = ({value}) => {
  return (
    <>
        <h1 className="text-4xl font-bold text-gray-700">{formatCurrency(value)}</h1>
    </>
  )
}

export const MoneyLargeIncome: React.FC<MoneyProps> = ({value}) => {
    return (
      <>
          <h1 className="text-2xl font-bold text-green-500">+ {formatCurrency(value)}</h1>
      </>
    )
  }

  export const MoneyLargeExpense: React.FC<MoneyProps> = ({value}) => {
    return (
      <>
          <h1 className="text-2xl font-bold text-red-500">-{formatCurrency(value)}</h1>
      </>
    )
  }

  export const MoneySmall: React.FC<MoneyProps> = ({value}) => {
    return (
      <>
          <h1 className="text-lg font-bold text-slate-800">{formatCurrency(value)}</h1>
      </>
    )
  }