const currencyUnit = {
    PENNY: 1,
    NICKLE: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    ONEHUNDRED: 10000,
};

const checkCashRegister = (price, cash, cid) => {
    let changeSum = cash * 100 - price * 100;
    let changeSumCopy = changeSum;
    let change = [];
    let status = "";

    let cidSum = 0;
    let filterCid = cid.filter((e) => e[1] !== 0).reverse();

    filterCid.forEach((element) => {
        let currency = element[0];
        let currentSum = element[1] * 100;
        cidSum += currentSum;
        let amount = 0;
        while (changeSum >= currencyUnit[currency] && currentSum > 0) {
            amount += currencyUnit[currency];
            changeSum -= currencyUnit[currency];
            currentSum -= currencyUnit[currency];
        }
        if (amount !== 0) {
            change.push([currency, amount / 100]);
        }
    });

    if (changeSum > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } else if (changeSum == 0 && changeSumCopy == cidSum) {
        status = "CLOSED";
        change = cid;
    } else {
        status = "OPEN";
    }
    return { status: status, change: change };
};
