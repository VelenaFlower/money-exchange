// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let money = {};
    money.H = 50;
    money.Q = 25;
    money.D = 10;
    money.N = 5;
    money.P = 1;

    if (currency <= 0 ) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    money.H = Math.floor(currency/50);
    currency = currency - money.H *50;

    money.Q = Math.floor(currency/25);
    currency = currency - money.Q *25;

    money.D = Math.floor(currency/10);
    currency = currency - money.D *10;

    money.N = Math.floor(currency/5);
    currency = currency - money.N *5;

    money.P = Math.floor(currency/1);

    for (let key in money) {
        if (money[key]===0) {
            delete money[key];
        }
    }

    return money;
};
