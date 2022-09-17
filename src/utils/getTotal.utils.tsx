const currencyStringToInteger = (str:string) => {
    const removedDollarSignAndComma = str.replace('$', '').replace(',', '')
    return Number(removedDollarSignAndComma)
}

export const getTotal = (currencyArr:string[]):string => {
    const integerArr = currencyArr.map(amt => currencyStringToInteger(amt))
    const total = integerArr.reduce((prev, curr) => prev + curr)
    return `$${new Intl.NumberFormat().format(total)}`
}